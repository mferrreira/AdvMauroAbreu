import React, { useState, useEffect } from 'react';
import './App.css';
import { Button } from '@/components/ui/button.jsx';
import { Phone, ArrowRight } from 'lucide-react';
import { 
  carouselSlides as heroSlides,
  stats,
  services,
  testimonials,
  contactInfo,
  practiceAreas,
  footerContacts
} from './data/websiteData.js';

// Import all section components
import Header from './components/sections/Header.jsx';
import HeroCarousel from './components/sections/HeroCarousel.jsx';
import StatsSection from './components/sections/StatsSection.jsx';
import AboutSection from './components/sections/AboutSection.jsx';
import ServicesSection from './components/sections/ServicesSection.jsx';
import TestimonialsSection from './components/sections/TestimonialsSection.jsx';
import ContactSection from './components/sections/ContactSection.jsx';
import Footer from './components/sections/Footer.jsx';

function App() {
  // Initialize theme from localStorage or default to light mode
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme !== null) {
      return savedTheme === 'dark';
    }
    return false; // Default to light mode
  });
  
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsHeaderVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    // Save theme preference to localStorage
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    let message = document.getElementById("message").value.trim();
  
    // Garante que termina com ponto final
    if (!message.endsWith('.')) {
      message += '.';
    }
  
    const rawMessage = `Prezado Dr. Mauro, gostaria de entrar em contato para tratar do seguinte: ${message} Atensiosamente, ${name}.`;
    const url = `https://api.whatsapp.com/send?phone=5531999021212&text=${encodeURIComponent(rawMessage)}`;
  
    window.open(url, "_blank");
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 overflow-x-hidden ${
      isDarkMode ? 'bg-black text-white' : 'bg-white text-gray-900'
    }`}>
      <Header 
        isDarkMode={isDarkMode}
        isHeaderVisible={isHeaderVisible}
        toggleTheme={toggleTheme}
        scrollToSection={scrollToSection}
      />

      <main>
        <HeroCarousel 
          slides={heroSlides}
          isDarkMode={isDarkMode}
          scrollToSection={scrollToSection}
        />

        <StatsSection 
          stats={stats}
          isDarkMode={isDarkMode}
        />

        <AboutSection isDarkMode={isDarkMode} />

        <ServicesSection 
          services={services}
          isDarkMode={isDarkMode}
        />

        <TestimonialsSection 
          testimonials={testimonials}
          isDarkMode={isDarkMode}
        />

        <ContactSection 
          contactInfo={contactInfo}
          isDarkMode={isDarkMode}
          handleSubmit={handleSubmit}
        />
      </main>

      <Footer 
        practiceAreas={practiceAreas}
        footerContacts={footerContacts}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}

export default App;

