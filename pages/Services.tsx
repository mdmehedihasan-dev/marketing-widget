import React from 'react';
import { SERVICES } from '../data';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-4">Our Services</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            AI-based, data-driven solutions to elevate your brand's digital presence. We specialize in turning complexity into clarity.
          </p>
        </div>

        <div className="grid gap-12">
          {SERVICES.map((service, index) => (
            <div key={service.id} className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="group flex-1 bg-white dark:bg-surface-dark p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-lg">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:animate-bounce">
                  <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {service.details}
                </p>
                <Link to="/contact" className="inline-flex items-center justify-center px-6 py-2 border border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors">
                  Get Started
                </Link>
              </div>
              <div className="flex-1 w-full">
                {/* Visual representation placeholder - would be specific images in prod */}
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-surface-dark dark:to-background-dark rounded-2xl flex items-center justify-center border border-gray-200 dark:border-gray-800">
                   <span className="material-symbols-outlined text-6xl text-gray-300 dark:text-gray-700">{service.icon}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <div className="bg-surface-dark text-white rounded-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">Every business is unique. We can tailor a package specifically for your goals and budget.</p>
            <Link to="/contact" className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-colors">
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}