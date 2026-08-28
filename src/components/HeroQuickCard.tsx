import React from 'react';
import { LucideIcon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface HeroQuickCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
}

export const HeroQuickCard: React.FC<HeroQuickCardProps> = ({
  icon: Icon,
  title,
  subtitle
}) => {
  const { theme } = useTheme();

  return (
    <div className={`flex items-start gap-3 p-3.5 rounded-2xl border shadow-sm density-card ${
      theme === 'escuro'
        ? 'bg-zinc-900 border-zinc-800 text-white'
        : 'bg-zinc-50 border-zinc-200 text-zinc-950'
    }`}>
      <div className={`p-2 rounded-full shrink-0 ${
        theme === 'escuro' ? 'bg-pink-950/80 text-pink-400' : 'bg-pink-100 text-pink-600'
      }`}>
        <Icon className="w-4 h-4" />
      </div>
      <div className="text-xs">
        <span className={`font-bold uppercase tracking-wider block text-[11px] ${
          theme === 'escuro' ? 'text-white' : 'text-zinc-950'
        }`}>
          {title}
        </span>
        <span className={`leading-tight block mt-0.5 ${
          theme === 'escuro' ? 'text-zinc-300' : 'text-zinc-600'
        }`}>
          {subtitle}
        </span>
      </div>
    </div>
  );
};
