import React from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Sparkles } from 'lucide-react';
import { GalleryItem } from '../types';
import { STORE_INFO } from '../data/mockData';

interface GalleryLightboxProps {
  item: GalleryItem | null;
  onClose: () => void;
  onPrev: (e: React.MouseEvent) => void;
  onNext: (e: React.MouseEvent) => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  item,
  onClose,
  onPrev,
  onNext
}) => {
  if (!item) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-4xl w-full bg-zinc-950 rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 flex flex-col md:flex-row max-h-[90vh]"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/60 hover:bg-black text-white transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Side */}
        <div className="relative flex-1 bg-black flex items-center justify-center min-h-[300px] md:min-h-[450px]">
          <img
            src={item.url}
            alt={item.title}
            referrerPolicy="no-referrer"
            className="max-h-[75vh] w-auto object-contain"
          />

          {/* Navigation Arrows */}
          <button
            onClick={onPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 hover:bg-pink-600 text-white transition-all shadow-lg"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={onNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 hover:bg-pink-600 text-white transition-all shadow-lg"
            aria-label="Próxima"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Details Side */}
        <div className="w-full md:w-80 p-5 sm:p-6 bg-zinc-900 flex flex-col justify-between space-y-4 text-white">
          <div className="space-y-3">
            <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-pink-950 text-pink-400 border border-pink-900/60 inline-block">
              {item.category.toUpperCase()}
            </span>
            <h3 className="font-serif font-black text-xl leading-tight">
              {item.title}
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              {item.description}
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-zinc-300">
              <MapPin className="w-3.5 h-3.5 text-pink-500 shrink-0" />
              <span>R. das Pedras, 326 (Zona Norte, SP)</span>
            </div>
          </div>

          <div className="pt-4 border-t border-zinc-800">
            <a
              href={`https://wa.me/${STORE_INFO.phoneRaw}?text=${encodeURIComponent('Olá! Vi a foto "' + item.title + '" na galeria do site e gostaria de mais informações!')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow transition-all"
            >
              <span>Consultar no WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
