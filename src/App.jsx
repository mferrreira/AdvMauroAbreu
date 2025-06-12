import React from 'react';
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
  Gavel
} from 'lucide-react';
import './App.css';

function App() {

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-slate-900 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Scale className="h-8 w-8 text-blue-400" />
              <div>
                <h1 className="text-2xl font-bold">Dr. Mauro Abreu</h1>
                <p className="text-blue-200 text-sm">Advogado Criminal Especializado</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(31) 9 9902-1212</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contato@mauroabreu.adv.br</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Sua Defesa <span className="text-blue-600">Forte e Estratégica</span> em Momentos Decisivos
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Mais de 15 anos de experiência em direito criminal. Defendemos seus direitos com dedicação, 
              estratégia e resultados comprovados em casos complexos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
                <Phone className="mr-2 h-5 w-5" />
                Consulta Gratuita
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                <Shield className="mr-2 h-5 w-5" />
                Saiba Mais
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-slate-300">Casos Defendidos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">15+</div>
              <div className="text-slate-300">Anos de Experiência</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">95%</div>
              <div className="text-slate-300">Taxa de Sucesso</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">24h</div>
              <div className="text-slate-300">Atendimento de Urgência</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-slate-900 mb-6">
                Comprometido com a <span className="text-blue-600">Justiça</span>
              </h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Dr. Mauro Abreu é especialista em direito criminal com mais de 15 anos de experiência. 
                Formado pela Universidade de São Paulo (USP) e pós-graduado em Ciências Criminais, 
                dedica sua carreira à defesa dos direitos fundamentais e à busca incansável pela justiça.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Nossa filosofia é baseada na defesa técnica rigorosa, no atendimento humanizado e na 
                transparência total com nossos clientes. Cada caso é tratado com a máxima dedicação 
                e estratégia personalizada.
              </p>
              <div className="flex items-center space-x-4">
                <Award className="h-12 w-12 text-blue-600" />
                <div>
                  <h4 className="font-semibold text-slate-900">OAB/SP 123.456</h4>
                  <p className="text-slate-600">Registro na Ordem dos Advogados do Brasil</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-6">Por que nos escolher?</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-200 mt-1" />
                  <div>
                    <h5 className="font-semibold">Experiência Comprovada</h5>
                    <p className="text-blue-100">Mais de 500 casos defendidos com sucesso</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-200 mt-1" />
                  <div>
                    <h5 className="font-semibold">Atendimento 24h</h5>
                    <p className="text-blue-100">Disponibilidade para emergências</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-200 mt-1" />
                  <div>
                    <h5 className="font-semibold">Estratégia Personalizada</h5>
                    <p className="text-blue-100">Cada caso recebe atenção única</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-slate-900 mb-4">
              Áreas de <span className="text-blue-600">Atuação</span>
            </h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Oferecemos defesa especializada em diversas áreas do direito criminal, 
              sempre com foco na proteção dos seus direitos e na busca pelos melhores resultados.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Gavel className="h-8 w-8" />,
                title: "Defesa em Inquéritos Policiais",
                description: "Acompanhamento desde a fase investigativa, garantindo seus direitos desde o início."
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Habeas Corpus",
                description: "Proteção contra prisões ilegais e constrangimentos à liberdade de locomoção."
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Tribunal do Júri",
                description: "Defesa especializada em crimes dolosos contra a vida perante o júri popular."
              },
              {
                icon: <Scale className="h-8 w-8" />,
                title: "Recursos Criminais",
                description: "Interposição de recursos em todas as instâncias do Poder Judiciário."
              },
              {
                icon: <Phone className="h-8 w-8" />,
                title: "Crimes Digitais",
                description: "Defesa em crimes cibernéticos e delitos praticados no ambiente virtual."
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Crimes Econômicos",
                description: "Especialização em crimes contra o sistema financeiro e lavagem de dinheiro."
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="text-blue-600 mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-slate-900 mb-4">
              O que nossos <span className="text-blue-600">clientes</span> dizem
            </h3>
            <p className="text-xl text-slate-600">
              A confiança dos nossos clientes é nossa maior conquista
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Santos",
                role: "Empresária",
                content: "Dr. Alexandre foi fundamental na minha defesa. Sua dedicação e conhecimento técnico fizeram toda a diferença no resultado do meu caso. Recomendo sem hesitação.",
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
              <Card key={index} className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-6 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                    <p className="text-slate-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-4xl font-bold mb-6">
                Entre em <span className="text-blue-400">Contato</span>
              </h3>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Precisa de ajuda jurídica? Entre em contato conosco para uma consulta gratuita. 
                Estamos prontos para defender seus direitos.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-blue-400" />
                  <div>
                    <h4 className="font-semibold">Telefone</h4>
                    <p className="text-slate-300">(31) 9 9902-1212</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-blue-400" />
                  <div>
                    <h4 className="font-semibold">E-mail</h4>
                    <p className="text-slate-300">contato@mauroabreu.adv.br</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-blue-400" />
                  <div>
                    <h4 className="font-semibold">Endereço</h4>
                    <p className="text-slate-300">Av. Paulista, 1000 - Sala 1001<br />São Paulo - SP</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="h-6 w-6 text-blue-400" />
                  <div>
                    <h4 className="font-semibold">Horário de Atendimento</h4>
                    <p className="text-slate-300">Segunda a Sexta: 8h às 18h<br />Emergências: 24h</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Solicite uma Consulta</CardTitle>
                  <CardDescription className="text-slate-300">
                    Preencha o formulário e entraremos em contato em até 2 horas
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-white mb-2">Nome Completo</Label>
                    <Input id="name" placeholder="Seu nome completo" className="bg-slate-700 border-slate-600 text-white" />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-white mb-2">Mensagem</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Descreva brevemente seu caso..." 
                      className="bg-slate-700 border-slate-600 text-white min-h-[120px]"
                    />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3" onClick={handleSubmit}>
                    <Mail className="mr-2 h-5 w-5" />
                    Enviar Mensagem
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Scale className="h-8 w-8 text-blue-400" />
                <div>
                  <h4 className="text-xl font-bold">Dr. Mauro Abreu</h4>
                  <p className="text-slate-400">Advogado Criminal</p>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Defendendo seus direitos com dedicação, estratégia e resultados comprovados há mais de 15 anos.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Áreas de Atuação</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Defesa Criminal</li>
                <li>Habeas Corpus</li>
                <li>Tribunal do Júri</li>
                <li>Crimes Digitais</li>
                <li>Recursos Criminais</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-slate-400">
                <p>(31) 9 9902-1212</p>
                <p>contato@mauroabreu.adv.br</p>
                <p>Av. Paulista, 1000 - Sala 1001</p>
                <p>São Paulo - SP</p>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2025 Dr. Mauro Abreu - Advogado Criminal. Todos os direitos reservados.</p>
            <p className="mt-2">OAB/SP 123.456</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

