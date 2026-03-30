---
title: '7 Tips for Using Environment Variables in Docker and Docker Compose'
featuredImage: '../../assets/images/posts/7-tips-env-vars-in-docker.jpg'
publishedDate: 2026-03-30
---

I've worked with Docker quite a few times while building applications, yet I always seem to forget how environment variables are supposed to be handled.

The same problems keep coming back: env values not being read, `.env` files accidentally getting baked into Docker images, misconfigured ports and hosts, and hours lost to debugging.

So in this post, I want to share 7 tips I've picked up about using environment variables with Docker and Docker Compose.

## What Are Environment Variables?

Before we get into the tips, let's define what environment variables (**env vars**) actually are.

> Environment variables are external configuration settings that allow you to modify an application's behavior without altering its source code ([freeCodeCamp](https://www.freecodecamp.org/news/what-are-environment-variables-and-how-can-i-use-them-with-gatsby-and-netlify)).

By keeping configuration values outside of the application itself, we can make our apps both portable and secure, so we don't accidentally leak private credentials into version control systems like GitHub.

Common examples of values stored as env vars include the app port, database URL, JWT secret, third-party API keys, and so on.

In most projects, env vars are stored in a `.env` file at the root of the project directory. If you've browsed open source repositories, you've probably seen a `.env.example` file. Anyone who wants to run the project just copies it (`copy .env.example .env`) and updates the values to match their local setup.

Working with Docker made managing env vars feel overwhelming at first for me. That's exactly why I put together these tips from everything I've learned along the way.

## Tip 1: Don't Include Your `.env` File in the Docker Image

To build a Docker image, we typically create a `Dockerfile` at the root of our project. One of the most commonly used commands in that file is `COPY`, which copies our project files into the image. Here's an example that copies everything:

`Dockerfile`:

```docker
COPY . .
```

If you do that, every file in your project (including `.env`) will end up inside the Docker image. That's a serious problem. Anyone who can access that image can read all your `.env` values. If you push it to a registry like Docker Hub and it remains public, you might be looking for a new job 💀.

The fix is simple: create a `.dockerignore` file. It needs to live in the same directory as your `Dockerfile` (the root build context) so Docker can pick it up. Inside this file, list everything you don't want copied into the image. Think of it as `.gitignore`, but for Docker.

`.dockerignore`:

```docker
.env
```

With that in place, the `.env` file won't be included when building your Docker image.

The bottom line: whenever you create a `Dockerfile`, make sure you also create a `.dockerignore`.

## Tip 2: Make Sure Your App Can Read Env Vars from the System, Not Just from `.env`

For most of my development career, I thought of `.env` as the actual configuration source. But that's not quite right.

