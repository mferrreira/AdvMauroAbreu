import React from 'react';
import { Card, CardContent } from '@/components/ui/card.jsx';
import { Star } from 'lucide-react';

const TestimonialsSection = ({ testimonials, isDarkMode }) => (
  <section id="testimonials" className="py-20 md:py-32 px-6">
    <div className="container mx-auto">
      <div className="text-center mb-16 md:mb-24">
        <div className={`inline-flex items-center space-x-3 px-6 py-3 rounded-full text-sm font-medium mb-6 md:mb-8 border ${
          isDarkMode 
            ? 'bg-gray-800/50 text-gray-200 border-gray-600' 
            : 'bg-gray-100/80 text-gray-700 border-gray-300'
        }`}>
          <Star className={`h-5 w-5 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`} />
          <span>Depoimentos Reais</span>
        </div>
        <h3 className={`text-3xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-8 font-heading ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
          O que nossos <span className={`text-transparent bg-clip-text ${
            isDarkMode 
              ? 'bg-gradient-to-r from-gray-300 to-white' 
              : 'bg-gradient-to-r from-gray-600 to-gray-800'
          }`}>clientes</span> dizem
        </h3>
        <p className={`text-lg md:text-2xl font-light font-body ${
          isDarkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          A confiança dos nossos clientes é nossa maior conquista
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className={`shadow-lg rounded-3xl border ${
            isDarkMode 
              ? 'bg-gray-800/50 border-gray-700' 
              : 'bg-white/80 border-gray-200'
          }`}>
            <CardContent className="p-6 md:p-10">
              <div className="flex mb-6 md:mb-8">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-6 md:h-7 w-6 md:w-7 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className={`mb-8 md:mb-10 italic leading-relaxed text-base md:text-xl font-light font-body ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                "{testimonial.content}"
              </p>
              <div className={`border-t pt-6 md:pt-8 ${
                isDarkMode ? 'border-gray-600' : 'border-gray-200'
              }`}>
                <h4 className={`font-bold text-lg md:text-2xl font-heading ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>{testimonial.name}</h4>
                <p className={`font-semibold text-base md:text-lg font-body ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>{testimonial.role}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection; 