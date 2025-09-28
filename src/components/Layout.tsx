
import React from 'react';
import { User, Home, BookOpen, Brain, Calculator, MessageCircle, LogOut } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

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
    <div className="min-h-dvh bg-gray-50 text-gray-900">
      {/* Top bar (mobile + desktop) */}
      <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-4 md:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-emerald-500 flex items-center justify-center text-white font-bold">E</div>
            <span className="font-semibold">Enfermidia</span>
          </div>

          <div className="hidden sm:flex items-center gap-3">
            {user && (
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <User className="h-4 w-4" />
                <span className="truncate max-w-[10rem]">{user.email}</span>
              </div>
            )}
            {user && (
              <button
                onClick={logout}
                className="inline-flex items-center gap-1 rounded-lg border px-3 py-1.5 text-sm hover:bg-gray-50 transition"
              >
                <LogOut className="h-4 w-4" />
                Sair
              </button>
            )}
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-[16rem_1fr]">
        {/* Sidebar (desktop) */}
        <aside className="hidden md:flex md:flex-col border-r border-gray-200 bg-white min-h-[calc(100dvh-3.5rem)]">
          <nav className="flex-1 p-4">
            <ul className="space-y-1">
              {menuItems.map(({ id, label, icon: Icon }) => (
                <li key={id}>
                  <button
                    onClick={() => onPageChange(id)}
                    className={
                      [
                        "w-full flex items-center gap-3 rounded-xl px-3 py-2 text-left transition",
                        currentPage === id
                          ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200"
                          : "hover:bg-gray-50"
                      ].join(" ")
                    }
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* User box (desktop) */}
          <div className="p-4 border-t border-gray-200">
            {user ? (
              <div className="flex items-center justify-between rounded-xl bg-gray-50 p-3">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-emerald-500 text-white grid place-items-center">E</div>
                  <div className="leading-tight">
                    <div className="text-sm font-semibold truncate max-w-[10rem]">{user.email}</div>
                    <div className="text-xs text-gray-500">Conta ativa</div>
                  </div>
                </div>
                <button
                  onClick={logout}
                  className="rounded-lg border px-3 py-1.5 text-sm hover:bg-white transition"
                >
                  Sair
                </button>
              </div>
            ) : null}
          </div>
        </aside>

        {/* Main */}
        <main className="min-h-[calc(100dvh-3.5rem)] bg-gray-50 pb-20 md:pb-0">
          <div className="px-4 sm:px-6 lg:px-4 md:px-8 py-5">
            {/* Content container with sensible max width */}
            <div className="mx-auto max-w-[1100px]">
              {children}
            </div>
          </div>
        </main>
      </div>

      {/* Bottom Tab Bar (mobile only) */}
      <nav className="md:hidden fixed bottom-0 inset-x-0 z-50 border-t border-gray-200 bg-white/95 backdrop-blur">
        <ul className="grid grid-cols-5">
          {menuItems.map(({ id, label, icon: Icon }) => (
            <li key={id}>
              <button
                onClick={() => onPageChange(id)}
                className={
                  [
                    "w-full h-14 flex flex-col items-center justify-center text-xs",
                    currentPage === id ? "text-emerald-600" : "text-gray-600"
                  ].join(" ")
                }
                aria-label={label}
              >
                <Icon className="h-5 w-5" />
                <span className="mt-0.5">{label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
