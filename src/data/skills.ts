export type Skill = {
  id: string;
  name: string;
  class: string;
};

export const skills: Skill[] = [
  // Languages & Frameworks
  {
    id: 'golang',
    name: 'Golang',
    class: 'devicon-go-original-wordmark',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    class: 'devicon-typescript-plain',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    class: 'devicon-javascript-plain',
  },
  {
    id: 'php',
    name: 'PHP',
    class: 'devicon-php-plain',
  },
  {
    id: 'express',
    name: 'Express.js',
    class: 'devicon-express-original',
  },
  {
    id: 'laravel',
    name: 'Laravel',
    class: 'devicon-laravel-original',
  },

  // Databases & Infrastructure
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    class: 'devicon-postgresql-plain',
  },
  {
    id: 'mysql',
    name: 'MySQL',
    class: 'devicon-mysql-original',
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    class: 'devicon-mongodb-plain',
  },
  {
    id: 'redis',
    name: 'Redis',
    class: 'devicon-redis-plain',
  },
  {
    id: 'rabbitmq',
    name: 'RabbitMQ',
    class: 'devicon-rabbitmq-original',
  },
  {
    id: 'docker',
    name: 'Docker',
    class: 'devicon-docker-plain',
  },
  {
    id: 'googlecloud',
    name: 'Google Cloud',
    class: 'devicon-googlecloud-plain',
  },

  // Development Ecosystem
  {
    id: 'openapi',
    name: 'OpenAPI',
    class: 'devicon-openapi-plain',
  },
  {
    id: 'swagger',
    name: 'Swagger',
    class: 'devicon-swagger-plain',
  },
  {
    id: 'postman',
    name: 'Postman',
    class: 'devicon-postman-plain',
  },
  {
    id: 'github',
    name: 'GitHub',
    class: 'devicon-github-original',
  },
  {
    id: 'vscode',
    name: 'VSCode',
    class: 'devicon-vscode-plain',
  },

  // Others
  {
    id: 'notion',
    name: 'Notion',
    class: 'devicon-notion-plain',
  },
  {
    id: 'jquery',
    name: 'jQuery',
    class: 'devicon-jquery-plain',
  },
  {
    id: 'react',
    name: 'React',
    class: 'devicon-react-original',
  },
  {
    id: 'tailwindcss',
    name: 'Tailwind',
    class: 'devicon-tailwindcss-original',
  },
  {
    id: 'astro',
    name: 'Astro',
    class: 'devicon-astro-plain',
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    class: 'devicon-nodejs-plain',
  },
];

export const filterSkills = (skillIds: string[]): Skill[] => {
  const skillIdSet = new Set(skillIds);
  return skills.filter((skill) => skillIdSet.has(skill.id));
};

export const languageAndFrameworkSkills = filterSkills([
  'golang',
  'typescript',
  'javascript',
  'php',
  'express',
  'laravel',
]);

export const databaseAndInfrastructureSkills = filterSkills([
  'postgresql',
  'mysql',
  'mongodb',
  'redis',
  'rabbitmq',
  'docker',
  'googlecloud',
]);

export const developmentEcosystemSkills = filterSkills([
  'openapi',
  'swagger',
  'postman',
  'github',
  'vscode',
]);
