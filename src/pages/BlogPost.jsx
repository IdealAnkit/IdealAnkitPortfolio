import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import { ArrowLeft, Calendar } from 'lucide-react';
import { getBlogPost } from '../utils/blogLoader';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBlogPost(slug).then((data) => {
      setPost(data);
      setLoading(false);
    });
  }, [slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Post not found</h1>
        <Link to="/blog" className="text-blue-600 hover:underline">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto pb-12">
      
      {/* Navigation */}
      <Link to="/blog" className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 mb-8 transition-colors">
        <ArrowLeft className="w-5 h-5" /> Back to Articles
      </Link>

      {/* Article Container */}
      <article className="glass-card p-4 md:p-12">
        
        {/* Article Header */}
        <header className="mb-12 text-center border-b border-gray-200 dark:border-gray-700 pb-12">
          <div className="flex items-center justify-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 mb-6 uppercase tracking-wider">
            <Calendar className="w-4 h-4" />
            <time>{post.date}</time>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-black dark:text-white mb-8 leading-tight tracking-tight">
            {post.title}
          </h1>
          {post.description && (
             <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light leading-relaxed max-w-3xl mx-auto mb-10">
                {post.description}
             </p>
          )}

          {post.image && (
            <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl mb-10">
              <img 
                src={post.image.startsWith('/') ? `${import.meta.env.BASE_URL}${post.image.slice(1)}` : post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </header>

        {/* Markdown Content with Custom Components */}
        <div className="max-w-none">
          <Markdown
            components={{
              // Headings
              h1: ({node, ...props}) => <h1 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-4" {...props} />,
              h2: ({node, ...props}) => <h2 className="text-2xl font-bold mt-10 mb-5 text-gray-900 dark:text-white flex items-center gap-2 before:content-[''] before:w-1.5 before:h-8 before:bg-blue-600 before:rounded-full before:mr-3" {...props} />,
              h3: ({node, ...props}) => <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white" {...props} />,
              
              // Text
              p: ({node, ...props}) => <p className="text-base md:text-xl leading-relaxed text-gray-800 dark:text-gray-300 mb-6" {...props} />,
              strong: ({node, ...props}) => <strong className="font-bold" {...props} />,
              
              // Lists
              ul: ({node, ...props}) => <ul className="list-disc list-outside ml-6 mb-6 space-y-2 text-gray-800 dark:text-gray-300 marker:text-blue-600" {...props} />,
              ol: ({node, ...props}) => <ol className="list-decimal list-outside ml-6 mb-6 space-y-2 text-gray-800 dark:text-gray-300 marker:text-blue-600" {...props} />,
              li: ({node, ...props}) => <li className="pl-2 text-gray-800 dark:text-gray-300" {...props} />,

              // Blockquotes
              blockquote: ({node, ...props}) => (
                <blockquote className="border-l-4 border-blue-600 pl-6 py-2 my-8 italic bg-blue-50/50 dark:bg-blue-900/10 rounded-r-lg text-gray-800 dark:text-gray-200" {...props} />
              ),

              // Code
              code: ({node, inline, className, children, ...props}) => {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <div className="rounded-lg overflow-hidden my-6 shadow-md border border-gray-200 dark:border-gray-700">
                    <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 text-xs font-mono text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700 flex justify-between">
                      <span>{match[1]}</span>
                    </div>
                    <div className="overflow-x-auto">
                      <pre className="bg-gray-50 dark:bg-[#0d1117] p-4 m-0 rounded-none text-sm md:text-base font-mono leading-relaxed text-gray-800 dark:text-gray-200 min-w-full w-fit">
                        <code className={className} {...props}>
                          {children}
                        </code>
                      </pre>
                    </div>
                  </div>
                ) : (
                  <code className={`${className} bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm font-mono text-pink-600 dark:text-pink-400`} {...props}>
                    {children}
                  </code>
                )
              },
              img: ({node, ...props}) => {
                const src = props.src.startsWith('/') 
                  ? `${import.meta.env.BASE_URL}${props.src.slice(1)}` 
                  : props.src;
                return (
                  <img 
                    {...props} 
                    src={src} 
                    className="rounded-lg shadow-md my-8 w-full object-cover max-h-[500px]" 
                  />
                );
              },

              // Links
              a: ({node, ...props}) => <a className="text-blue-600 dark:text-blue-400 font-semibold hover:underline decoration-2 underline-offset-2 transition-colors" target="_blank" rel="noopener noreferrer" {...props} />,
              
              // Horizontal Rule
              hr: ({node, ...props}) => <hr className="my-12 border-t border-gray-200 dark:border-gray-700" {...props} />,
              
              // Images

            }}
          >
            {post.content}
          </Markdown>
        </div>

      </article>
    </div>
  );
};

export default BlogPost;
