import React from 'react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <div className="bg-primary text-white pb-24 pt-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Client Dashboard: Global Tech Solutions</h1>
          <p className="text-blue-100">Welcome back! Here's your marketing performance overview.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-12 pb-12">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-surface-dark p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Total Spend</p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">$45,000</p>
            <div className="mt-2 text-sm text-green-500 flex items-center">
              <span className="material-symbols-outlined text-sm mr-1">trending_up</span> +12%
            </div>
          </div>
          <div className="bg-white dark:bg-surface-dark p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Overall ROI</p>
            <p className="text-3xl font-bold text-green-500">+125%</p>
            <div className="mt-2 text-sm text-green-500 flex items-center">
              <span className="material-symbols-outlined text-sm mr-1">trending_up</span> +5%
            </div>
          </div>
          <div className="bg-white dark:bg-surface-dark p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Total Traffic</p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">250k</p>
            <div className="mt-2 text-sm text-green-500 flex items-center">
              <span className="material-symbols-outlined text-sm mr-1">trending_up</span> +8.5%
            </div>
          </div>
          <div className="bg-white dark:bg-surface-dark p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Conversions</p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">8,500</p>
            <div className="mt-2 text-sm text-green-500 flex items-center">
              <span className="material-symbols-outlined text-sm mr-1">trending_up</span> +15%
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Chart Section (Mock) */}
          <div className="lg:col-span-2 bg-white dark:bg-surface-dark p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">Campaign Performance</h2>
              <select className="bg-gray-100 dark:bg-gray-800 border-none rounded-lg text-sm px-3 py-1">
                <option>Last 30 Days</option>
                <option>Last Quarter</option>
              </select>
            </div>
            <div className="h-64 flex items-end justify-between gap-2 px-2">
              {[40, 65, 45, 80, 55, 70, 90, 60, 75, 50, 85, 95].map((h, i) => (
                <div key={i} className="w-full bg-primary/20 hover:bg-primary/40 rounded-t-sm relative group transition-all" style={{ height: `${h}%` }}>
                  <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded pointer-events-none">
                    {h * 100}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4 text-xs text-gray-500 dark:text-gray-400">
              <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
              <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
            </div>
          </div>

          {/* Active Campaigns List */}
          <div className="bg-white dark:bg-surface-dark p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Active Campaigns</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors cursor-pointer border border-gray-100 dark:border-gray-700">
                <div>
                  <p className="font-bold text-sm text-gray-900 dark:text-white">Q3 AI Ads</p>
                  <p className="text-xs text-green-500">Active</p>
                </div>
                <span className="font-mono text-sm text-gray-600 dark:text-gray-300">$45k</span>
              </div>
              <div className="flex justify-between items-center p-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors cursor-pointer border border-gray-100 dark:border-gray-700">
                <div>
                  <p className="font-bold text-sm text-gray-900 dark:text-white">Q2 Retargeting</p>
                  <p className="text-xs text-orange-500">Paused</p>
                </div>
                <span className="font-mono text-sm text-gray-600 dark:text-gray-300">$25k</span>
              </div>
              <div className="flex justify-between items-center p-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors cursor-pointer border border-gray-100 dark:border-gray-700">
                <div>
                  <p className="font-bold text-sm text-gray-900 dark:text-white">Brand Awareness</p>
                  <p className="text-xs text-green-500">Active</p>
                </div>
                <span className="font-mono text-sm text-gray-600 dark:text-gray-300">$12k</span>
              </div>
            </div>
            <button className="w-full mt-6 py-2 border border-primary text-primary rounded-lg text-sm font-bold hover:bg-primary hover:text-white transition-colors">
              View All Campaigns
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}