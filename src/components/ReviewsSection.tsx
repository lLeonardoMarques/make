import React from 'react';
import { MessageSquareHeart } from 'lucide-react';
import { CUSTOMER_REVIEWS } from '../data/mockData';
import { useTheme } from '../context/ThemeContext';
import { ReviewCard } from './ReviewCard';

export const ReviewsSection: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section className="py-8 sm:py-12 relative animate-in fade-in duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full font-bold text-[10px] uppercase tracking-widest border ${
            theme === 'escuro'
              ? 'bg-pink-950/80 text-pink-300 border-pink-900/60'
              : 'bg-pink-50 text-pink-700 border-pink-200'
          }`}>
            <MessageSquareHeart className="w-3.5 h-3.5 text-pink-500" />
            <span>Depoimentos Reais</span>
          </div>
          <h2 className={`font-serif font-black text-2xl sm:text-4xl tracking-tight ${
            theme === 'escuro' ? 'text-white' : 'text-zinc-950'
          }`}>
            O Que Nossas <span className="text-pink-500">Gatas</span> Dizem
          </h2>
          <p className={`text-xs sm:text-sm font-medium ${
            theme === 'escuro' ? 'text-zinc-300' : 'text-zinc-700'
          }`}>
            Mais de 2.000 clientes satisfeitas em São Paulo e em todo o Brasil.
          </p>
        </div>

        {/* Modular Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {CUSTOMER_REVIEWS.map((rev) => (
            <ReviewCard key={rev.id} review={rev} />
          ))}
        </div>

      </div>
    </section>
  );
};
