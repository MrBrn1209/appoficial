
import React from 'react';
import { Home, BookOpen, Brain, Calculator, MessageCircle } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import AppHeader from '../ui/AppHeader';
import TabBar from '../ui/TabBar';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onPageChange: (page: string) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentPage, onPageChange }) => {
  const { user, logout } = useAuth();

  const menuItems = [
    { id: 'home', label: 'Início', icon: Home },
    { id: 'terms', label: 'Termos', icon: BookOpen },
    { id: 'quiz', label: 'Simulados', icon: Brain },
    { id: 'calculator', label: 'Cálculos', icon: Calculator },
    { id: 'forum', label: 'Fórum', icon: MessageCircle },
  ] as const;

  return (
    <div className="min-h-dvh">
      <AppHeader title="Enfermidia" subtitle="Estudos • Cálculos • Simulados" userEmail={user?.email} onLogout={user ? logout : undefined} />
      <main className="pt-4 safe-bottom">
        <div className="container-app">{children}</div>
      </main>
      <TabBar items={menuItems} current={currentPage} onChange={onPageChange} />
    </div>
  );
};
