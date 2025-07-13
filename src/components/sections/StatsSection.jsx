import React from 'react';

const StatsSection = ({ stats, isDarkMode }) => (
  <section className="py-16 md:py-24">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index} className={`rounded-3xl p-4 md:p-6 lg:p-8 border min-h-[120px] md:min-h-[140px] lg:min-h-[160px] flex flex-col justify-center ${
            isDarkMode 
              ? 'bg-gray-800/50 border-gray-700' 
              : 'bg-white/80 border-gray-200 shadow-lg'
          }`}>
            <div className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-2 md:mb-3 lg:mb-4 leading-tight ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>{stat.number}</div>
            <div className={`font-semibold text-sm sm:text-base md:text-lg lg:text-xl leading-tight px-2 ${
              isDarkMode ? 'text-gray-200' : 'text-gray-600'
            }`}>{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection; 