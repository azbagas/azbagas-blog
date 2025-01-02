export type Skill = {
  id: string;
  name: string;
  class: string;
};

export type AllSkills = Record<string, Skill[]>;

export const allSkills: AllSkills = {
  backend: [
    {
      id: 'typescript',
      name: 'TypeScript',
      class: 'devicon-typescript-plain',
    },
    {
      id: 'express',
      name: 'Express.js',
      class: 'devicon-express-original',
    },
    {
      id: 'php',
      name: 'PHP',
      class: 'devicon-php-plain',
    },
    {
      id: 'laravel',
      name: 'Laravel',
      class: 'devicon-laravel-original',
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
  ],
  tools: [
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
    {
      id: 'postman',
      name: 'Postman',
      class: 'devicon-postman-plain',
    },
    {
      id: 'notion',
      name: 'Notion',
      class: 'devicon-notion-plain',
    },
  ],
  others: [
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
  ],
};
