import React, { useState } from 'react';
import servicesData from '../data/servicesData';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const [currency, setCurrency] = useState('INR');

  return (
    <div className="w-full h-full pb-12">
      
      <div className="glass-card p-4 md:p-12 mb-10 min-h-[80vh]">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4">
            Professional Services
          </h1>
          <p className="text-base md:text-xl text-black dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Premium, tailored technical solutions for businesses and startups. 
            From simple websites to complex AI-powered platforms.
          </p>

          {/* Currency Toggle */}
          <div className="flex justify-center mt-8">
            <div className="flex items-center gap-2 p-1 bg-white/50 dark:bg-slate-800/50 rounded-full border border-gray-200 dark:border-gray-700 backdrop-blur-sm shadow-sm">
              <button
                onClick={() => setCurrency('INR')}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                  currency === 'INR' 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700'
                }`}
              >
                ₹ INR
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                  currency === 'USD' 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700'
                }`}
              >
                $ USD
              </button>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {servicesData.map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              currency={currency} 
            />
          ))}
        </div>

        {/* FAQ / Process Note */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            How it works?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Simply click "Let's Talk" on any service card. It will open a WhatsApp chat directly with me, pre-filled with the service details. We can discuss your specific requirements and get started immediately.
          </p>
        </div>

      </div>

    </div>
  );
};

export default Services;
