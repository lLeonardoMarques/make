import React from 'react';
import { Film, Play, Maximize2 } from 'lucide-react';
import { GalleryItem } from '../types';

interface GalleryCardProps {
  item: GalleryItem;
  onClick: () => void;
}

export const GalleryCard: React.FC<GalleryCardProps> = ({ item, onClick }) => {
  const isVideo = item.mediaType === 'video';

  return (
    <div
      onClick={onClick}
      className="group relative rounded-2xl overflow-hidden bg-zinc-950 aspect-[4/5] cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-zinc-800 density-card"
    >
      {/* Image */}
      <img
        src={item.url}
        alt={item.title}
        referrerPolicy="no-referrer"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

      {/* Video Play Badge if Video */}
      {isVideo && (
        <div className="absolute top-3 right-3 bg-pink-600/90 backdrop-blur-md text-white px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-lg">
          <Film className="w-3 h-3" />
          <span>{item.duration || 'Vídeo'}</span>
        </div>
      )}

      {/* Centered Play Button for videos */}
      {isVideo && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-10 h-10 rounded-full bg-pink-600/90 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
            <Play className="w-4 h-4 fill-white ml-0.5" />
          </div>
        </div>
      )}

      {/* Bottom Info */}
      <div className="absolute bottom-0 inset-x-0 p-3.5 text-white space-y-1">
        <div className="flex items-center justify-between">
          <span className="text-[9px] uppercase tracking-widest text-pink-400 font-bold bg-pink-950/60 px-2 py-0.5 rounded-full border border-pink-800/40">
            {item.category.toUpperCase()}
          </span>
          <Maximize2 className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-colors" />
        </div>
        <h4 className="font-serif font-bold text-xs leading-snug line-clamp-1 group-hover:text-pink-200 transition-colors">
          {item.title}
        </h4>
        <p className="text-[11px] text-zinc-300 line-clamp-1 font-light">
          {item.description}
        </p>
      </div>
    </div>
  );
};
