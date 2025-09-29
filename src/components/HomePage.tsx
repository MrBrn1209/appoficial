
import React from 'react';
import { BookOpen, Brain, Calculator, MessageCircle, Award, TrendingUp } from 'lucide-react';
import { Card, CardBody, CardTitle } from '../ui/Card';

interface HomePageProps {
  onPageChange: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onPageChange }) => {
  const features = [
    { id: 'terms', title: 'Termos Técnicos', desc: 'Mais de 600 termos essenciais com definição clara.', icon: BookOpen },
    { id: 'quiz', title: 'Simulados', desc: 'Perguntas objetivas para fixar conteúdos rapidamente.', icon: Brain },
    { id: 'calculator', title: 'Cálculos', desc: 'Gotejamento, dose, diluição e velocidade de infusão.', icon: Calculator },
    { id: 'forum', title: 'Fórum', desc: 'Tire dúvidas e ajude outros estudantes e profissionais.', icon: MessageCircle },
  ] as const;

  return (
    <div className="space-y-4">
      <Card className="backdrop-card border-gray-200">
        <CardBody className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-2xl-lg bg-emerald-500 text-white grid place-items-center">E</div>
          <div className="min-w-0">
            <div className="text-[22px] font-semibold leading-tight">Bem-vindo ao Enfermidia</div>
            <div className="text-sm text-gray-600">Estude com foco e praticidade no seu ritmo.</div>
          </div>
        </CardBody>
      </Card>

      <div className="grid grid-cols-2 gap-3">
        <Card>
          <CardBody>
            <CardTitle className="flex items-center gap-2"><Award className="h-5 w-5" /> Progresso</CardTitle>
            <div className="mt-1 text-2xl font-semibold">—</div>
            <div className="text-xs text-gray-500">Em breve</div>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle className="flex items-center gap-2"><TrendingUp className="h-5 w-5" /> Último estudo</CardTitle>
            <div className="mt-1 text-2xl font-semibold">—</div>
            <div className="text-xs text-gray-500">Em breve</div>
          </CardBody>
        </Card>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {features.map(({ id, title, desc, icon: Icon }) => (
          <Card key={id} className="hover:shadow-lg transition-shadow">
            <button onClick={() => onPageChange(id)} className="w-full text-left">
              <CardBody>
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-2xl-lg grid place-items-center bg-gray-100">
                    <Icon className="h-5 w-5 text-gray-700" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[15px] font-semibold">{title}</div>
                    <div className="text-sm text-gray-600 line-clamp-2">{desc}</div>
                  </div>
                </div>
              </CardBody>
            </button>
          </Card>
        ))}
      </div>

      <Card>
        <CardBody>
          <CardTitle>Dicas rápidas</CardTitle>
          <ul className="mt-2 space-y-1 text-sm text-gray-700">
            <li>• Estude os termos diariamente (5–10 min).</li>
            <li>• Faça 1 simulado por dia para fixação.</li>
            <li>• Use as calculadoras para treinar raciocínio.</li>
          </ul>
        </CardBody>
      </Card>
    </div>
  );
};
