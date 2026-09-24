import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('posts');
  posts.sort((a, b) => b.data.publishedDate.getTime() - a.data.publishedDate.getTime());

  return rss({
    title: 'AzBagas - Personal Blog',
    description: 'Personal blog and technical articles by Azhar Bagaskara on backend engineering, system architecture, and software development.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishedDate,
      description: post.data.description || post.data.title,
      link: `/blog/${post.id}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
