import React from 'react';
import { CASE_STUDIES } from '../data';

export default function CaseStudies() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-4">Proven Results</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            See how we help businesses achieve measurable growth.
          </p>
        </div>

        <div className="space-y-16">
          {CASE_STUDIES.map((study, index) => (
            <div key={study.id} className={`flex flex-col lg:flex-row gap-8 lg:items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img src={study.image} alt={study.title} className="w-full h-auto" />
                </div>
              </div>
              <div className="flex-1 lg:p-8">
                <div className="flex gap-2 mb-4">
                  {study.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{study.client}</h3>
                <h2 className="text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-6 leading-tight">{study.title}</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">{study.desc}</p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-4 bg-gray-50 dark:bg-surface-dark border border-gray-100 dark:border-gray-800 rounded-lg">
                    <p className="text-sm text-gray-500">ROI</p>
                    <p className="text-2xl font-bold text-primary">150%</p>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-surface-dark border border-gray-100 dark:border-gray-800 rounded-lg">
                    <p className="text-sm text-gray-500">Growth</p>
                    <p className="text-2xl font-bold text-primary">2.5x</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}