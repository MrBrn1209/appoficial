
import React from 'react';
import { BookOpen, Brain, Calculator, MessageCircle } from 'lucide-react';
import { Card, CardBody } from '../ui/Card';

interface HomePageProps { onPageChange: (page: string) => void; }

export const HomePage: React.FC<HomePageProps> = ({ onPageChange }) => {
  return (
    <div className="space-y-4">
      <Card className="backdrop-card">
        <CardBody className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl-lg bg-emerald-500 text-white grid place-items-center">E</div>
          <div className="min-w-0">
            <h1>Olá, pronto para estudar hoje?</h1>
            <div className="text-sm text-gray-600">Estude com foco e praticidade no seu ritmo.</div>
          </div>
        </CardBody>
      </Card>

      <button className="btn-primary">Começar Simulado</button>

      <div className="grid grid-cols-2 gap-3">
        {[
          {id:'terms', title:'Termos técnicos', desc:'Mais de 600 termos', icon: BookOpen},
          {id:'quiz',  title:'Simuladoras', desc:'Perguntas objetivas', icon: Brain},
          {id:'calculator', title:'Calculadoras', desc:'Gotejamento, dose', icon: Calculator},
          {id:'forum', title:'Fórum', desc:'Dúvidas e respostas', icon: MessageCircle},
        ].map(({id, title, desc, icon: Icon}) => (
          <button key={id} onClick={()=>onPageChange(id)} className="rounded-2xl-lg border border-gray-200 bg-white shadow-soft p-4 text-left">
            <div className="flex items-center gap-2 mb-1">
              <div className="h-6 w-6 rounded-xl grid place-items-center bg-emerald-50 text-emerald-700">
                <Icon className="h-[18px] w-[18px]" />
              </div>
              <div className="text-[15px] font-semibold">{title}</div>
            </div>
            <div className="text-sm text-gray-600">{desc}</div>
          </button>
        ))}
      </div>
    </div>
  );
};
