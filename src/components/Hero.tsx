import React from 'react';
import { 
  Sparkles, 
  ShoppingBag, 
  ArrowRight, 
  MapPin, 
  Phone, 
  Star, 
  Percent 
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { STORE_INFO, GALLERY_ITEMS } from '../data/mockData';
import { HeroQuickCard } from './HeroQuickCard';
import { HeroTrustBadges } from './HeroTrustBadges';
import { NavTab } from '../types';

interface HeroProps {
  onNavigate: (tab: NavTab) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const { theme } = useTheme();

  return (
    <section className="relative overflow-hidden py-8 sm:py-12 lg:py-16">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/3 -translate-x-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Text & Call to Action (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            
            {/* Top Badge */}
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest shadow-sm border ${
              theme === 'escuro'
                ? 'bg-pink-950/80 text-pink-300 border-pink-900/60'
                : 'bg-pink-50 text-pink-700 border-pink-200'
            }`}>
              <Sparkles className="w-3.5 h-3.5 text-pink-500" />
              <span>Cosméticos & Makes • Zona Norte SP</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className={`font-serif font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.08] ${
                theme === 'escuro' ? 'text-white' : 'text-zinc-950'
              }`}>
                Realce Seu Brilho com{' '}
                <span className="text-pink-500 underline decoration-pink-400 decoration-4 underline-offset-4">
                  A Gata da Make
                </span>
              </h1>
              <p className={`text-sm sm:text-base max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium ${
                theme === 'escuro' ? 'text-zinc-300' : 'text-zinc-700'
              }`}>
                Descubra as melhores maquiagens, batons aveludados, paletas ultra pigmentadas e kits exclusivos. Compre online ou visite nosso camarim na Zona Norte!
              </p>
            </div>

            {/* Bento Quick Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-left">
              <HeroQuickCard
                icon={MapPin}
                title="Endereço da Loja:"
                subtitle="R. das Pedras, 326 - Jardim Paulistano (ZN), SP"
              />

              <HeroQuickCard
                icon={Phone}
                title="Atendimento & Pedidos:"
                subtitle={STORE_INFO.phoneFormatted}
              />
            </div>

            {/* High Density CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={() => onNavigate('promocoes')}
                className="px-6 py-3 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-pink-500/20 flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Percent className="w-3.5 h-3.5" />
                Ver Ofertas & Cupons
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => onNavigate('produtos')}
                className={`px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center gap-2 ${
                  theme === 'escuro'
                    ? 'bg-zinc-800 hover:bg-zinc-700 text-white'
                    : 'bg-zinc-950 hover:bg-zinc-800 text-white'
                }`}
              >
                <ShoppingBag className="w-3.5 h-3.5 text-pink-400" />
                Vitrine de Produtos
              </button>

              <button
                onClick={() => onNavigate('galeria')}
                className={`px-5 py-3 rounded-full border text-xs font-bold uppercase tracking-wider shadow-sm transition-all flex items-center gap-1.5 ${
                  theme === 'escuro'
                    ? 'bg-zinc-900 border-zinc-700 text-zinc-100 hover:border-pink-400'
                    : 'bg-zinc-100 border-zinc-300 text-zinc-900 hover:border-pink-500'
                }`}
              >
                Fotos do Espaço 📸
              </button>
            </div>

            {/* Modular Trust Badges */}
            <HeroTrustBadges />

          </div>

          {/* Right Visual Image Showcase (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-zinc-800 bg-zinc-950 aspect-[4/5] group density-card">
                <img
                  src={GALLERY_ITEMS[0]?.url || 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e'}
                  alt="A Gata da Make - Loja e Maquiagens"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/95 via-zinc-950/30 to-transparent" />

                {/* Floating Discount Tag */}
                <div className="absolute top-3.5 left-3.5 bg-pink-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg flex items-center gap-1.5">
                  <Percent className="w-3 h-3" />
                  <span>Promoções Ativas</span>
                </div>

                {/* Floating Rating Pill */}
                <div className="absolute top-3.5 right-3.5 bg-black/70 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/10 flex items-center gap-1">
                  <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                  <span>4.9 (280+ Avaliações)</span>
                </div>

                {/* Bottom Caption & Store Info inside Image */}
                <div className="absolute bottom-0 inset-x-0 p-5 text-white space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-full bg-pink-500 text-[9px] uppercase font-bold tracking-widest text-white">
                      Espaço Físico
                    </span>
                    <span className="text-[11px] text-pink-200 font-medium">Camarim com Provador de Makes</span>
                  </div>
                  <h3 className="font-serif font-black text-lg text-white">
                    {STORE_INFO.name}
                  </h3>
                  <p className="text-xs text-zinc-300 font-normal">
                    Venha experimentar tons de batom, iluminadores e bases com a nossa equipe de especialistas.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
