import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Gavel, Shield, Users, Scale, FileText, Building2 } from 'lucide-react';

const ServicesSection = ({ services, isDarkMode }) => {
  const iconMap = {
    Gavel,
    Shield,
    Users,
    Scale,
    FileText,
    Building2,
  };

  return (
    <section id="services" className="py-20 md:py-32 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <div className={`inline-flex items-center space-x-3 px-6 py-3 rounded-full text-sm font-medium mb-6 md:mb-8 border ${
            isDarkMode 
              ? 'bg-gray-800/50 text-gray-200 border-gray-600' 
              : 'bg-gray-100/80 text-gray-700 border-gray-300'
          }`}>
            <Gavel className={`h-5 w-5 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`} />
            <span>Especialização Criminal</span>
          </div>
          <h3 className={`text-3xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-8 font-heading ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Áreas de <span className={`text-transparent bg-clip-text ${
              isDarkMode 
                ? 'bg-gradient-to-r from-gray-300 to-white' 
                : 'bg-gradient-to-r from-gray-600 to-gray-800'
            }`}>Atuação</span>
          </h3>
          <p className={`text-lg md:text-2xl max-w-5xl mx-auto leading-relaxed font-light font-body ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Oferecemos defesa especializada em diversas áreas do direito criminal, 
            sempre com foco na proteção dos seus direitos e na busca pelos melhores resultados.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <Card key={index} className={`group border rounded-3xl overflow-hidden hover:shadow-lg transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gray-800/50 border-gray-700' 
                  : 'bg-white/80 border-gray-200 shadow-lg'
              }`}>
                <CardHeader className="pb-4 md:pb-6">
                  <div className={`p-4 md:p-6 rounded-2xl w-fit mb-6 md:mb-8 ${
                    isDarkMode 
                      ? 'bg-gradient-to-br from-gray-700 to-gray-800' 
                      : 'bg-gradient-to-br from-gray-600 to-gray-700'
                  }`}>
                    <div className="text-white">
                      <IconComponent className="h-8 md:h-10 w-8 md:w-10" />
                    </div>
                  </div>
                  <CardTitle className={`text-lg md:text-2xl font-black font-heading ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className={`text-base md:text-lg leading-relaxed font-light font-body ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 