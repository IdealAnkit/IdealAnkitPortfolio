import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import { getBlogPosts } from '../../utils/blogLoader';
import MobileCarousel from '../MobileCarousel';
import ScrollReveal from '../ScrollReveal';

const HomeBlog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBlogPosts().then((data) => {
      setPosts(data.slice(0, 2)); // Get latest 2 posts
      setLoading(false);
    });
  }, []);



  return (
    <section className="w-full py-6 md:py-8">
      <ScrollReveal>
      <div className="glass-card p-6 md:p-12 max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
              <BookOpen size={30} />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Latest Articles
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Thoughts on AI, Engineering, and System Design.
            </p>
          </div>
          

        </div>

        {/* Blog Grid */}
        {/* Mobile Carousel View */}
        <div className="md:hidden">
          <MobileCarousel interval={5000}>
            {posts.map((post) => (
              <Link 
                to={`/blog/${post.slug}`} 
                key={post.slug}
                className="group relative flex flex-col glass-card overflow-hidden h-full"
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={post.image.startsWith('/') ? `${import.meta.env.BASE_URL}${post.image.slice(1)}` : post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">
                    {post.date}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <span className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 mt-auto">
                    Read Article <ArrowRight size={16} className="ml-2" />
                  </span>
                </div>
              </Link>
            ))}
          </MobileCarousel>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <Link 
              to={`/blog/${post.slug}`} 
              key={post.slug}
              className="group relative flex flex-col glass-card overflow-hidden hover:scale-[1.02] transition-all duration-300"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={post.image.startsWith('/') ? `${import.meta.env.BASE_URL}${post.image.slice(1)}` : post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-3">
                  {post.date}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 line-clamp-3 mb-6 flex-grow">
                  {post.description}
                </p>
                <span className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400">
                  Read Article <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all group"
          >
            Read All Articles <ArrowRight size={20} />
          </Link>
        </div>
      </div>
      </ScrollReveal>
    </section>
  );
};

export default HomeBlog;
