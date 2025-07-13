import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { ArrowRight, FileText, Clock, User } from 'lucide-react';

const BlogSection = ({ isDarkMode }) => {
  const blogPosts = [
    {
      title: "Como Escolher um Advogado Criminal em Itaúna",
      excerpt: "Dicas essenciais para escolher o melhor advogado criminalista na região de Itaúna e Centro-Oeste de Minas Gerais.",
      readTime: "5 min",
      author: "Dr. Mauro Abreu",
      date: "Janeiro 2025",
      keywords: ["advogado criminal Itaúna", "advogado criminalista", "defesa criminal"]
    },
    {
      title: "Direitos do Acusado: O que Você Precisa Saber",
      excerpt: "Conheça seus direitos fundamentais quando acusado de um crime e como um advogado criminal pode ajudar.",
      readTime: "7 min",
      author: "Dr. Mauro Abreu",
      date: "Janeiro 2025",
      keywords: ["direitos do acusado", "advogado criminal", "defesa penal"]
    },
    {
      title: "Habeas Corpus: Quando e Como Solicitar",
      excerpt: "Entenda quando é possível solicitar habeas corpus e como um advogado criminal especializado pode ajudar.",
      readTime: "6 min",
      author: "Dr. Mauro Abreu",
      date: "Janeiro 2025",
      keywords: ["habeas corpus", "advogado criminal", "liberdade de locomoção"]
    }
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <div className={`inline-flex items-center space-x-3 px-6 py-3 rounded-full text-sm font-medium mb-6 md:mb-8 border ${
            isDarkMode 
              ? 'bg-gray-800/50 text-gray-200 border-gray-600' 
              : 'bg-gray-100/80 text-gray-700 border-gray-300'
          }`}>
            <FileText className={`h-5 w-5 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`} />
            <span>Conhecimento Jurídico</span>
          </div>
          <h2 className={`text-3xl md:text-5xl lg:text-6xl font-black mb-8 md:mb-10 leading-tight font-heading ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Artigos e <span className={`text-transparent bg-clip-text ${
              isDarkMode 
                ? 'bg-gradient-to-r from-gray-300 to-white' 
                : 'bg-gradient-to-r from-gray-600 to-gray-800'
            }`}>Informações</span>
          </h2>
          <p className={`text-lg md:text-2xl leading-relaxed font-light font-body max-w-4xl mx-auto ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Conteúdo especializado sobre direito criminal para ajudar você a entender seus direitos 
            e como um advogado criminal em Itaúna pode defender seus interesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {blogPosts.map((post, index) => (
            <Card key={index} className={`border rounded-3xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
              isDarkMode 
                ? 'bg-gray-800/50 border-gray-700 hover:border-gray-600' 
                : 'bg-white/80 border-gray-200 hover:border-gray-300'
            }`}>
              <CardHeader className="pb-4 md:pb-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`flex items-center space-x-2 text-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                  <div className={`flex items-center space-x-2 text-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                </div>
                <CardTitle className={`text-xl md:text-2xl font-bold font-heading ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {post.title}
                </CardTitle>
                <CardDescription className={`text-base md:text-lg font-body ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-medium ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {post.date}
                  </span>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className={`rounded-xl transition-all duration-300 ${
                      isDarkMode 
                        ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                        : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    Ler Mais
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <Button 
            size="lg"
            className={`text-lg md:text-xl px-8 md:px-12 py-6 md:py-8 rounded-2xl shadow-lg transition-all duration-300 font-bold ${
              isDarkMode 
                ? 'bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700' 
                : 'bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600'
            }`}
          >
            Ver Todos os Artigos
            <ArrowRight className="ml-2 md:ml-3 h-5 md:h-6 w-5 md:w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection; 