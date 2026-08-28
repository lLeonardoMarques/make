import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Eye, 
  Star, 
  Percent, 
  Check 
} from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const { addToCart, setIsCartOpen } = useCart();
  const { theme } = useTheme();
  const [selectedShade, setSelectedShade] = useState<string | undefined>(
    product.shades && product.shades.length > 0 ? product.shades[0].name : undefined
  );
  const [addedAnimation, setAddedAnimation] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1, selectedShade);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1500);
  };

  const handleBuyNow = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1, selectedShade);
    setIsCartOpen(true);
  };

  return (
    <div 
      onClick={() => onQuickView(product)}
      className={`group relative rounded-2xl border p-3.5 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer density-card ${
        theme === 'escuro'
          ? 'bg-zinc-900 border-zinc-800 hover:border-pink-500/60 text-white'
          : 'bg-white border-zinc-200 hover:border-pink-400 text-zinc-950'
      }`}
    >
      {/* Top Media & Tags */}
      <div>
        <div className="relative aspect-square rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 mb-3">
          <img
            src={product.image}
            alt={product.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Floating Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
            {product.discountPercent && (
              <span className="px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase bg-pink-600 text-white shadow-sm flex items-center gap-1">
                <Percent className="w-2.5 h-2.5" />
                {product.discountPercent}% OFF
              </span>
            )}
            {product.tag && (
              <span className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase bg-black/80 backdrop-blur-md text-pink-300 border border-pink-500/20">
                {product.tag}
              </span>
            )}
          </div>

          {/* Quick View Button overlay */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="absolute bottom-2 right-2 p-1.5 rounded-full bg-white/90 dark:bg-zinc-900/90 text-zinc-900 dark:text-zinc-100 opacity-0 group-hover:opacity-100 transition-opacity shadow-md hover:text-pink-500"
            title="Ver Detalhes"
          >
            <Eye className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Brand & Category */}
        <div className="flex items-center justify-between text-[10px] font-medium mb-1">
          <span className="uppercase tracking-widest font-bold text-pink-500">
            {product.brand}
          </span>
          <div className="flex items-center gap-1 text-amber-500 font-semibold">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            <span>{product.rating}</span>
            <span className={`text-[9px] ${theme === 'escuro' ? 'text-zinc-400' : 'text-zinc-500'}`}>({product.reviewsCount})</span>
          </div>
        </div>

        {/* Product Name */}
        <h4 className={`font-serif font-bold text-sm line-clamp-2 leading-snug group-hover:text-pink-500 transition-colors ${
          theme === 'escuro' ? 'text-white' : 'text-zinc-950'
        }`}>
          {product.name}
        </h4>

        {/* Shade Options if available */}
        {product.shades && product.shades.length > 0 && (
          <div 
            className={`mt-2 pt-1.5 border-t flex items-center gap-1.5 ${
              theme === 'escuro' ? 'border-zinc-800' : 'border-zinc-100'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <span className={`text-[9px] uppercase font-bold mr-1 ${
              theme === 'escuro' ? 'text-zinc-400' : 'text-zinc-500'
            }`}>Tons:</span>
            <div className="flex flex-wrap gap-1">
              {product.shades.map((shade) => (
                <button
                  key={shade.name}
                  onClick={() => setSelectedShade(shade.name)}
                  title={shade.name}
                  className={`w-3.5 h-3.5 rounded-full border transition-transform ${
                    selectedShade === shade.name 
                      ? 'ring-2 ring-pink-500 scale-110 border-white' 
                      : 'border-zinc-400 dark:border-zinc-700 opacity-80'
                  }`}
                  style={{ backgroundColor: shade.colorHex }}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Pricing & CTA */}
      <div className={`mt-3 pt-2.5 border-t space-y-2 ${
        theme === 'escuro' ? 'border-zinc-800' : 'border-zinc-100'
      }`}>
        <div className="flex items-baseline justify-between">
          <div>
            {product.originalPrice && (
              <span className={`text-[11px] line-through block font-medium ${
                theme === 'escuro' ? 'text-zinc-400' : 'text-zinc-500'
              }`}>
                R$ {product.originalPrice.toFixed(2).replace('.', ',')}
              </span>
            )}
            <span className={`text-base font-black ${
              theme === 'escuro' ? 'text-white' : 'text-zinc-950'
            }`}>
              R$ {product.price.toFixed(2).replace('.', ',')}
            </span>
          </div>
          <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider ${
            theme === 'escuro' 
              ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-900/60' 
              : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
          }`}>
            Em Estoque
          </span>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-1.5" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={handleAddToCart}
            className={`py-1.5 px-2 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1 shadow-sm ${
              addedAnimation
                ? 'bg-emerald-600 text-white'
                : theme === 'escuro'
                  ? 'bg-zinc-800 text-pink-300 hover:bg-zinc-700 border border-zinc-700'
                  : 'bg-pink-50 text-pink-700 hover:bg-pink-100 border border-pink-200'
            }`}
          >
            {addedAnimation ? (
              <>
                <Check className="w-3 h-3" />
                <span>Salvo</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3 h-3" />
                <span>+ Sacola</span>
              </>
            )}
          </button>

          <button
            onClick={handleBuyNow}
            className={`py-1.5 px-2 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1 shadow-sm active:scale-95 ${
              theme === 'escuro'
                ? 'bg-white text-zinc-950 hover:bg-zinc-200'
                : 'bg-zinc-950 text-white hover:bg-zinc-800'
            }`}
          >
            <span>Comprar</span>
          </button>
        </div>
      </div>

    </div>
  );
};
