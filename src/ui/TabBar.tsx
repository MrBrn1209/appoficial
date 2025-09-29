
import React from 'react';

interface Item {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}
interface TabBarProps {
  items: readonly Item[];
  current: string;
  onChange: (id: string) => void;
}

const TabBar: React.FC<TabBarProps> = ({ items, current, onChange }) => {
  return (
    <nav className="md:hidden fixed bottom-3 inset-x-0 z-50">
      <div className="container-app">
        <div className="rounded-2xl-lg shadow-soft backdrop-card border border-gray-200">
          <ul className="grid grid-cols-5">
            {items.map(({ id, label, icon: Icon }) => (
              <li key={id}>
                <button
                  onClick={() => onChange(id)}
                  aria-label={label}
                  className={[
                    "relative w-full h-14 flex flex-col items-center justify-center text-[11px]",
                    current === id ? "text-emerald-600" : "text-gray-600"
                  ].join(" ")}
                >
                  <Icon className="h-5 w-5" />
                  <span className="mt-0.5">{label}</span>
                  {current === id && (
                    <span className="absolute -top-2 h-2 w-8 rounded-full bg-emerald-500/20" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TabBar;
