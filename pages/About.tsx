import React from 'react';
import { COMPANY_INFO } from '../data';

export default function About() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-6">About Us</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {COMPANY_INFO.name} is a results-driven digital marketing and web development agency. 
            We help businesses grow by providing innovative solutions, powerful online strategies, and high-quality digital services.
          </p>
        </div>

        <div className="space-y-16">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Who We Are</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Our goal is simple: turn brands into digital success stories. With a skilled team of digital experts 
              and a deep understanding of modern business needs, we deliver real, measurable results. We focus on 
              transparency, creativity, and long-term partnerships to help our clients succeed in today's competitive digital world.
            </p>
          </section>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-surface-dark p-8 rounded-xl border border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary text-3xl">visibility</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Our Vision</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                To become a globally recognized digital marketing and technology agency that empowers businesses through innovative solutions, results-driven strategies, and world-class digital experiences. We aim to create meaningful growth for every client we work with.
              </p>
            </div>

            <div className="bg-white dark:bg-surface-dark p-8 rounded-xl border border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary text-3xl">flag</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
              </div>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                  Provide high-quality digital marketing and web development services.
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                  Help businesses build strong online visibility and brand reputation.
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                  Use data-driven strategies for measurable results.
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                  Deliver creative, modern, and user-friendly web solutions.
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                  Maintain trust, transparency, and long-term partnerships with clients.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}