import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import servicesData from '../../data/servicesData';
import ServiceCard from '../ServiceCard';
import MobileCarousel from '../MobileCarousel';
import ScrollReveal from '../ScrollReveal';

const HomeServices = () => {
  const [currency, setCurrency] = useState('INR');
  // Take only top 3 services for preview
  const featuredServices = servicesData.slice(0, 3);

  return (
    <section className="w-full py-6 md:py-8">
      <ScrollReveal>
      <div className="glass-card p-6 md:p-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
              Professional Services
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Premium tailored solutions for your digital needs
            </p>
          </div>

          {/* Currency Toggle */}
          <div className="flex items-center gap-2 p-1 bg-white/50 dark:bg-slate-800/50 rounded-full border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
            <button
              onClick={() => setCurrency('INR')}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                currency === 'INR' 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700'
              }`}
            >
              ₹ INR
            </button>
            <button
              onClick={() => setCurrency('USD')}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                currency === 'USD' 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700'
              }`}
            >
              $ USD
            </button>
          </div>
        </div>


        {/* Mobile Carousel View */}
        <div className="md:hidden">
            <MobileCarousel>
              {featuredServices.map((service) => (
                <ServiceCard 
                  key={service.id} 
                  service={service} 
                  currency={currency} 
                />
              ))}
            </MobileCarousel>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {featuredServices.map((service) => (
             <ServiceCard 
              key={service.id} 
              service={service} 
              currency={currency} 
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all group"
            >
              View Full Services Menu
            </Link>
        </div>
      </div>
      </ScrollReveal>
    </section>
  );
};

export default HomeServices;
