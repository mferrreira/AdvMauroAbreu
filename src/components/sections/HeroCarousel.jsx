import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Phone, ArrowRight } from 'lucide-react';

const HeroCarousel = ({ slides, isDarkMode, scrollToSection }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const containerRef = useRef(null);
  const timerRef = useRef(null);

  // Auto-slide functionality
  useEffect(() => {
    // Clear existing timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    // Only start timer if not dragging
    if (!isDragging) {
      timerRef.current = setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 10000); // Change slide every 10 seconds
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [slides.length, isDragging, currentSlide]);

  // Touch/Mouse event handlers
  const handleStart = (clientX) => {
    setIsDragging(true);
    setStartX(clientX);
    setCurrentX(clientX);
    // Clear the timer when user starts interacting
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const handleMove = (clientX) => {
    if (isDragging) {
      setCurrentX(clientX);
    }
  };

  const handleEnd = () => {
    if (isDragging) {
      const diff = startX - currentX;
      const threshold = 50; // Minimum swipe distance

      if (Math.abs(diff) > threshold) {
        if (diff > 0) {
          // Swipe left - next slide
          setCurrentSlide((prev) => (prev + 1) % slides.length);
        } else {
          // Swipe right - previous slide
          setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        }
      }
      
      setIsDragging(false);
    }
  };

  // Mouse events
  const handleMouseDown = (e) => {
    e.preventDefault();
    handleStart(e.clientX);
  };

  const handleMouseMove = (e) => {
    e.preventDefault();
    handleMove(e.clientX);
  };

  const handleMouseUp = (e) => {
    e.preventDefault();
    handleEnd();
  };

  // Touch events
  const handleTouchStart = (e) => {
    handleStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  return (
    <section 
      ref={containerRef}
      className="relative h-screen min-h-[600px] md:min-h-[700px] overflow-hidden cursor-grab active:cursor-grabbing"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div 
            className={`absolute inset-0 bg-cover bg-no-repeat ${index === 0 ? 'md:bg-[left_center]' : ''}`}
            style={{ 
              backgroundImage: `url(${slide.image})`,
              backgroundPosition: index === 0 ? (window.innerWidth >= 768 ? 'left center' : 'left 25%') : 'left center'
            }}
          />
          
          {/* Overlay Filter */}
          <div className={`absolute inset-0 ${
            isDarkMode 
              ? 'bg-black/60' 
              : 'bg-black/40'
          }`} />
          
          {/* Gradient Overlay for Text Readability */}
          <div className={`absolute inset-0 bg-gradient-to-r ${
            isDarkMode 
              ? 'from-black/80 via-black/50 to-transparent' 
              : 'from-black/70 via-black/40 to-transparent'
          }`} />
          
          {/* Slide Text Block */}
          {index === 0 ? (
            // Right-aligned for first slide
            <div className="absolute inset-0 flex items-center justify-end">
              <div className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl ml-auto px-6 md:px-8 lg:px-12 py-12 md:py-0" style={{marginLeft: 'min(30vw, 2rem)'}}>
                {/* Badge */}
                <div className={`inline-flex items-center space-x-3 px-6 py-3 rounded-full text-sm font-medium mb-8 mt-8 border backdrop-blur-sm ${
                  isDarkMode 
                    ? 'bg-white/10 text-white border-white/20' 
                    : 'bg-white/20 text-gray-100 border-white/30'
                }`}>
                  <Phone className={`h-5 w-5 ${
                    isDarkMode ? 'text-white' : 'text-gray-100'
                  }`} />
                  <span>Defesa Criminal Especializada</span>
                </div>
                {/* Main Title */}
                <h1 className={`text-4xl md:text-6xl lg:text-7xl font-black mb-6 md:mb-8 leading-tight font-heading ${
                  isDarkMode ? 'text-white' : 'text-white'
                }`}>
                  {slide.title}
                </h1>
                {/* Subtitle */}
                <p className={`text-xl md:text-2xl lg:text-3xl mb-8 md:mb-12 leading-relaxed font-light font-body ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-100'
                }`}>
                  {slide.subtitle}
                </p>
                {/* CTA Button */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                  <Button
                    size="lg"
                    className={`text-lg md:text-xl px-8 md:px-12 py-6 md:py-8 rounded-2xl shadow-lg transition-all duration-300 font-bold transform hover:scale-105 ${
                      isDarkMode 
                        ? 'bg-white text-gray-900 hover:bg-gray-100' 
                        : 'bg-white text-gray-900 hover:bg-gray-50'
                    }`}
                    onClick={() => scrollToSection('contact')}
                  >
                    <Phone className="mr-3 md:mr-4 h-6 md:h-7 w-6 md:w-7" />
                    Consulta Gratuita
                    <ArrowRight className="ml-2 md:ml-3 h-5 md:h-6 w-5 md:w-6" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className={`text-lg md:text-xl px-8 md:px-12 py-6 md:py-8 rounded-2xl backdrop-blur-sm transition-all duration-300 font-bold ${
                      isDarkMode 
                        ? 'border-white/30 bg-gray-600/40 text-white/90 hover:bg-gray-100/10' 
                        : 'border-white/50 bg-gray-600/40 text-white/90 hover:bg-gray-100/20'
                    }`}
                    onClick={() => scrollToSection('about')}
                  >
                    Saiba Mais
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            // Centered for other slides
            <div className="absolute inset-0 flex items-center justify-center text-center">
              <div className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl px-6 md:px-8 lg:px-12 py-12 md:py-0 mx-auto">
                {/* Badge */}
                <div className={`inline-flex items-center space-x-3 px-6 py-3 rounded-full text-sm font-medium mb-8 mt-8 border backdrop-blur-sm ${
                  isDarkMode 
                    ? 'bg-white/10 text-white border-white/20' 
                    : 'bg-white/20 text-gray-100 border-white/30'
                }`}>
                  <Phone className={`h-5 w-5 ${
                    isDarkMode ? 'text-white' : 'text-gray-100'
                  }`} />
                  <span>Defesa Criminal Especializada</span>
                </div>
                {/* Main Title */}
                <h1 className={`text-4xl md:text-6xl lg:text-7xl font-black mb-6 md:mb-8 leading-tight font-heading ${
                  isDarkMode ? 'text-white' : 'text-white'
                }`}>
                  {slide.title}
                </h1>
                {/* Subtitle */}
                <p className={`text-xl md:text-2xl lg:text-3xl mb-8 md:mb-12 leading-relaxed font-light font-body ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-100'
                }`}>
                  {slide.subtitle}
                </p>
                {/* CTA Button */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center">
                  <Button
                    size="lg"
                    className={`text-lg md:text-xl px-8 md:px-12 py-6 md:py-8 rounded-2xl shadow-lg transition-all duration-300 font-bold transform hover:scale-105 ${
                      isDarkMode 
                        ? 'bg-white text-gray-900 hover:bg-gray-100' 
                        : 'bg-white text-gray-900 hover:bg-gray-50'
                    }`}
                    onClick={() => scrollToSection('contact')}
                  >
                    <Phone className="mr-3 md:mr-4 h-6 md:h-7 w-6 md:w-7" />
                    Consulta Gratuita
                    <ArrowRight className="ml-2 md:ml-3 h-5 md:h-6 w-5 md:w-6" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className={`text-lg md:text-xl px-8 md:px-12 py-6 md:py-8 rounded-2xl backdrop-blur-sm transition-all duration-300 font-bold ${
                      isDarkMode 
                        ? 'border-white/30 bg-gray-600/40 text-white/90 hover:bg-gray-100/10' 
                        : 'border-white/50 bg-gray-600/40 text-white/90 hover:bg-gray-100/20'
                    }`}
                    onClick={() => scrollToSection('about')}
                  >
                    Saiba Mais
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel; 