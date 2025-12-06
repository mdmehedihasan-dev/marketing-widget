import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../data';

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 md:pt-32 md:pb-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background-light to-white dark:from-background-dark dark:to-surface-dark opacity-90"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-10"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-gray-900 dark:text-white mb-6">
                Websites That Convert, <span className="text-primary">Built With Precision</span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto md:mx-0">
                We craft data-driven, user-centric web experiences that drive growth and deliver tangible results for your business.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                <Link to="/contact" className="w-full sm:w-auto px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-colors">
                  Schedule Consultation
                </Link>
                <Link to="/services" className="w-full sm:w-auto px-8 py-3 bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white font-bold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  Explore Services
                </Link>
              </div>
            </div>
            <div className="flex-1 w-full max-w-lg">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" alt="Analytics Dashboard" className="w-full h-auto" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="font-bold text-lg">Data-Driven Growth</p>
                    <p className="text-sm opacity-90">Real-time analytics & reporting</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            From custom builds to seamless e-commerce solutions, we provide a full spectrum of services to create your perfect digital storefront.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="group bg-white dark:bg-surface-dark p-6 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:animate-bounce">
                <span className="material-symbols-outlined">{service.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{service.desc}</p>
              <Link to="/services" className="text-primary font-semibold hover:underline inline-flex items-center">
                Learn more <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Ready to Revolutionize Your Marketing?</h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-8">
              Connect with our strategists for a personalized, data-backed assessment of your marketing potential.
            </p>
            <Link to="/roi-calculator" className="inline-block px-8 py-3 bg-white text-primary font-bold rounded-lg hover:bg-blue-50 transition-colors">
              Calculate Your ROI
            </Link>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full translate-y-1/3 -translate-x-1/3"></div>
        </div>
      </section>
    </div>
  );
}