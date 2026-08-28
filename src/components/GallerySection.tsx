import React, { useState } from 'react';
import { Camera, Store } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/mockData';
import { useTheme } from '../context/ThemeContext';
import { GalleryCard } from './GalleryCard';
import { GalleryLightbox } from './GalleryLightbox';

export const GallerySection: React.FC = () => {
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState<'todas' | 'loja' | 'produtos' | 'makes' | 'videos'>('todas');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = GALLERY_ITEMS.filter(item => {
    if (activeCategory === 'todas') return true;
    return item.category === activeCategory;
  });

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  };

  const currentItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section id="galeria" className="py-8 sm:py-12 relative animate-in fade-in duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1.5">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full font-bold text-[10px] uppercase tracking-widest border ${
              theme === 'escuro'
                ? 'bg-pink-950/80 text-pink-300 border-pink-900/60'
                : 'bg-pink-50 text-pink-700 border-pink-200'
            }`}>
              <Camera className="w-3.5 h-3.5 text-pink-500" />
              <span>Tour Visual & Galeria Real</span>
            </div>
            <h2 className={`font-serif font-black text-2xl sm:text-4xl tracking-tight ${
              theme === 'escuro' ? 'text-white' : 'text-zinc-950'
            }`}>
              Espaço <span className="text-pink-500">A Gata da Make</span>
            </h2>
            <p className={`text-xs sm:text-sm max-w-xl font-medium ${
              theme === 'escuro' ? 'text-zinc-300' : 'text-zinc-700'
            }`}>
              Fotos reais do nosso ambiente, expositores de maquiagem, camarim de testes e os produtos mais queridinhos do momento.
            </p>
          </div>

          {/* Store Location Badge */}
          <div className={`border p-3 rounded-2xl shadow-sm flex items-center gap-2.5 shrink-0 density-card ${
            theme === 'escuro' ? 'bg-zinc-900 border-zinc-800 text-white' : 'bg-white border-zinc-200 text-zinc-950'
          }`}>
            <div className="p-2 rounded-xl bg-pink-500 text-white shrink-0">
              <Store className="w-4 h-4" />
            </div>
            <div className="text-[11px]">
              <span className={`font-bold block ${
                theme === 'escuro' ? 'text-white' : 'text-zinc-950'
              }`}>
                Loja Aberta para Visitação
              </span>
              <span className={theme === 'escuro' ? 'text-zinc-400' : 'text-zinc-600'}>
                R. das Pedras, 326 - ZN São Paulo
              </span>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
          {[
            { id: 'todas', label: 'Todas as Mídias', icon: '📸' },
            { id: 'loja', label: 'Espaço & Loja', icon: '🏠' },
            { id: 'produtos', label: 'Expositores', icon: '💄' },
            { id: 'makes', label: 'Bancada & Makes', icon: '✨' },
            { id: 'videos', label: 'Vídeos & Reels', icon: '🎥' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id as any)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all flex items-center gap-1.5 shadow-sm ${
                activeCategory === tab.id
                  ? theme === 'escuro' ? 'bg-white text-zinc-950 font-black' : 'bg-zinc-950 text-white font-black'
                  : theme === 'escuro'
                    ? 'bg-zinc-900 text-zinc-300 border border-zinc-800 hover:border-pink-400'
                    : 'bg-zinc-100 text-zinc-800 border border-zinc-200 hover:border-pink-500'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Modular Gallery Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item, index) => (
            <GalleryCard
              key={item.id}
              item={item}
              onClick={() => openLightbox(index)}
            />
          ))}
        </div>

      </div>

      {/* Modular Lightbox */}
      <GalleryLightbox
        item={currentItem}
        onClose={closeLightbox}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
};
