import React from 'react';
import { Scale } from 'lucide-react';

const Footer = ({ practiceAreas, footerContacts, isDarkMode }) => (
  <footer className={`text-white py-16 md:py-20 px-6 border-t ${
    isDarkMode 
      ? 'bg-gradient-to-r from-black via-gray-900 to-black border-gray-700' 
      : 'bg-gradient-to-r from-gray-100 via-white to-gray-100 border-gray-200'
  }`}>
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
        <div>
          <div className="flex items-center space-x-4 md:space-x-6 mb-8 md:mb-12">
            <div className={`p-3 md:p-4 rounded-2xl shadow-lg ${
              isDarkMode 
                ? 'bg-gradient-to-br from-gray-700 to-gray-800' 
                : 'bg-gradient-to-br from-gray-600 to-gray-700'
            }`}>
              <Scale className="h-8 md:h-10 w-8 md:w-10 text-white" />
            </div>
            <div>
              <h4 className={`text-2xl md:text-3xl font-black font-heading ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Dr. Mauro Abreu</h4>
              <p className={`font-semibold text-base md:text-lg font-body ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>Advogado Criminal</p>
            </div>
          </div>
          <p className={`leading-relaxed text-base md:text-xl font-light font-body ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Defendendo seus direitos com dedicação, estratégia e resultados comprovados há mais de 15 anos.
          </p>
        </div>
        <div>
          <h4 className={`text-xl md:text-2xl font-bold mb-6 md:mb-8 font-heading ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>Áreas de Atuação</h4>
          <ul className={`space-y-3 md:space-y-4 text-base md:text-xl font-body ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            {practiceAreas.map((area, index) => (
              <li key={index} className={`transition-colors duration-300 cursor-pointer ${
                isDarkMode ? 'hover:text-white' : 'hover:text-gray-900'
              }`}>{area}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className={`text-xl md:text-2xl font-bold mb-6 md:mb-8 font-heading ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>Contato</h4>
          <div className={`space-y-3 md:space-y-4 text-base md:text-xl font-body ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            {footerContacts.map((contact, index) => (
              <p key={index} className={`transition-colors duration-300 cursor-pointer ${
                isDarkMode ? 'hover:text-white' : 'hover:text-gray-900'
              }`}>{contact}</p>
            ))}
          </div>
        </div>
      </div>
      <div className={`border-t mt-12 md:mt-16 pt-8 md:pt-12 text-center ${
        isDarkMode ? 'border-gray-700' : 'border-gray-200'
      }`}>
        <p className={`text-base md:text-xl font-body ${
          isDarkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>&copy; 2025 Dr. Mauro Abreu - Advogado Criminal. Todos os direitos reservados.</p>
        <p className={`mt-2 md:mt-3 text-sm md:text-lg font-body ${
          isDarkMode ? 'text-gray-500' : 'text-gray-500'
        }`}>OAB/MG 123.456</p>
      </div>
    </div>
  </footer>
);

export default Footer; 