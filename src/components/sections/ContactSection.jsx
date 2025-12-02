import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Textarea } from '@/components/ui/textarea.jsx';
import { Label } from '@/components/ui/label.jsx';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';

const ContactSection = ({ contactInfo, isDarkMode, handleSubmit }) => {
  const iconMap = {
    Phone,
    Mail,
    MapPin,
    Clock,
  };

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
          <div>
            <div className={`inline-flex items-center space-x-3 px-6 py-3 rounded-full text-sm font-medium mb-6 md:mb-8 border ${
              isDarkMode 
                ? 'bg-gray-800/50 text-gray-200 border-gray-600' 
                : 'bg-gray-100/80 text-gray-700 border-gray-300'
            }`}>
              <Phone className={`h-5 w-5 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`} />
              <span>Atendimento Personalizado</span>
            </div>
            <h3 className={`text-3xl md:text-5xl lg:text-6xl font-black mb-8 md:mb-10 leading-tight font-heading ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Entre em <span className={`text-transparent bg-clip-text ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-gray-300 to-white' 
                  : 'bg-gradient-to-r from-gray-600 to-gray-800'
              }`}>Contato</span>
            </h3>
            <p className={`text-lg md:text-2xl mb-12 md:mb-16 leading-relaxed font-light font-body ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Precisa de ajuda jurídica? Entre em contato conosco para uma consulta gratuita. 
              Estamos prontos para defender seus direitos.
            </p>
            
            <div className="space-y-6 md:space-y-8">
              {contactInfo.map((contact, index) => {
                const IconComponent = iconMap[contact.icon];
                return (
                  <div key={index} className={`flex items-center space-x-6 md:space-x-8 p-6 md:p-8 rounded-3xl border ${
                    isDarkMode 
                      ? 'bg-gray-800/50 border-gray-700' 
                      : 'bg-white/80 border-gray-200 shadow-lg'
                  }`}>
                    <div className={`p-4 md:p-5 rounded-2xl shadow-lg ${
                      isDarkMode 
                        ? 'bg-gradient-to-br from-gray-700 to-gray-800' 
                        : 'bg-gradient-to-br from-gray-600 to-gray-700'
                    }`}>
                      <IconComponent className="h-6 md:h-8 w-6 md:w-8 text-white" />
                    </div>
                    <div>
                      <h4 className={`font-bold text-lg md:text-2xl font-heading ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>{contact.title}</h4>
                      <p className={`text-base md:text-xl whitespace-pre-line font-body ${
                        isDarkMode ? 'text-gray-200' : 'text-gray-600'
                      }`}>{contact.content}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div>
            <Card className={`border rounded-3xl shadow-lg ${
              isDarkMode 
                ? 'bg-gray-800/50 border-gray-700' 
                : 'bg-white/80 border-gray-200'
            }`}>
              <CardHeader className="pb-6 md:pb-8">
                <CardTitle className={`text-2xl md:text-4xl font-black font-heading ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Solicite uma Consulta</CardTitle>
                <CardDescription className={`text-base md:text-xl font-light font-body ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Preencha o formulário e entraremos em contato em até 2 horas
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 md:space-y-8">
                <div>
                  <Label htmlFor="name" className={`mb-3 md:mb-4 text-lg md:text-xl font-bold ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Nome Completo</Label>
                  <Input 
                    id="name" 
                    placeholder="Seu nome completo" 
                    className={`rounded-2xl h-12 md:h-16 text-base md:text-xl focus:ring-2 transition-all duration-300 ${
                      isDarkMode 
                        ? 'bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-gray-400 focus:ring-gray-400' 
                        : 'bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-gray-500 focus:ring-gray-500'
                    }`} 
                  />
                </div>
                <div>
                  <Label htmlFor="message" className={`mb-3 md:mb-4 text-lg md:text-xl font-bold ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Mensagem</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Descreva brevemente seu caso..." 
                    className={`rounded-2xl min-h-[120px] md:min-h-[160px] text-base md:text-xl focus:ring-2 transition-all duration-300 ${
                      isDarkMode 
                        ? 'bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-gray-400 focus:ring-gray-400' 
                        : 'bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-gray-500 focus:ring-gray-500'
                    }`}
                  />
                </div>
                <Button className={`w-full text-lg md:text-xl py-4 md:py-6 rounded-2xl shadow-lg transition-all duration-300 font-bold ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700' 
                    : 'bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600'
                }`} onClick={handleSubmit}>
                  <Mail className="mr-3 md:mr-4 h-6 md:h-7 w-6 md:w-7" />
                  Enviar Mensagem
                  <ArrowRight className="ml-2 md:ml-3 h-5 md:h-6 w-5 md:w-6" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="mt-20 md:mt-32">
          <div className="text-center mb-12 md:mb-16">
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black mb-6 md:mb-8 leading-tight font-heading ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Nossa <span className={`text-transparent bg-clip-text ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-gray-300 to-white' 
                  : 'bg-gradient-to-r from-gray-600 to-gray-800'
              }`}>Localização</span>
            </h2>
            <p className={`text-lg md:text-xl leading-relaxed font-light font-body max-w-3xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Nosso escritório está localizado no centro de Itaúna, MG, 
              oferecendo fácil acesso e atendimento personalizado para toda a região.
            </p>
          </div>
          
          <div className={`rounded-3xl overflow-hidden shadow-2xl border ${
            isDarkMode ? 'border-gray-700' : 'border-gray-200'
          }`}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.1234567890123!2d-44.580!3d-20.075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDA0JzMwLjAiUyA0NMKwMzQnNDguMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123"
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do escritório Dr. Mauro Abreu - Advogado Criminal em Itaúna"
              aria-label="Mapa mostrando a localização do escritório do Dr. Mauro Abreu em Itaúna, MG"
            />
          </div>
          
          <div className="mt-8 md:mt-12 text-center">
            <p className={`text-base md:text-lg font-body ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              <strong>Endereço:</strong> Rua Antônio Corradi, 350, Cerqueira Lima, Itaúna/MG
            </p>
            <p className={`text-base md:text-lg font-body mt-2 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              <strong>Telefone:</strong> (37) 99908-3110
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 