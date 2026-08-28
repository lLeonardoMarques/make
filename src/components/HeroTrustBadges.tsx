import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const HeroTrustBadges: React.FC = () => {
  const { theme } = useTheme();
  const badges = [
    '100% Originais',
    'Retirada Rápida ZN',
    'WhatsApp Imediato'
  ];

  return (
    <div className={`pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 text-[11px] font-medium ${
      theme === 'escuro' ? 'text-zinc-300' : 'text-zinc-700'
    }`}>
      {badges.map((badge, index) => (
        <div 
          key={index}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-full border ${
            theme === 'escuro' 
              ? 'bg-zinc-900 border-zinc-800 text-zinc-200' 
              : 'bg-zinc-100 border-zinc-200 text-zinc-800'
          }`}
        >
          <CheckCircle2 className="w-3.5 h-3.5 text-pink-500 shrink-0" />
          <span>{badge}</span>
        </div>
      ))}
    </div>
  );
};
