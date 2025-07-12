import React from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Scale, Phone, Sun, Moon } from 'lucide-react';

const Header = ({ isDarkMode, isHeaderVisible, toggleTheme, scrollToSection }) => (
  <header className={`backdrop-blur-sm border-b sticky top-0 z-50 transition-all duration-300 w-full overflow-hidden ${
    isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
  } ${
    isDarkMode 
      ? 'bg-black/80 border-gray-700' 
      : 'bg-white/90 border-gray-200'
  }`}>
    <div className="w-full px-3 md:px-6 py-2 md:py-4">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center space-x-2 md:space-x-4 min-w-0 flex-1 max-w-0">
          <div className={`p-1.5 md:p-4 rounded-lg md:rounded-2xl shadow-lg flex-shrink-0 ${
            isDarkMode 
              ? 'bg-gradient-to-br from-gray-700 to-gray-800' 
              : 'bg-gradient-to-br from-gray-600 to-gray-700'
          }`}>
            <Scale className="h-5 md:h-8 w-5 md:w-8 text-white" />
          </div>
          <div className="min-w-0 flex-1 max-w-0">
            <h1 className={`text-base md:text-2xl font-bold tracking-tight truncate font-heading ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Dr. Mauro Abreu</h1>
            <p className={`text-xs md:text-sm font-medium truncate font-body ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>Advogado Criminal</p>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('about')}
            className={`transition-colors duration-300 font-medium ${
              isDarkMode 
                ? 'text-gray-300 hover:text-white' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Sobre
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className={`transition-colors duration-300 font-medium ${
              isDarkMode 
                ? 'text-gray-300 hover:text-white' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Áreas de Atuação
          </button>
          <button 
            onClick={() => scrollToSection('testimonials')}
            className={`transition-colors duration-300 font-medium ${
              isDarkMode 
                ? 'text-gray-300 hover:text-white' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Depoimentos
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className={`transition-colors duration-300 font-medium ${
              isDarkMode 
                ? 'text-gray-300 hover:text-white' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Contato
          </button>
        </nav>

        <div className="hidden lg:flex items-center space-x-6">
          <div className={`flex items-center space-x-2 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            <Phone className={`h-4 w-4 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`} />
            <span className="font-medium">(31) 9 9902-1212</span>
          </div>
          <Button 
            onClick={() => scrollToSection('contact')}
            className={`text-sm px-4 py-2 rounded-xl transition-all duration-300 ${
              isDarkMode 
                ? 'bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700' 
                : 'bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600'
            }`}
          >
            <Phone className="mr-2 h-4 w-4" />
            Contato
          </Button>
        </div>

        {/* Theme Toggle and Mobile Contact Button */}
        <div className="flex items-center space-x-1 md:space-x-4 flex-shrink-0 ml-2">
          {/* Theme Toggle */}
          <Button 
            onClick={toggleTheme}
            variant="outline"
            size="sm"
            className={`p-1.5 md:p-2 rounded-lg md:rounded-xl transition-all duration-300 ${
              isDarkMode 
                ? 'border-gray-600 hover:border-gray-500 bg-gray-800/50' 
                : 'border-gray-300 hover:border-gray-400 bg-white/50'
            }`}
          >
            {isDarkMode ? (
              <Sun className="h-3.5 md:h-4 w-3.5 md:w-4 text-yellow-400" />
            ) : (
              <Moon className="h-3.5 md:h-4 w-3.5 md:w-4 text-gray-600" />
            )}
          </Button>

          {/* Mobile Contact Button */}
          <div className="md:hidden flex-shrink-0">
            <Button 
              onClick={() => scrollToSection('contact')}
              className={`text-xs md:text-sm px-1.5 md:px-3 py-1.5 md:py-2 rounded-lg md:rounded-xl transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700' 
                  : 'bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600'
              }`}
            >
              <Phone className="h-3.5 md:h-4 w-3.5 md:w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header; 