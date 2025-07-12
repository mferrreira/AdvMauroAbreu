import React from 'react';

const StatsSection = ({ stats, isDarkMode }) => (
  <section className="py-16 md:py-24">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-12 text-center">
        {stats.map((stat, index) => (
          <div key={index} className={`rounded-3xl p-6 md:p-8 border ${
            isDarkMode 
              ? 'bg-gray-800/50 border-gray-700' 
              : 'bg-white/80 border-gray-200 shadow-lg'
          }`}>
            <div className={`text-4xl md:text-6xl font-black mb-3 md:mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>{stat.number}</div>
            <div className={`font-semibold text-lg md:text-xl ${
              isDarkMode ? 'text-gray-200' : 'text-gray-600'
            }`}>{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection; 