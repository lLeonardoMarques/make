import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';
import { CustomerReview } from '../types';
import { useTheme } from '../context/ThemeContext';

interface ReviewCardProps {
  review: CustomerReview;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  const { theme } = useTheme();

  return (
    <div className={`rounded-2xl border p-5 shadow-sm flex flex-col justify-between space-y-3 hover:shadow-md transition-all density-card ${
      theme === 'escuro'
        ? 'bg-zinc-900 border-zinc-800 text-white'
        : 'bg-white border-zinc-200 text-zinc-950'
    }`}>
      <div className="space-y-2">
        {/* Rating Stars */}
        <div className="flex items-center gap-0.5 text-amber-400">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
          ))}
        </div>

        {/* Comment */}
        <p className={`text-xs italic leading-relaxed ${
          theme === 'escuro' ? 'text-zinc-300' : 'text-zinc-700'
        }`}>
          "{review.comment}"
        </p>
      </div>

      <div className={`pt-2.5 border-t flex items-center justify-between ${
        theme === 'escuro' ? 'border-zinc-800' : 'border-zinc-100'
      }`}>
        <div>
          <div className={`flex items-center gap-1 font-bold text-xs ${
            theme === 'escuro' ? 'text-white' : 'text-zinc-950'
          }`}>
            <span>{review.name}</span>
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
          </div>
          <span className={`text-[10px] ${
            theme === 'escuro' ? 'text-zinc-400' : 'text-zinc-500'
          }`}>{review.city}</span>
        </div>
        <div className={`text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
          theme === 'escuro'
            ? 'bg-pink-950 text-pink-300 border border-pink-900/60'
            : 'bg-pink-50 text-pink-700 border border-pink-200'
        }`}>
          {review.date}
        </div>
      </div>
    </div>
  );
};