According to the [Twelve-Factor App](https://12factor.net/config) methodology, configuration should be stored as system environment variables (not in config files like `.env`). The `.env` file is a local development convention for **simulating** those env vars, not the recommended approach for production.

So while we use `.env` during development, when an application runs inside a container, it should read configuration from **system variables** (for example, in Node.js we accessed it with: `process.env.{VAR}`).

That means we need to make sure our app can read env vars from the OS environment, not just from a `.env` file.

As an example, with the [github.com/spf13/viper](http://github.com/spf13/viper) module in Go, simply adding `viper.AutomaticEnv()` does the trick:

`config.go`:

```go
package config

import (
	"log"

	"github.com/spf13/viper"
)

// ...

func Load() (*Config, error) {
	viper.SetConfigFile(".env")
	viper.SetConfigType("env")
	viper.AddConfigPath(".")

	// Read from system environment variables if .env file is not found
	viper.AutomaticEnv()

	if err := viper.ReadInConfig(); err != nil {
		log.Printf("Could not read .env file (%v), relying on environment variables", err)
	}

	// ...
}

```

To make this concrete, here's how env vars are injected when running a Docker image:

```bash
docker run --env-file .env <image_name>
# or
docker run -e MY_VAR=hello -e API_KEY=12345 <image_name>
```

Env vars injected this way (via `--env-file` or `-e`) become system environment variables inside the container. There's no `.env` file inside the container at all.

## Tip 3: Validate Environment Variables at App Startup

Always validate your env vars when the application starts. Without validation, your app may run into silent failures or cryptic runtime errors that are hard to trace.

Imagine forgetting to set a third-party API key and not catching it at startup. The error only surfaces when a feature that actually uses that API is triggered. That can eat up a lot of time.

Here's an example of validation in Go using the [github.com/go-playground/validator/v10](http://github.com/go-playground/validator/v10) module:

`config.go`:

```go
package config

import (
	"log"

	"github.com/go-playground/validator/v10"
	"github.com/spf13/viper"
)

type Config struct {
	App      AppConfig
	Database DatabaseConfig
}

type AppConfig struct {
	Port int    `validate:"required"`
	Env  string `validate:"required"`
}

type DatabaseConfig struct {
	Host     string `validate:"required"`
	Port     int    `validate:"required"`
	User     string `validate:"required"`
	Password string `validate:"required"`
	DBName   string `validate:"required"`
	SSLMode  string `validate:"required"`
}

func Load() (*Config, error) {
	viper.SetConfigFile(".env")
	viper.SetConfigType("env")
	viper.AddConfigPath(".")

	// Read from system environment variables if .env file is not found
	viper.AutomaticEnv()

	if err := viper.ReadInConfig(); err != nil {
		log.Printf("Could not read .env file (%v), relying on environment variables", err)
	}

	cfg := &Config{
		App: AppConfig{
			Port: viper.GetInt("APP_PORT"),
			Env:  viper.GetString("APP_ENV"),
		},
		Database: DatabaseConfig{
			Host:     viper.GetString("DB_HOST"),
			Port:     viper.GetInt("DB_PORT"),
			User:     viper.GetString("DB_USER"),
			Password: viper.GetString("DB_PASSWORD"),
			DBName:   viper.GetString("DB_NAME"),
			SSLMode:  viper.GetString("DB_SSLMODE"),
		},
	}

	validate := validator.New(validator.WithRequiredStructEnabled())
	if err := validate.Struct(cfg); err != nil {
		return nil, err
	}

	return cfg, nil
}
```

## Tip 4: Use `env_file` for Your Main Service and `environment` for Others

Your main application service will typically need all the env vars defined in `.env`. Other services, like a database, usually only need a subset of those values. With that in mind, inject env vars into the main service using the `env_file` attribute, and handle other services explicitly with the `environment` attribute.

The `${VAR}` syntax in Docker Compose automatically reads from the `.env` file (This is called [interpolation](https://docs.docker.com/reference/compose-file/interpolation/)). But, you must place the `docker-compose.yml` file in the same level directory as `.env`.

Note that any variable already defined in your shell environment will override the value from `.env`.

Keeping injection scoped per service helps minimize what each service can access, which aligns with the Principle of Least Privilege.

`docker-compose.yml`:

```yaml
services:
  app:
    build: .
    # Use env_file for the main service
    env_file:
      - .env

  db:
    image: postgres:16-alpine
    # Use environment for other services
    environment:
      POSTGRES_USER: ${DB_USER}
      POSTGRES_PASSWORD: ${DB_PASSWORD}
      POSTGRES_DB: ${DB_NAME}

  # ...
```

## Tip 5: Keep Container Port and Host Port Separate

In web service applications that expose a port (like a RESTful API), it's common to make that port configurable via env vars. That's a good habit, and it works just fine with Docker, as long as you understand the difference between **container port** and **host port**.

The **container port** is the port the application listens on inside the container. The **host port** is the port exposed to your local machine.

```
[ Browser / Client ]
        |
   HOST_PORT (e.g. 9090)   ← can be changed without touching the code
        |
   CONTAINER_PORT (e.g. 8080)  ← fixed, controlled by the application
        |
   [ App inside the container ]
```

Since only one application runs inside a container, port conflicts on the container side are rarely an issue. That means the container port can be hardcoded as a default in the application, while still reading from an env var if one is provided:

`main.go`:

```go
package main

import (
    "fmt"
    "net/http"
    "os"
)

func main() {
    port := os.Getenv("APP_PORT")
    if port == "" {
        port = "8080" // default
    }

    http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        fmt.Fprint(w, "OK")
    })

    fmt.Printf("Server is running on <http://localhost>:%s\\n", port)

    err := http.ListenAndServe(":"+port, nil)
    if err != nil {
        fmt.Printf("Error: %s\\n", err)
    }
}
```

`Dockerfile`:

```docker
# ...

# Documentation only -- does not automatically publish the port to the host
EXPOSE 8080

# ...
```

> ⚠️ Keep in mind: `EXPOSE` in a `Dockerfile` is **documentation only**. It signals to users of the image that the container uses that port, but it does not automatically publish it to the host. The port is only truly accessible from the host when you use the `-p` flag with `docker run` or the `ports:` attribute in docker-compose.

If there's a port conflict on your local machine, the right fix is to change the **host port**, not the container port. You can make the host port dynamic via env vars in docker-compose:

`.env`:

```bash
APP_PORT=8080  # rarely needs to change
HOST_PORT=8080 # change this if there's a conflict on your local machine
```

`docker-compose.yml`:

```yaml
services:
  app:
    build: .
    ports:
      - '${HOST_PORT:-8080}:${APP_PORT:-8080}'
    env_file:
      - .env
```

This approach gives you the best of both worlds: a stable, predictable container port and a flexible host port for local development.

## Tip 6: Use the Service Name as the Database Host

When running your app locally, you typically set `DB_HOST` to `localhost`.

`.env`:

```yaml
# ...

DB_HOST=localhost
# ...
```

However, when running the app with Docker Compose, `DB_HOST` should no longer be `localhost`. It should be the name of your database service. That's because Docker uses its internal DNS to resolve the hostname of each service.

If you leave `DB_HOST=localhost` when running Docker Compose, your app simply won't be able to connect to the database. You'll need to change it to the database service name.

There are two ways to handle this:

1. Update `DB_HOST` directly in the `.env` file.
2. Override `DB_HOST` in `docker-compose.yml` using the `environment` attribute.

I prefer option (2) because it makes the Docker Compose-specific override more explicit.

`docker-compose.yml`:

```yaml
services:
  app:
    build: .
    ports:
      - '${HOST_PORT:-8080}:${APP_PORT:-8080}'
    env_file:
      - .env
    environment:
      - DB_HOST=db # Use database service name as host
    depends_on:
      db:
        condition: service_healthy
    restart: unless-stopped

  db: # -> This is the database service name
    image: postgres:16-alpine
    environment:
      POSTGRES_USER: ${DB_USER}
      POSTGRES_PASSWORD: ${DB_PASSWORD}
      POSTGRES_DB: ${DB_NAME}
    volumes:
      - db_data:/var/lib/postgresql/data
    healthcheck:
      test: ['CMD-SHELL', 'pg_isready -U ${DB_USER} -d ${DB_NAME}']
      interval: 5s
      timeout: 5s
      retries: 10

volumes:
  db_data:
```

> The `env_file` and `environment` attributes can be used together. If the same key appears in both, the value from `environment` takes precedence.

## Tip 7: Use a Secret Manager in Production

Some env var values are particularly sensitive. For example, database passwords, encryption keys, third-party API keys, and similar credentials. Storing these as plain environment variables carries real risk. In the context of Docker, the main concern is that `docker inspect <container_name>` will expose all env vars in plaintext. Anyone with access to the Docker daemon can see them. That's a compelling reason to use a secret manager in production.

In a production environment, sensitive values should be stored in a dedicated secret management service. These services encrypt data at rest and provide audit logs. Options include Docker Secrets, HashiCorp Vault, AWS Secrets Manager, Google Cloud Secret Manager, and Azure Key Vault. Explore whichever fits your requirements best.

## Conclusion

In this post, we've covered how to handle environment variables with Docker and Docker Compose. From keeping `.env` out of your Docker image, to ensuring your app can read env vars from the system, to validating them at startup, using `env_file` for the main service and `environment` for others, separating container and host ports, setting the correct database host, and using a secret manager in production.

As a reminder, all of these tips come from my own experience and understanding of working with env vars in Docker. If you have a different approach or something to add, feel free to share it in the comments.

Thanks for reading.

## References

- https://www.freecodecamp.org/news/what-are-environment-variables-and-how-can-i-use-them-with-gatsby-and-netlify
- https://12factor.net/config
- http://github.com/spf13/viper
- https://docs.docker.com/reference/compose-file/interpolation/
- http://github.com/go-playground/validator/v10
