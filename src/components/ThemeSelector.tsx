import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ThemeSelector: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`px-3 py-1.5 rounded-full border text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm active:scale-95 ${
        theme === 'escuro'
          ? 'bg-zinc-900 border-zinc-700 text-yellow-400 hover:bg-zinc-800'
          : 'bg-white border-zinc-200 text-zinc-900 hover:bg-zinc-100'
      }`}
      title={theme === 'escuro' ? 'Alternar para Tema Claro' : 'Alternar para Tema Escuro'}
      aria-label={theme === 'escuro' ? 'Alternar para Tema Claro' : 'Alternar para Tema Escuro'}
    >
      {theme === 'escuro' ? (
        <>
          <Sun className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
          <span className="text-[11px] font-bold text-zinc-100 hidden sm:inline">Claro</span>
        </>
      ) : (
        <>
          <Moon className="w-3.5 h-3.5 text-zinc-900 fill-zinc-900" />
          <span className="text-[11px] font-bold text-zinc-900 hidden sm:inline">Escuro</span>
        </>
      )}
    </button>
  );
};
