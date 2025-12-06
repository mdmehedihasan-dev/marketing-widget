import React, { useState } from 'react';

export default function ROICalculator() {
  const [adSpend, setAdSpend] = useState<number>(5000);
  const [visitors, setVisitors] = useState<number>(10000);
  const [conversionRate, setConversionRate] = useState<number>(2.5);
  const [ltv, setLtv] = useState<number>(1200);

  // Calculations
  const leads = Math.floor(visitors * (conversionRate / 100));
  const revenue = leads * ltv;
  const roi = adSpend > 0 ? ((revenue - adSpend) / adSpend) * 100 : 0;
  
  // Projection with Marketing Widget (Assuming 20% improvement)
  const projectedLeads = Math.floor(leads * 1.2);
  const projectedRevenue = projectedLeads * ltv;
  const projectedRoi = adSpend > 0 ? ((projectedRevenue - adSpend) / adSpend) * 100 : 0;

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-4">Calculate Your ROI</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            See the potential return on investment you could achieve by partnering with Marketing Widget.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Inputs */}
          <div className="lg:col-span-2 bg-white dark:bg-surface-dark p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-100 dark:border-gray-700">Your Metrics</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Monthly Ad Spend ($)
                </label>
                <input 
                  type="number" 
                  value={adSpend}
                  onChange={(e) => setAdSpend(Number(e.target.value))}
                  className="w-full px-4 py-3 rounded-lg bg-background-light dark:bg-background-dark border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Monthly Website Visitors
                </label>
                <input 
                  type="number" 
                  value={visitors}
                  onChange={(e) => setVisitors(Number(e.target.value))}
                  className="w-full px-4 py-3 rounded-lg bg-background-light dark:bg-background-dark border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary outline-none transition-all"
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Conversion Rate (%)</label>
                  <span className="text-sm font-bold text-primary">{conversionRate}%</span>
                </div>
                <input 
                  type="range" 
                  min="0.1" 
                  max="10" 
                  step="0.1" 
                  value={conversionRate}
                  onChange={(e) => setConversionRate(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Customer Lifetime Value ($)
                </label>
                <input 
                  type="number" 
                  value={ltv}
                  onChange={(e) => setLtv(Number(e.target.value))}
                  className="w-full px-4 py-3 rounded-lg bg-background-light dark:bg-background-dark border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary outline-none transition-all"
                />
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-background-dark text-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-2">Projected Growth</h3>
              <p className="text-gray-400 mb-8">Estimated results based on your inputs and our optimization strategies.</p>
              
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-gray-400 text-sm mb-1">Current Revenue</p>
                  <p className="text-2xl font-bold">${revenue.toLocaleString()}</p>
                </div>
                <div className="p-4 bg-primary/20 rounded-xl border border-primary/30">
                  <p className="text-blue-200 text-sm mb-1">Projected Revenue</p>
                  <p className="text-3xl font-bold text-white">${projectedRevenue.toLocaleString()}</p>
                </div>
                <div className="p-4 bg-green-500/10 rounded-xl border border-green-500/30">
                  <p className="text-green-200 text-sm mb-1">Potential ROI</p>
                  <p className="text-3xl font-bold text-green-400">{projectedRoi.toFixed(0)}%</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Revenue Uplift</span>
                  <span className="text-green-400 font-bold">+${(projectedRevenue - revenue).toLocaleString()}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5 mb-6">
                  <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '100%' }}></div>
                </div>
                <button className="w-full py-3 bg-white text-background-dark font-bold rounded-lg hover:bg-gray-100 transition-colors">
                  Get a Detailed Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}