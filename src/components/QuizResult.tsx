import React from 'react';
import { Sparkles, ShoppingBag, RotateCcw, Phone } from 'lucide-react';
import { Product } from '../types';
import { STORE_INFO } from '../data/mockData';

interface QuizResultProps {
  recommendedProducts: Product[];
  onAddAll: () => void;
  onReset: () => void;
  onQuickViewProduct: (product: Product) => void;
}

export const QuizResult: React.FC<QuizResultProps> = ({
  recommendedProducts,
  onAddAll,
  onReset,
  onQuickViewProduct
}) => {
  return (
    <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
      <div className="text-center space-y-1">
        <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800/60 inline-block">
          ✨ Seu Look Ideal Foi Gerado!
        </span>
        <h3 className="font-serif font-black text-xl text-white">
          Combo Recomendado para Você
        </h3>
        <p className="text-xs text-zinc-400 max-w-sm mx-auto">
          Selecionamos os produtos que mais combinam com a sua rotina e preferências:
        </p>
      </div>

      {/* Recommended Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {recommendedProducts.map((prod) => (
          <div
            key={prod.id}
            onClick={() => onQuickViewProduct(prod)}
            className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-pink-400/60 transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="aspect-square rounded-lg overflow-hidden bg-black/40 relative">
                <img
                  src={prod.image}
                  alt={prod.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-wider text-pink-400 font-bold">
                  {prod.category}
                </span>
                <h4 className="font-serif font-bold text-xs text-white line-clamp-1 group-hover:text-pink-300">
                  {prod.name}
                </h4>
              </div>
            </div>

            <div className="pt-2 mt-2 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-black text-pink-400">
                R$ {prod.price.toFixed(2).replace('.', ',')}
              </span>
              <span className="text-[10px] text-zinc-400 group-hover:text-white font-medium">
                Ver Tom 🔍
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={onAddAll}
          className="px-6 py-3 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg flex items-center gap-2 transition-all active:scale-95"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Adicionar Combo à Sacola</span>
        </button>

        <a
          href={`https://wa.me/${STORE_INFO.phoneRaw}?text=${encodeURIComponent('Olá! Fiz o Quiz da Make Ideal no site e queria tirar dúvidas sobre os produtos recomendados!')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow flex items-center gap-2 transition-all"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Falar com Consultora</span>
        </a>

        <button
          onClick={onReset}
          className="px-4 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Refazer Quiz</span>
        </button>
      </div>
    </div>
  );
};
