
import React from 'react';
import { Bell } from 'lucide-react';

const AppHeader: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 glass-header" style={{height:'var(--header-h)'}}>
      <div className="container-app h-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl grid place-items-center bg-emerald-600">
            <span className="text-white font-bold text-[14px]">+</span>
          </div>
          <div className="text-[17px] font-semibold tracking-wide text-emerald-900">ENFERMÍDIA</div>
        </div>
        <button className="h-9 w-9 rounded-xl grid place-items-center bg-emerald-100 text-emerald-700">
          <Bell className="h-[18px] w-[18px]" />
        </button>
      </div>
    </header>
  );
};

export default AppHeader;
