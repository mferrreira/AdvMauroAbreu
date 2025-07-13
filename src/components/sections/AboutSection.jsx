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
            Dr. Mauro Abreu é advogado criminal em Itaúna com mais de 15 anos de experiência. 
            Formado pela Universidade de São Paulo (USP) e pós-graduado em Ciências Criminais, 
            dedica sua carreira à defesa criminal especializada na região de Itaúna e Centro-Oeste de Minas Gerais.
          </p>
          <p className={`text-lg md:text-xl mb-8 md:mb-12 leading-relaxed font-light font-body ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Como advogado criminalista em Itaúna, nossa filosofia é baseada na defesa técnica rigorosa, 
            no atendimento humanizado e na transparência total com nossos clientes. Cada caso é tratado 
            com a máxima dedicação e estratégia personalizada, oferecendo defesa criminal de qualidade 
            para toda a região.
          </p>
          <div className={`flex items-center space-x-6 md:space-x-8 p-6 md:p-8 rounded-3xl border ${
            isDarkMode 
              ? 'bg-gray-800/50 border-gray-700' 
              : 'bg-white/80 border-gray-200 shadow-lg'
          }`}>

            <div>
              <h4 className={`font-bold text-xl md:text-2xl font-heading ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>OAB/MG 167.457</h4>
              <p className={`text-base md:text-lg font-body ${
                isDarkMode ? 'text-gray-200' : 'text-gray-600'
              }`}>Registro na Ordem dos Advogados do Brasil</p>
            </div>
          </div>
        </div>
        <div className="order-first lg:order-last">
          {/* Professional Photo Card */}
          <div 
            className={`rounded-3xl p-8 h-150 md:p-12 shadow-lg border text-center relative overflow-hidden ${
              isDarkMode 
                ? 'border-gray-600 text-white' 
                : 'border-gray-200 text-gray-900'
            }`}
            style={{
              backgroundImage: `url('/about_photo.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Overlay for better text readability */}
            <div className={`absolute inset-0 ${
              isDarkMode 
                ? 'bg-black/20' 
                : 'bg-white/10'
            }`}></div>

          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection; 