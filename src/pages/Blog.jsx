import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { getBlogPosts } from '../utils/blogLoader';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getBlogPosts().then(setPosts);
  }, []);

  return (
    <div className="w-full h-full pb-12">
      
      {/* Header */}
      <div className="glass-card p-8 md:p-12 text-center mb-10">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4">
          Latest Articles
        </h1>
        <p className="text-base md:text-xl text-black dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          This section shares my thoughts, tutorials, and hands-on experiences in full-stack development and AI/ML, along with project breakdowns, useful tools, and important technology updates from the software engineering ecosystem.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <article 
            key={post.slug} 
            className="glass-card p-6 md:p-8 flex flex-col h-full transition-all duration-300 hover:scale-[1.01] hover:shadow-lg group"
          >
            {post.image && (
              <div className="w-full h-48 mb-6 overflow-hidden rounded-lg">
                 <img 
                   src={post.image} 
                   alt={post.title} 
                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                 />
              </div>
            )}

            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
              <Calendar className="w-4 h-4" />
              <time>{post.date}</time>
            </div>

            <h2 className="text-2xl font-bold mb-3 text-black dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              <Link to={`/blog/${post.slug}`}>
                {post.title}
              </Link>
            </h2>

            <p className="text-black dark:text-gray-300 mb-6 flex-grow leading-relaxed">
              {post.description}
            </p>

            <div className="mt-auto">
              <Link 
                to={`/blog/${post.slug}`} 
                className="inline-flex items-center gap-2 font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                Read Article <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>

    </div>
  );
};

export default Blog;
