import React from 'react';
import { BookOpen, Brain, Calculator, MessageCircle, Award, TrendingUp } from 'lucide-react';

interface HomePageProps {
  onPageChange: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onPageChange }) => {
  const features = [
    {
      id: 'terms',
      title: 'Termos Técnicos',
      description: 'Dicionário completo com termos da enfermagem',
      icon: BookOpen,
      color: 'bg-blue-500',
      stats: '500+ termos'
    },
    {
      id: 'quiz',
      title: 'Simulados',
      description: 'Questões de concursos públicos para praticar',
      icon: Brain,
      color: 'bg-purple-500',
      stats: '1000+ questões'
    },
    {
      id: 'calculator',
      title: 'Calculadora de Medicamentos',
      description: 'Calcule dosagens e diluições com precisão',
      icon: Calculator,
      color: 'bg-green-500',
      stats: 'Cálculos precisos'
    },
    {
      id: 'forum',
      title: 'Fórum de Dúvidas',
      description: 'Tire suas dúvidas com outros profissionais',
      icon: MessageCircle,
      color: 'bg-orange-500',
      stats: 'Comunidade ativa'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-2xl text-white p-4 md:p-8 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Bem-vindo ao Enfermidia!</h1>
            <p className="text-emerald-100 text-lg">
              Sua plataforma completa para estudos e prática em enfermagem
            </p>
          </div>
          <div className="hidden md:block">
            <img 
              src="/garantia (1).png" 
              alt="Enfermidia Logo" 
              className="h-24 w-24 rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg">
          <div className="flex items-center">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Award className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-xl md:text-2xl font-bold text-gray-900">1000+</p>
              <p className="text-gray-600">Questões Disponíveis</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg">
          <div className="flex items-center">
            <div className="bg-green-100 p-3 rounded-lg">
              <BookOpen className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-xl md:text-2xl font-bold text-gray-900">500+</p>
              <p className="text-gray-600">Termos Técnicos</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg">
          <div className="flex items-center">
            <div className="bg-purple-100 p-3 rounded-lg">
              <TrendingUp className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-xl md:text-2xl font-bold text-gray-900">95%</p>
              <p className="text-gray-600">Taxa de Aprovação</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 gap-6">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.id}
              onClick={() => onPageChange(feature.id)}
              className="bg-white rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer group"
            >
              <div className="flex items-start space-x-4">
                <div className={`${feature.color} p-3 rounded-lg group-hover:scale-110 transition-transform`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-3">
                    {feature.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-emerald-600">
                      {feature.stats}
                    </span>
                    <span className="text-emerald-600 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Tips */}
      <div className="mt-8 bg-white rounded-xl p-4 md:p-6 shadow-lg">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Dicas Rápidas</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-start space-x-3">
            <div className="bg-emerald-100 p-2 rounded-lg">
              <Brain className="h-4 w-4 text-emerald-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Pratique Diariamente</h4>
              <p className="text-sm text-gray-600">
                Faça pelo menos um simulado por dia para manter o conhecimento atualizado.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="bg-blue-100 p-2 rounded-lg">
              <BookOpen className="h-4 w-4 text-blue-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Estude os Termos</h4>
              <p className="text-sm text-gray-600">
                Revise regularmente os termos técnicos para fortalecer sua base teórica.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};