
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
    <nav className="md:hidden fixed bottom-0 inset-x-0 z-50" style={{ height:'var(--tabbar-h)' }}>
      <div className="container-app h-full">
        <div className="h-full rounded-t-2xl shadow-soft backdrop-card border border-gray-200 border-b-0">
          <ul className="grid grid-cols-5 h-full">
            {items.map(({ id, label, icon: Icon }) => (
              <li key={id}>
                <button
                  onClick={() => onChange(id)}
                  aria-label={label}
                  className={["w-full h-full flex flex-col items-center justify-center text-[11px]", current===id?"text-emerald-700":"text-gray-600"].join(" ")}
                >
                  <Icon className="h-[22px] w-[22px]" />
                  <span className="mt-[2px]">{label}</span>
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
