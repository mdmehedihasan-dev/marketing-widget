import React from 'react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$499",
      features: [
        "Basic AI Marketing Tools",
        "Standard Web Development",
        "Essential Analytics",
        "Email Support",
        "1 Project Included"
      ]
    },
    {
      name: "Professional",
      price: "$999",
      popular: true,
      features: [
        "All Starter Features",
        "Advanced AI Tools",
        "A/B Testing",
        "Comprehensive Reporting",
        "Priority Support",
        "Up to 3 Projects"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "All Professional Features",
        "Dedicated Account Manager",
        "Bespoke Development",
        "API Access",
        "Advanced Security"
      ]
    }
  ];

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-4">Pricing & Packages</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-16">
          Choose the perfect plan to accelerate your growth with our AI-driven marketing solutions.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className={`relative bg-white dark:bg-surface-dark p-8 rounded-2xl border ${plan.popular ? 'border-primary shadow-xl scale-105' : 'border-gray-200 dark:border-gray-800'} flex flex-col`}>
              {plan.popular && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
              <div className="text-4xl font-black text-gray-900 dark:text-white mb-6">
                {plan.price}<span className="text-base font-normal text-gray-500">{plan.price !== 'Custom' && '/mo'}</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1 text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link 
                to="/contact" 
                className={`w-full py-3 rounded-lg font-bold transition-colors ${
                  plan.popular 
                    ? 'bg-primary text-white hover:bg-primary-dark' 
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                Choose Plan
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}