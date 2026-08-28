import React, { useState } from 'react';
import { Phone, MessageCircle, X, Sparkles } from 'lucide-react';
import { STORE_INFO } from '../data/mockData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Interactive Tooltip Card */}
      {showTooltip && (
        <div className="relative bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 p-3 rounded-2xl shadow-xl max-w-[210px] text-xs animate-in slide-in-from-bottom-2 duration-300 density-card">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-zinc-400 hover:text-zinc-600 p-0.5"
            aria-label="Fechar dica"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-1.5 font-bold text-pink-500 uppercase text-[10px] tracking-wider mb-1">
            <Sparkles className="w-3 h-3" />
            <span>Fale com a Gata!</span>
          </div>
          <p className="text-[11px] text-zinc-500 dark:text-zinc-300 leading-snug">
            Dúvidas sobre tons ou promoções? Chame no WhatsApp!
          </p>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={`https://wa.me/${STORE_INFO.phoneRaw}?text=${encodeURIComponent(STORE_INFO.whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl shadow-emerald-500/40 flex items-center justify-center hover:scale-105 active:scale-95 transition-transform duration-200 relative group"
        aria-label="Chamar no WhatsApp"
      >
        <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-pink-500 border-2 border-white animate-ping" />
        <Phone className="w-5 h-5 fill-white" />
      </a>
    </div>
  );
};
