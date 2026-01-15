import fm from 'front-matter';

// Get all markdown files from the ../blogs directory
const modules = import.meta.glob('../blogs/*.md', { query: '?raw', import: 'default' });

export const getBlogPosts = async () => {
  const posts = [];

  for (const path in modules) {
    const rawContent = await modules[path]();
    const { attributes, body } = fm(rawContent);
    
    // Fallback: extract slug from filename if not in frontmatter
    const filenameSlug = path.split('/').pop().replace('.md', '');
    const slug = attributes.slug || filenameSlug;

    posts.push({
      ...attributes,
      slug,
      content: body,
      path
    });
  }

  // Sort by date descending
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
};

export const getBlogPost = async (slug) => {
  const posts = await getBlogPosts();
  return posts.find(post => post.slug === slug);
};
