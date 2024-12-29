import markdownit from 'markdown-it';
const parser = new markdownit();

export const formatDate = (date: Date) => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const generateExcerpt = (content: string, length = 100) => {
  const renderedContent = parser.render(content);
  const plainText = renderedContent.replace(/(<([^>]+)>)/gi, ''); // Remove HTML tags
  return plainText.length > length
    ? plainText.slice(0, length) + '...'
    : plainText;
};
