import React from 'react';
import { Tag, Copy, Check } from 'lucide-react';
import { PromoDeal } from '../types';
import { useTheme } from '../context/ThemeContext';

interface CouponCardProps {
  deal: PromoDeal;
  isCopied: boolean;
  onCopy: (code: string) => void;
}

export const CouponCard: React.FC<CouponCardProps> = ({
  deal,
  isCopied,
  onCopy
}) => {
  const { theme } = useTheme();

  return (
    <div className={`rounded-2xl p-4 sm:p-5 border shadow-sm relative overflow-hidden flex flex-col justify-between hover:shadow-md transition-all density-card ${
      theme === 'escuro' ? 'bg-zinc-900 border-zinc-800 text-white' : 'bg-white border-zinc-200 text-zinc-950'
    }`}>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full border ${
            theme === 'escuro'
              ? 'bg-pink-950 text-pink-300 border-pink-900/60'
              : 'bg-pink-50 text-pink-700 border-pink-200'
          }`}>
            {deal.badge}
          </span>
          <Tag className="w-3.5 h-3.5 text-pink-500" />
        </div>

        <h3 className={`font-serif font-black text-sm ${
          theme === 'escuro' ? 'text-white' : 'text-zinc-950'
        }`}>
          {deal.title}
        </h3>
        <p className={`text-xs leading-relaxed ${
          theme === 'escuro' ? 'text-zinc-300' : 'text-zinc-700'
        }`}>
          {deal.subtitle}
        </p>
      </div>

      <div className={`pt-3.5 mt-3 border-t flex items-center justify-between gap-2 ${
        theme === 'escuro' ? 'border-zinc-800' : 'border-zinc-100'
      }`}>
        <div className={`px-2.5 py-1 rounded-lg border border-dashed font-mono text-xs font-black ${
          theme === 'escuro'
            ? 'bg-zinc-950 border-pink-800 text-pink-300'
            : 'bg-pink-50/50 border-pink-300 text-pink-700'
        }`}>
          {deal.couponCode}
        </div>

        <button
          onClick={() => onCopy(deal.couponCode)}
          className={`py-1.5 px-3 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 transition-all ${
            isCopied
              ? 'bg-emerald-600 text-white'
              : theme === 'escuro'
                ? 'bg-white text-zinc-950 hover:bg-zinc-200'
                : 'bg-zinc-950 text-white hover:bg-pink-600'
          }`}
          title="Copiar cupom e aplicar automaticamente"
        >
          {isCopied ? (
            <>
              <Check className="w-3 h-3" />
              <span>Aplicado!</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3 text-pink-400" />
              <span>Copiar</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
