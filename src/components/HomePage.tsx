
import React from 'react';
import { BookOpen, Brain, Calculator, MessageCircle } from 'lucide-react';
import ProgressRing from '../ui/ProgressRing';

interface HomePageProps {
  onPageChange: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onPageChange }) => {
  return (
    <div className="space-y-4">
      {/* Greeting + week card */}
      <div className="rounded-2xl-lg shadow-soft border border-emerald-50 bg-white/70 p-4">
        <div className="text-[22px] font-semibold leading-tight">Olá, Bruno <span className="align-middle">👋</span></div>
        <div className="text-sm text-gray-600">pronto para estudar hoje?</div>

        <div className="mt-4 rounded-2xl-lg border border-emerald-100 bg-white/50 p-4 flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-600">Semana:</div>
            <div className="text-[20px] font-semibold">Simulado</div>
          </div>
          <ProgressRing size={64} stroke={8} value={70} label="70%" />
        </div>

        <button className="btn-primary mt-4" onClick={() => onPageChange('quiz')}>
          Começar Simulado
        </button>
      </div>

      {/* Feature tiles 2x2 */}
      <div className="grid grid-cols-2 gap-3">
        <button onClick={() => onPageChange('terms')} className="tile text-left">
          <div className="h-9 w-9 rounded-xl grid place-items-center bg-emerald-100 text-emerald-700 mb-1">
            <BookOpen className="h-[18px] w-[18px]" />
          </div>
          <div className="tile-title">Termos técnicos</div>
          <div className="tile-sub">Mais de 600 termos</div>
        </button>

        <button onClick={() => onPageChange('quiz')} className="tile text-left">
          <div className="h-9 w-9 rounded-xl grid place-items-center bg-emerald-100 text-emerald-700 mb-1">
            <Brain className="h-[18px] w-[18px]" />
          </div>
          <div className="tile-title">Simuladoras</div>
          <div className="tile-sub">Perguntas objetivas</div>
        </button>

        <button onClick={() => onPageChange('calculator')} className="tile text-left">
          <div className="h-9 w-9 rounded-xl grid place-items-center bg-emerald-100 text-emerald-700 mb-1">
            <Calculator className="h-[18px] w-[18px]" />
          </div>
          <div className="tile-title">Calculadoras</div>
          <div className="tile-sub">Gotejamento, dose</div>
        </button>

        <button onClick={() => onPageChange('forum')} className="tile text-left">
          <div className="h-9 w-9 rounded-xl grid place-items-center bg-emerald-100 text-emerald-700 mb-1">
            <MessageCircle className="h-[18px] w-[18px]" />
          </div>
          <div className="tile-title">Fórum</div>
          <div className="tile-sub">Dúvidas e respostas</div>
        </button>
      </div>
    </div>
  );
};
