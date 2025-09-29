
import React from 'react';
import { User } from 'lucide-react';

interface AppHeaderProps {
  title?: string;
  subtitle?: string;
  userEmail?: string;
  onLogout?: () => void;
}

const AppHeader: React.FC<AppHeaderProps> = ({ title, subtitle, userEmail, onLogout }) => {
  return (
    <header className="sticky top-0 z-40 glass-header border-b border-gray-200">
      <div className="container-app h-14 flex items-center justify-between">
        <div className="min-w-0">
          <div className="text-[15px] font-semibold truncate">{title ?? 'Enfermidia'}</div>
          {subtitle && <div className="text-xs text-gray-500 truncate">{subtitle}</div>}
        </div>
        <div className="flex items-center gap-3">
          {userEmail && (
            <div className="hidden sm:flex items-center gap-2 text-sm text-gray-700">
              <User className="h-4 w-4" />
              <span className="truncate max-w-[10rem]">{userEmail}</span>
            </div>
          )}
          {onLogout && (
            <button onClick={onLogout} className="hidden sm:inline-flex rounded-full border px-3 py-1.5 text-sm hover:bg-white transition">
              Sair
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
