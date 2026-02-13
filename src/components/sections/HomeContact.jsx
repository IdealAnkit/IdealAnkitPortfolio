import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';
import ContactForm from '../ContactForm';

const HomeContact = () => {
  return (
    <section className="w-full py-6 md:py-8">
      <div className="max-w-6xl mx-auto text-center">
        
        <ScrollReveal>
        <div className="glass-card p-2 md:p-16 relative overflow-hidden group">
          {/* Background Gradient Blob */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl group-hover:bg-blue-500/30 transition-all duration-700"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl group-hover:bg-purple-500/30 transition-all duration-700"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: CTA Text */}
            <div className="text-center lg:text-left space-y-8">
              <div className="inline-flex items-center justify-center p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-2">
                <Mail size={32} />
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
                Ready to work together?
              </h2>
              
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm available for freelance projects and full-time opportunities. 
                Let's build something amazing.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-4">
                <Link 
                  to="/contact"
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all group text-lg"
                >
                  Contact Me <ArrowRight size={22} />
                </Link>
                
                <a 
                  href="mailto:mrankitkumar1530@gmail.com"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-black dark:hover:text-white transition-all"
                >
                  <Mail size={18} />
                  mrankitkumar1530@gmail.com
                </a>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="w-full bg-white/50 dark:bg-black/20 rounded-2xl p-6 backdrop-blur-sm border border-white/20 dark:border-white/10">
               <ContactForm />
            </div>

          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HomeContact;
