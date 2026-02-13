import React from 'react';
import { Download, Mail } from 'lucide-react';
import Typewriter from '../Typewriter';
import ProfileImage from '../../assets/IdealAnkit.jpg';
import Resume from '../../assets/ANKIT_KUMAR_RESUME.pdf';
import ScrollReveal from '../ScrollReveal';

const HomeHero = () => {
  return (

    <div className="flex flex-col items-center justify-start w-full pt-6 pb-4 md:pt-12 md:pb-10">
      
      <ScrollReveal className="w-full">
        <div className="glass-card p-4 md:p-10 max-w-6xl w-full mx-auto flex flex-col lg:flex-row items-center gap-10 transform transition-all duration-500 hover:scale-[1.01]">
          
          {/* Left Side: Text Content */}
          <div className="flex-1 min-w-[300px] md:min-w-[480px] text-center lg:text-left order-1">
            <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Ankit Kumar
            </h1>
            
            <h2 className="text-lg md:text-2xl mb-6 text-black dark:text-gray-300 font-light tracking-wide min-h-[1.5em]">
               I'm a <Typewriter words={["Software Engineer", "AI/ML Engineer", "Full Stack Developer", "Creative Technologist"]} />
            </h2>
            
            <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto lg:mx-0 rounded-full mb-6 md:mb-8 opacity-80"></div>

            <p className="text-base md:text-xl text-black dark:text-gray-400 leading-relaxed">
              Full-stack and AI/ML engineer building scalable web applications and intelligent systems using <span className="px-1.5 py-0.5 rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium">React</span>, <span className="px-1.5 py-0.5 rounded-md bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 font-medium">JavaScript</span>, <span className="px-1.5 py-0.5 rounded-md bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 font-medium">Python</span>, <span className="px-1.5 py-0.5 rounded-md bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 font-medium">Node.js</span>, <span className="px-1.5 py-0.5 rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium">Flask</span>, <span className="px-1.5 py-0.5 rounded-md bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 font-medium">PHP</span>, <span className="px-1.5 py-0.5 rounded-md bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 font-medium">machine learning</span>, <span className="px-1.5 py-0.5 rounded-md bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 font-medium">computer vision</span>, and <span className="px-1.5 py-0.5 rounded-md bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 font-medium">modern databases</span>.
              <br /><br />
              <span className="text-sm opacity-70 italic block mt-4">
                "Crafting digital solutions with precision and liquid fluidity."
              </span>
            </p>

            {/* Call to Action Buttons */}
            <div className="mt-8 md:mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
              
              {/* Hire Me Button (Primary) */}
              <a 
                href="mailto:mrankitkumar1530@gmail.com"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all active:scale-95 group"
              >
                <Mail size={20} className="text-white" />
                <span className="text-white">Hire Me</span>
              </a>

              {/* Download CV Button (Secondary) */}
              <a 
                href={Resume} 
                download="ANKIT_KUMAR_RESUME.pdf"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 !text-white font-semibold shadow-lg shadow-blue-500/30 hover:scale-105 transition-transform active:scale-95 group"
              >
                <Download size={20} className="!text-white" />
                <span className="!text-white">Download CV</span>
              </a>

              {/* WhatsApp Button */}
              <a 
                href="https://wa.me/917903905731" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-transparent border-2 border-green-500 text-green-600 dark:text-green-400 font-semibold shadow-lg shadow-green-500/10 hover:bg-green-50 dark:hover:bg-green-900/10 hover:scale-105 transition-all active:scale-95"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>Chat on WhatsApp</span>
              </a>

            </div>
          </div>

          {/* Right Side: Animated Profile Image */}
          <div className="flex-1 min-w-[280px] flex justify-center order-2">
             <img 
               src={ProfileImage} 
               alt="Ideal Ankit" 
               className="profile-blob"
             />
          </div>

        </div>
      </ScrollReveal>
    </div>
  );
};

export default HomeHero;
