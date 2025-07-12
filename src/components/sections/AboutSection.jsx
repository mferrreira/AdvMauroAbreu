import React from 'react';
import { Award, Scale } from 'lucide-react';

const AboutSection = ({ isDarkMode }) => (
  <section id="about" className="py-20 md:py-32 px-6">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
        <div>
          <div className={`inline-flex items-center space-x-3 px-6 py-3 rounded-full text-sm font-medium mb-6 md:mb-8 border ${
            isDarkMode 
              ? 'bg-gray-800/50 text-gray-200 border-gray-600' 
              : 'bg-gray-100/80 text-gray-700 border-gray-300'
          }`}>
            <Award className={`h-5 w-5 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`} />
            <span>Especialista Reconhecido</span>
          </div>
          <h3 className={`text-3xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-10 leading-tight font-heading ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Comprometido com a <span className={`text-transparent bg-clip-text ${
              isDarkMode 
                ? 'bg-gradient-to-r from-gray-300 to-white' 
                : 'bg-gradient-to-r from-gray-600 to-gray-800'
            }`}>Justiça</span>
          </h3>
          <p className={`text-lg md:text-xl mb-6 md:mb-8 leading-relaxed font-light font-body ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Dr. Mauro Abreu é especialista em direito criminal com mais de 15 anos de experiência. 
            Formado pela Universidade de São Paulo (USP) e pós-graduado em Ciências Criminais, 
            dedica sua carreira à defesa dos direitos fundamentais e à busca incansável pela justiça.
          </p>
          <p className={`text-lg md:text-xl mb-8 md:mb-12 leading-relaxed font-light font-body ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Nossa filosofia é baseada na defesa técnica rigorosa, no atendimento humanizado e na 
            transparência total com nossos clientes. Cada caso é tratado com a máxima dedicação 
            e estratégia personalizada.
          </p>
          <div className={`flex items-center space-x-6 md:space-x-8 p-6 md:p-8 rounded-3xl border ${
            isDarkMode 
              ? 'bg-gray-800/50 border-gray-700' 
              : 'bg-white/80 border-gray-200 shadow-lg'
          }`}>
            <div className={`p-4 md:p-5 rounded-2xl shadow-lg ${
              isDarkMode 
                ? 'bg-gradient-to-br from-gray-700 to-gray-800' 
                : 'bg-gradient-to-br from-gray-600 to-gray-700'
            }`}>
              <Award className="h-8 md:h-10 w-8 md:w-10 text-white" />
            </div>
            <div>
              <h4 className={`font-bold text-xl md:text-2xl font-heading ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>OAB/MG 123.456</h4>
              <p className={`text-base md:text-lg font-body ${
                isDarkMode ? 'text-gray-200' : 'text-gray-600'
              }`}>Registro na Ordem dos Advogados do Brasil</p>
            </div>
          </div>
        </div>
        <div className="order-first lg:order-last">
          {/* Professional Photo Placeholder */}
          <div className={`rounded-3xl p-8 md:p-12 shadow-lg border text-center ${
            isDarkMode 
              ? 'bg-gradient-to-br from-gray-700 to-gray-800 border-gray-600 text-white' 
              : 'bg-gradient-to-br from-gray-100 to-white border-gray-200 text-gray-900'
          }`}>
            <div className={`w-48 h-48 md:w-64 md:h-64 mx-auto mb-6 rounded-full flex items-center justify-center ${
              isDarkMode ? 'bg-gray-600/30' : 'bg-gray-200/50'
            }`}>
              <Scale className={`h-24 md:h-32 w-24 md:w-32 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              }`} />
            </div>
            <h4 className="text-2xl md:text-3xl font-bold mb-2 font-heading">Dr. Mauro Abreu</h4>
            <p className={`text-lg md:text-xl font-body ${
              isDarkMode ? 'text-gray-200' : 'text-gray-600'
            }`}>Advogado Criminal Especializado</p>
            <p className={`text-sm md:text-base mt-2 font-body ${
              isDarkMode ? 'text-gray-300' : 'text-gray-500'
            }`}>OAB/MG 123.456</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection; 