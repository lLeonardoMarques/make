import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeMode } from '../types';

interface ThemeContextType {
  theme: ThemeMode;
  toggleTheme: () => void;
  setTheme: (theme: ThemeMode) => void;
  themeClasses: {
    bg: string;
    cardBg: string;
    textPrimary: string;
    textSecondary: string;
    accent: string;
    border: string;
    navBg: string;
  };
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('gata_make_theme') as ThemeMode;
    return saved === 'escuro' ? 'escuro' : 'claro';
  });

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
    localStorage.setItem('gata_make_theme', newTheme);
  };

  const toggleTheme = () => {
    const next = theme === 'claro' ? 'escuro' : 'claro';
    setTheme(next);
  };

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'escuro') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
  }, [theme]);

  const getThemeClasses = () => {
    if (theme === 'escuro') {
      return {
        bg: 'bg-zinc-950 text-white',
        cardBg: 'bg-zinc-900 border-zinc-800 text-white',
        textPrimary: 'text-white',
        textSecondary: 'text-zinc-300',
        accent: 'text-pink-400',
        border: 'border-zinc-800',
        navBg: 'bg-zinc-950/95 border-zinc-800 text-white'
      };
    }
    return {
      bg: 'bg-white text-zinc-950',
      cardBg: 'bg-white border-zinc-200 text-zinc-950',
      textPrimary: 'text-zinc-950',
      textSecondary: 'text-zinc-700',
      accent: 'text-pink-600',
      border: 'border-zinc-200',
      navBg: 'bg-white/95 border-zinc-200 text-zinc-950'
    };
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme, themeClasses: getThemeClasses() }}>
      <div className={`min-h-screen transition-colors duration-200 ${getThemeClasses().bg} ${getThemeClasses().textPrimary}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
