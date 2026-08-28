import React, { useState } from 'react';
import { 
  Flame, 
  Sparkles, 
  ShoppingBag, 
  Zap 
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';
import { PROMO_DEALS, PRODUCTS_DATA } from '../data/mockData';
import { Product } from '../types';
import { CouponCard } from './CouponCard';
import { CountdownTimer } from './CountdownTimer';
import confetti from 'canvas-confetti';

interface PromoSectionProps {
  onQuickViewProduct: (product: Product) => void;
}

export const PromoSection: React.FC<PromoSectionProps> = ({ onQuickViewProduct }) => {
  const { theme } = useTheme();
  const { applyCoupon, addToCart, setIsCartOpen } = useCart();
  const [copiedCoupon, setCopiedCoupon] = useState<string | null>(null);

  const handleCopyCoupon = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCoupon(code);
    applyCoupon(code);
    
    try {
      confetti({
        particleCount: 40,
        spread: 50,
        origin: { y: 0.7 },
        colors: ['#ec4899', '#f43f5e', '#ffffff']
      });
    } catch (e) {}

    setTimeout(() => {
      setCopiedCoupon(null);
    }, 3000);
  };

  const featuredCombo = PRODUCTS_DATA.find(p => p.category === 'combos' && p.isPromotion) || PRODUCTS_DATA[0];

  return (
    <section id="promocoes" className="py-8 sm:py-12 relative overflow-hidden animate-in fade-in duration-200">
      
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-500/5 via-rose-500/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-6">
        
        {/* Section Header & Flash Countdown */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-4 border-b pb-5 ${
          theme === 'escuro' ? 'border-zinc-800' : 'border-zinc-200'
        }`}>
          <div className="space-y-1.5">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full font-bold text-[10px] uppercase tracking-widest border ${
              theme === 'escuro'
                ? 'bg-pink-950/80 text-pink-300 border-pink-900/60'
                : 'bg-pink-50 text-pink-700 border-pink-200'
            }`}>
              <Flame className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-bounce" />
              <span>Promoções & Descontos</span>
            </div>
            <h2 className={`font-serif font-black text-2xl sm:text-4xl tracking-tight ${
              theme === 'escuro' ? 'text-white' : 'text-zinc-950'
            }`}>
              Ofertas Imperdíveis <span className="text-pink-500">A Gata da Make</span>
            </h2>
            <p className={`text-xs sm:text-sm max-w-xl font-medium ${
              theme === 'escuro' ? 'text-zinc-300' : 'text-zinc-700'
            }`}>
              Aproveite cupons de desconto exclusivos e combos promocionais para você brilhar sem gastar muito.
            </p>
          </div>

          {/* Modular Countdown Timer */}
          <CountdownTimer />
        </div>

        {/* Modular Coupons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PROMO_DEALS.map((deal) => (
            <CouponCard
              key={deal.id}
              deal={deal}
              isCopied={copiedCoupon === deal.couponCode}
              onCopy={handleCopyCoupon}
            />
          ))}
        </div>

        {/* Featured Big Promo Banner (Combo Destaque da Semana) */}
        {featuredCombo && (
          <div className="relative rounded-3xl overflow-hidden bg-pink-600 text-white p-6 sm:p-8 shadow-xl">
            
            {/* Watermark percent background */}
            <div className="absolute right-4 bottom-0 text-[180px] font-black text-pink-700/30 select-none pointer-events-none leading-none">
              %
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
              
              {/* Product Photo Showcase */}
              <div className="lg:col-span-5 relative group">
                <div className="relative aspect-square rounded-2xl overflow-hidden border border-pink-400/40 shadow-lg bg-zinc-900">
                  <img
                    src={featuredCombo.image}
                    alt={featuredCombo.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-black text-white font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                    <Zap className="w-3 h-3 text-pink-400" />
                    <span>{featuredCombo.discountPercent}% OFF</span>
                  </div>
                </div>
              </div>

              {/* Text and Actions */}
              <div className="lg:col-span-7 space-y-4 text-left">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-white text-[9px] font-bold uppercase tracking-widest">
                    Combo da Semana
                  </span>
                  <span className="text-xs text-pink-100 font-medium">Edição Especial A Gata da Make</span>
                </div>

                <h3 className="font-serif font-black text-2xl sm:text-3xl leading-tight text-white">
                  {featuredCombo.name}
                </h3>

                <p className="text-xs sm:text-sm text-pink-100 leading-relaxed max-w-xl font-normal">
                  {featuredCombo.description}
                </p>

                {/* Benefits List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white/90">
                  {featuredCombo.benefits.map((b, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-pink-200 shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                {/* Price and CTA buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6">
                  <div>
                    {featuredCombo.originalPrice && (
                      <span className="text-xs text-pink-200 line-through block font-medium">
                        De: R$ {featuredCombo.originalPrice.toFixed(2).replace('.', ',')}
                      </span>
                    )}
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-[10px] uppercase text-pink-200 font-bold">Por:</span>
                      <span className="text-2xl sm:text-3xl font-black text-white">
                        R$ {featuredCombo.price.toFixed(2).replace('.', ',')}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      onClick={() => {
                        addToCart(featuredCombo);
                        setIsCartOpen(true);
                      }}
                      className="px-5 py-2.5 rounded-full bg-black hover:bg-zinc-900 text-white font-bold text-xs uppercase tracking-wider shadow-lg flex items-center gap-1.5 hover:scale-105 active:scale-95 transition-all"
                    >
                      <ShoppingBag className="w-3.5 h-3.5 text-pink-400" />
                      Garantir Promoção
                    </button>

                    <button
                      onClick={() => onQuickViewProduct(featuredCombo)}
                      className="px-4 py-2.5 rounded-full bg-white/20 hover:bg-white/30 text-white text-xs font-bold uppercase tracking-wider transition-colors"
                    >
                      Detalhes
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
