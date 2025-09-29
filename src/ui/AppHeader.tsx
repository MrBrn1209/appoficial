
import React from 'react';

interface AppHeaderProps {
  title?: string;
  subtitle?: string;
}

const AppHeader: React.FC<AppHeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="sticky top-0 z-40 glass-header border-b border-gray-200" style={{ height: 'var(--header-h)' }}>
      <div className="container-app h-full flex items-center">
        <div className="min-w-0">
          <div className="text-[15px] font-semibold truncate">{title ?? 'Enfermidia'}</div>
          {subtitle && <div className="text-xs text-gray-500 truncate">{subtitle}</div>}
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
