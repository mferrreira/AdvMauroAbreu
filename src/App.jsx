import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Textarea } from '@/components/ui/textarea.jsx';
import { Label } from '@/components/ui/label.jsx';
import { 
  Scale, 
  Shield, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Star,
  CheckCircle,
  Users,
  Award,
  Gavel,
  ArrowRight,
  Building2,
  FileText,
  Zap,
  ChevronRight,
  BookOpen,
  Target,
  TrendingUp
} from 'lucide-react';
import './App.css';

function App() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide header
        setIsHeaderVisible(false);
      } else {
        // Scrolling up - show header
        setIsHeaderVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

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

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Header */}
      <header className={`bg-black/80 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-50 transition-transform duration-300 ${
        isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 md:space-x-4 min-w-0">
              <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-2 md:p-4 rounded-xl md:rounded-2xl shadow-lg flex-shrink-0">
                <Scale className="h-6 md:h-8 w-6 md:w-8 text-white" />
              </div>
              <div className="min-w-0">
                <h1 className="text-lg md:text-2xl font-bold text-white tracking-tight truncate">Dr. Mauro Abreu</h1>
                <p className="text-gray-300 text-xs md:text-sm font-medium truncate">Advogado Criminal Especializado</p>
              </div>
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
              >
                Áreas de Atuação
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
              >
                Depoimentos
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
              >
                Contato
              </button>
            </nav>

            <div className="hidden lg:flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-4 w-4 text-gray-400" />
                <span className="font-medium">(31) 9 9902-1212</span>
              </div>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-sm px-4 py-2 rounded-xl transition-all duration-300"
              >
                <Phone className="mr-2 h-4 w-4" />
                Contato
              </Button>
            </div>

            {/* Mobile Contact Button */}
            <div className="md:hidden flex-shrink-0">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-sm px-2 md:px-3 py-2 rounded-xl transition-all duration-300"
              >
                <Phone className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-6xl mx-auto">
            <div className="inline-flex items-center space-x-3 bg-gray-800/50 text-gray-200 px-6 py-3 rounded-full text-sm font-medium mb-8 md:mb-12 border border-gray-600">
              <Zap className="h-5 w-5 text-gray-300" />
              <span>Atendimento 24h para Emergências</span>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
            
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-black text-white mb-8 md:mb-12 leading-tight">
              Sua Defesa <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white">Forte e Estratégica</span> em Momentos Decisivos
            </h2>
            <p className="text-lg md:text-2xl lg:text-3xl text-gray-300 mb-12 md:mb-16 leading-relaxed max-w-5xl mx-auto font-light">
              Mais de 15 anos de experiência em direito criminal. Defendemos seus direitos com dedicação, 
              estratégia e resultados comprovados em casos complexos.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-lg md:text-xl px-8 md:px-12 py-6 md:py-8 rounded-2xl shadow-lg transition-all duration-300 font-bold"
                onClick={() => {scrollToSection('contact')}}
              >
                <Phone className="mr-3 md:mr-4 h-6 md:h-7 w-6 md:w-7" />
                Consulta Gratuita
                <ArrowRight className="ml-2 md:ml-3 h-5 md:h-6 w-5 md:w-6" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg md:text-xl sm:text-white px-8 md:px-12 py-6 md:py-8 rounded-2xl border-2 border-gray-600 hover:border-white hover:text-black transition-all duration-300 bg-black/20 font-bold" onClick={() => scrollToSection('about')} >
                <Shield className="mr-3 md:mr-4 h-6 md:h-7 w-6 md:w-7" />
                  Saiba Mais 
                <ChevronRight className="ml-2 md:ml-3 h-5 md:h-6 w-5 md:w-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-12 text-center">
            <div className="bg-gray-800/50 rounded-3xl p-6 md:p-8 border border-gray-700">
              <div className="text-4xl md:text-6xl font-black text-white mb-3 md:mb-4">500+</div>
              <div className="text-gray-200 font-semibold text-lg md:text-xl">Casos Defendidos</div>
            </div>
            <div className="bg-gray-800/50 rounded-3xl p-6 md:p-8 border border-gray-700">
              <div className="text-4xl md:text-6xl font-black text-white mb-3 md:mb-4">15+</div>
              <div className="text-gray-200 font-semibold text-lg md:text-xl">Anos de Experiência</div>
            </div>
            <div className="bg-gray-800/50 rounded-3xl p-6 md:p-8 border border-gray-700">
              <div className="text-4xl md:text-6xl font-black text-white mb-3 md:mb-4">95%</div>
              <div className="text-gray-200 font-semibold text-lg md:text-xl">Taxa de Sucesso</div>
            </div>
            <div className="bg-gray-800/50 rounded-3xl p-6 md:p-8 border border-gray-700">
              <div className="text-4xl md:text-6xl font-black text-white mb-3 md:mb-4">24h</div>
              <div className="text-gray-200 font-semibold text-lg md:text-xl">Atendimento de Urgência</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <div className="inline-flex items-center space-x-3 bg-gray-800/50 text-gray-200 px-6 py-3 rounded-full text-sm font-medium mb-6 md:mb-8 border border-gray-600">
                <Award className="h-5 w-5 text-gray-300" />
                <span>Especialista Reconhecido</span>
              </div>
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 md:mb-10 leading-tight">
                Comprometido com a <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white">Justiça</span>
              </h3>
              <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed font-light">
                Dr. Mauro Abreu é especialista em direito criminal com mais de 15 anos de experiência. 
                Formado pela Universidade de São Paulo (USP) e pós-graduado em Ciências Criminais, 
                dedica sua carreira à defesa dos direitos fundamentais e à busca incansável pela justiça.
              </p>
              <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 leading-relaxed font-light">
                Nossa filosofia é baseada na defesa técnica rigorosa, no atendimento humanizado e na 
                transparência total com nossos clientes. Cada caso é tratado com a máxima dedicação 
                e estratégia personalizada.
              </p>
              <div className="flex items-center space-x-6 md:space-x-8 p-6 md:p-8 bg-gray-800/50 rounded-3xl border border-gray-700">
                <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-4 md:p-5 rounded-2xl shadow-lg">
                  <Award className="h-8 md:h-10 w-8 md:w-10 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xl md:text-2xl">OAB/MG 123.456</h4>
                  <p className="text-gray-200 text-base md:text-lg">Registro na Ordem dos Advogados do Brasil</p>
                </div>
              </div>
            </div>
            <div className="order-first lg:order-last">
              {/* Professional Photo Placeholder */}
              <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-3xl p-8 md:p-12 text-white shadow-lg border border-gray-600 text-center">
                <div className="w-48 h-48 md:w-64 md:h-64 mx-auto mb-6 bg-gray-600/30 rounded-full flex items-center justify-center">
                  <Scale className="h-24 md:h-32 w-24 md:w-32 text-gray-400" />
                </div>
                <h4 className="text-2xl md:text-3xl font-bold mb-2">Dr. Mauro Abreu</h4>
                <p className="text-gray-200 text-lg md:text-xl">Advogado Criminal Especializado</p>
                <p className="text-gray-300 text-sm md:text-base mt-2">OAB/MG 123.456</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <div className="inline-flex items-center space-x-3 bg-gray-800/50 text-gray-200 px-6 py-3 rounded-full text-sm font-medium mb-6 md:mb-8 border border-gray-600">
              <Gavel className="h-5 w-5 text-gray-300" />
              <span>Especialização Criminal</span>
            </div>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 md:mb-8">
              Áreas de <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white">Atuação</span>
            </h3>
            <p className="text-lg md:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed font-light">
              Oferecemos defesa especializada em diversas áreas do direito criminal, 
              sempre com foco na proteção dos seus direitos e na busca pelos melhores resultados.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: <Gavel className="h-8 md:h-10 w-8 md:w-10" />,
                title: "Defesa em Inquéritos Policiais",
                description: "Acompanhamento desde a fase investigativa, garantindo seus direitos desde o início."
              },
              {
                icon: <Shield className="h-8 md:h-10 w-8 md:w-10" />,
                title: "Habeas Corpus",
                description: "Proteção contra prisões ilegais e constrangimentos à liberdade de locomoção."
              },
              {
                icon: <Users className="h-8 md:h-10 w-8 md:w-10" />,
                title: "Tribunal do Júri",
                description: "Defesa especializada em crimes dolosos contra a vida perante o júri popular."
              },
              {
                icon: <Scale className="h-8 md:h-10 w-8 md:w-10" />,
                title: "Recursos Criminais",
                description: "Interposição de recursos em todas as instâncias do Poder Judiciário."
              },
              {
                icon: <FileText className="h-8 md:h-10 w-8 md:w-10" />,
                title: "Crimes Digitais",
                description: "Defesa em crimes cibernéticos e delitos praticados no ambiente virtual."
              },
              {
                icon: <Building2 className="h-8 md:h-10 w-8 md:w-10" />,
                title: "Crimes Econômicos",
                description: "Especialização em crimes contra o sistema financeiro e lavagem de dinheiro."
              }
            ].map((service, index) => (
              <Card key={index} className="group bg-gray-800/50 border border-gray-700 rounded-3xl overflow-hidden hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4 md:pb-6">
                  <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-4 md:p-6 rounded-2xl w-fit mb-6 md:mb-8">
                    <div className="text-white">{service.icon}</div>
                  </div>
                  <CardTitle className="text-lg md:text-2xl font-black text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base md:text-lg leading-relaxed text-gray-300 font-light">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 md:py-32 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <div className="inline-flex items-center space-x-3 bg-gray-800/50 text-gray-200 px-6 py-3 rounded-full text-sm font-medium mb-6 md:mb-8 border border-gray-600">
              <Star className="h-5 w-5 text-gray-300" />
              <span>Depoimentos Reais</span>
            </div>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 md:mb-8">
              O que nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white">clientes</span> dizem
            </h3>
            <p className="text-lg md:text-2xl text-gray-300 font-light">
              A confiança dos nossos clientes é nossa maior conquista
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                name: "Maria Santos",
                role: "Empresária",
                content: "Dr. Mauro foi fundamental na minha defesa. Sua dedicação e conhecimento técnico fizeram toda a diferença no resultado do meu caso. Recomendo sem hesitação.",
                rating: 5
              },
              {
                name: "João Silva",
                role: "Contador",
                content: "Profissional extremamente competente e humano. Me orientou em cada etapa do processo e conseguiu um resultado muito melhor do que eu esperava.",
                rating: 5
              },
              {
                name: "Ana Costa",
                role: "Médica",
                content: "Excelente advogado! Sempre disponível, transparente e muito estratégico. Sua atuação foi decisiva para a absolvição no meu caso.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-gray-800/50 shadow-lg rounded-3xl border border-gray-700">
                <CardContent className="p-6 md:p-10">
                  <div className="flex mb-6 md:mb-8">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-6 md:h-7 w-6 md:w-7 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-8 md:mb-10 italic leading-relaxed text-base md:text-xl font-light">
                    "{testimonial.content}"
                  </p>
                  <div className="border-t border-gray-600 pt-6 md:pt-8">
                    <h4 className="font-bold text-white text-lg md:text-2xl">{testimonial.name}</h4>
                    <p className="text-gray-400 font-semibold text-base md:text-lg">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
            <div>
              <div className="inline-flex items-center space-x-3 bg-gray-800/50 text-gray-200 px-6 py-3 rounded-full text-sm font-medium mb-6 md:mb-8 border border-gray-600">
                <Phone className="h-5 w-5 text-gray-300" />
                <span>Atendimento Personalizado</span>
              </div>
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-black  text-white mb-8 md:mb-10 leading-tight">
                Entre em <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white">Contato</span>
              </h3>
              <p className="text-lg md:text-2xl text-gray-300 mb-12 md:mb-16 leading-relaxed font-light">
                Precisa de ajuda jurídica? Entre em contato conosco para uma consulta gratuita. 
                Estamos prontos para defender seus direitos.
              </p>
              
              <div className="space-y-6 md:space-y-8">
                <div className="flex items-center space-x-6 md:space-x-8 p-6 md:p-8 bg-gray-800/50 rounded-3xl border border-gray-700">
                  <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-4 md:p-5 rounded-2xl shadow-lg">
                    <Phone className="h-6 md:h-8 w-6 md:w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg md:text-2xl">Telefone</h4>
                    <p className="text-gray-200 text-base md:text-xl">(31) 9 9902-1212</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6 md:space-x-8 p-6 md:p-8 bg-gray-800/50 rounded-3xl border border-gray-700">
                  <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-4 md:p-5 rounded-2xl shadow-lg">
                    <Mail className="h-6 md:h-8 w-6 md:w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg md:text-2xl">E-mail</h4>
                    <p className="text-gray-200 text-base md:text-xl">contato@mauroabreu.adv.br</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6 md:space-x-8 p-6 md:p-8 bg-gray-800/50 rounded-3xl border border-gray-700">
                  <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-4 md:p-5 rounded-2xl shadow-lg">
                    <MapPin className="h-6 md:h-8 w-6 md:w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg md:text-2xl">Endereço</h4>
                    <p className="text-gray-200 text-base md:text-xl">Av. Paulista, 1000 - Sala 1001<br />Itaúna - MG</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6 md:space-x-8 p-6 md:p-8 bg-gray-800/50 rounded-3xl border border-gray-700">
                  <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-4 md:p-5 rounded-2xl shadow-lg">
                    <Clock className="h-6 md:h-8 w-6 md:w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg md:text-2xl">Horário de Atendimento</h4>
                    <p className="text-gray-200 text-base md:text-xl">Segunda a Sexta: 8h às 18h<br />Emergências: 24h</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <Card className="bg-gray-800/50 border border-gray-700 rounded-3xl shadow-lg">
                <CardHeader className="pb-6 md:pb-8">
                  <CardTitle className="text-white text-2xl md:text-4xl font-black">Solicite uma Consulta</CardTitle>
                  <CardDescription className="text-gray-300 text-base md:text-xl font-light">
                    Preencha o formulário e entraremos em contato em até 2 horas
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 md:space-y-8">
                  <div>
                    <Label htmlFor="name" className="text-white mb-3 md:mb-4 text-lg md:text-xl font-bold">Nome Completo</Label>
                    <Input id="name" placeholder="Seu nome completo" className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 rounded-2xl h-12 md:h-16 text-base md:text-xl focus:border-gray-400 focus:ring-gray-400" />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-white mb-3 md:mb-4 text-lg md:text-xl font-bold">Mensagem</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Descreva brevemente seu caso..." 
                      className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 rounded-2xl min-h-[120px] md:min-h-[160px] text-base md:text-xl focus:border-gray-400 focus:ring-gray-400"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-lg md:text-xl py-4 md:py-6 rounded-2xl shadow-lg transition-all duration-300 font-bold" onClick={handleSubmit}>
                    <Mail className="mr-3 md:mr-4 h-6 md:h-7 w-6 md:w-7" />
                    Enviar Mensagem
                    <ArrowRight className="ml-2 md:ml-3 h-5 md:h-6 w-5 md:w-6" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-16 md:py-20 px-6 border-t border-gray-700">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            <div>
              <div className="flex items-center space-x-4 md:space-x-6 mb-8 md:mb-12">
                <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-3 md:p-4 rounded-2xl shadow-lg">
                  <Scale className="h-8 md:h-10 w-8 md:w-10 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl md:text-3xl font-black">Dr. Mauro Abreu</h4>
                  <p className="text-gray-400 font-semibold text-base md:text-lg">Advogado Criminal</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed text-base md:text-xl font-light">
                Defendendo seus direitos com dedicação, estratégia e resultados comprovados há mais de 15 anos.
              </p>
            </div>
            <div>
              <h4 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">Áreas de Atuação</h4>
              <ul className="space-y-3 md:space-y-4 text-gray-400 text-base md:text-xl">
                <li className="hover:text-white transition-colors duration-300 cursor-pointer">Defesa Criminal</li>
                <li className="hover:text-white transition-colors duration-300 cursor-pointer">Habeas Corpus</li>
                <li className="hover:text-white transition-colors duration-300 cursor-pointer">Tribunal do Júri</li>
                <li className="hover:text-white transition-colors duration-300 cursor-pointer">Crimes Digitais</li>
                <li className="hover:text-white transition-colors duration-300 cursor-pointer">Recursos Criminais</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">Contato</h4>
              <div className="space-y-3 md:space-y-4 text-gray-400 text-base md:text-xl">
                <p className="hover:text-white transition-colors duration-300 cursor-pointer">(31) 9 9902-1212</p>
                <p className="hover:text-white transition-colors duration-300 cursor-pointer">contato@mauroabreu.adv.br</p>
                <p className="hover:text-white transition-colors duration-300 cursor-pointer">Av. Paulista, 1000 - Sala 1001</p>
                <p className="hover:text-white transition-colors duration-300 cursor-pointer">Itaúna - MG</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 md:mt-16 pt-8 md:pt-12 text-center">
            <p className="text-gray-400 text-base md:text-xl">&copy; 2025 Dr. Mauro Abreu - Advogado Criminal. Todos os direitos reservados.</p>
            <p className="mt-2 md:mt-3 text-gray-500 text-sm md:text-lg">OAB/MG 123.456</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

