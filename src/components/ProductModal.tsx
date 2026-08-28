import React, { useState } from 'react';
import { 
  X, 
  ShoppingBag, 
  Phone, 
  Star, 
  Check, 
  Sparkles, 
  Percent, 
  ShieldCheck, 
  Truck 
} from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';
import { STORE_INFO } from '../data/mockData';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  const { addToCart, setIsCartOpen } = useCart();
  const { theme } = useTheme();
  const [selectedShade, setSelectedShade] = useState<string | undefined>(
    product.shades && product.shades.length > 0 ? product.shades[0].name : undefined
  );
  const [quantity, setQuantity] = useState(1);
  const [addedAnimation, setAddedAnimation] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedShade);
    setAddedAnimation(true);
    setTimeout(() => {
      setAddedAnimation(false);
      onClose();
      setIsCartOpen(true);
    }, 400);
  };

  const handleWhatsAppBuy = () => {
    let msg = `🌸 *Olá A Gata da Make!* Quero comprar o seguinte produto do site:\n\n`;
    msg += `💄 *Produto:* ${product.name}\n`;
    if (selectedShade) {
      msg += `🎨 *Tom Selecionado:* ${selectedShade}\n`;
    }
    msg += `🔢 *Quantidade:* ${quantity}x\n`;
    msg += `💰 *Valor:* R$ ${(product.price * quantity).toFixed(2).replace('.', ',')}\n\n`;
    msg += `📍 *Retirada:* Rua das Pedras, 326 ou Entrega.\n`;
    msg += `Está disponível para envio imediato?`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${STORE_INFO.phoneRaw}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className={`relative max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl border my-8 max-h-[90vh] flex flex-col md:flex-row density-card ${
          theme === 'escuro' ? 'bg-zinc-900 border-zinc-800 text-white' : 'bg-white border-zinc-200 text-zinc-950'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 p-2 rounded-full transition-colors z-20 ${
            theme === 'escuro'
              ? 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white'
              : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200 hover:text-zinc-950'
          }`}
          aria-label="Fechar modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Left Image Section */}
        <div className={`md:w-1/2 relative flex items-center justify-center p-6 min-h-[280px] ${
          theme === 'escuro' ? 'bg-zinc-950' : 'bg-zinc-50'
        }`}>
          <img
            src={product.image}
            alt={product.name}
            referrerPolicy="no-referrer"
            className="max-h-[340px] w-full object-contain rounded-xl drop-shadow-md"
          />

          {/* Discount Badge */}
          {product.discountPercent && (
            <div className="absolute top-4 left-4 bg-rose-600 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
              <Percent className="w-3 h-3" />
              <span>{product.discountPercent}% OFF</span>
            </div>
          )}
        </div>

        {/* Right Info Section */}
        <div className="md:w-1/2 p-5 sm:p-6 flex flex-col justify-between overflow-y-auto max-h-[550px] space-y-4">
          <div className="space-y-3">
            
            {/* Brand & Reviews */}
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black uppercase tracking-widest text-pink-500">
                {product.brand}
              </span>
              <div className="flex items-center gap-1 text-xs text-amber-500 font-bold">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>{product.rating}</span>
                <span className={`font-normal ${theme === 'escuro' ? 'text-zinc-400' : 'text-zinc-500'}`}>({product.reviewsCount})</span>
              </div>
            </div>

            {/* Title */}
            <h3 className={`font-serif font-black text-lg sm:text-xl leading-tight ${
              theme === 'escuro' ? 'text-white' : 'text-zinc-950'
            }`}>
              {product.name}
            </h3>

            {/* Price */}
            <div className={`p-3 rounded-xl border flex items-baseline justify-between ${
              theme === 'escuro' ? 'bg-zinc-950 border-zinc-800' : 'bg-zinc-50 border-zinc-200'
            }`}>
              <div>
                {product.originalPrice && (
                  <span className={`text-[11px] line-through block font-medium ${
                    theme === 'escuro' ? 'text-zinc-400' : 'text-zinc-500'
                  }`}>
                    De: R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                  </span>
                )}
                <div className="flex items-baseline gap-1.5">
                  <span className={`text-[11px] font-bold uppercase tracking-wider ${
                    theme === 'escuro' ? 'text-zinc-400' : 'text-zinc-600'
                  }`}>Preço:</span>
                  <span className="text-xl font-black text-pink-500">
                    R$ {product.price.toFixed(2).replace('.', ',')}
                  </span>
                </div>
              </div>
              <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                theme === 'escuro'
                  ? 'bg-emerald-950 text-emerald-300 border-emerald-900'
                  : 'bg-emerald-50 text-emerald-700 border-emerald-200'
              }`}>
                Pronta Entrega
              </span>
            </div>

            {/* Shade Selection if available */}
            {product.shades && product.shades.length > 0 && (
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className={`text-[11px] font-bold uppercase tracking-wider ${
                    theme === 'escuro' ? 'text-zinc-400' : 'text-zinc-600'
                  }`}>Escolha o Tom:</span>
                  <span className="text-pink-500 font-bold text-xs">{selectedShade}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {product.shades.map((shade) => (
                    <button
                      key={shade.name}
                      onClick={() => setSelectedShade(shade.name)}
                      className={`px-2.5 py-1 rounded-full text-xs font-semibold border flex items-center gap-1.5 transition-all ${
                        selectedShade === shade.name
                          ? 'border-pink-600 bg-pink-500/10 text-pink-500 ring-1 ring-pink-500 font-bold'
                          : theme === 'escuro'
                            ? 'border-zinc-700 text-zinc-300 hover:border-pink-400'
                            : 'border-zinc-300 text-zinc-800 hover:border-pink-500'
                      }`}
                    >
                      <span
                        className="w-3 h-3 rounded-full border border-black/10 shrink-0"
                        style={{ backgroundColor: shade.colorHex }}
                      />
                      <span className="text-[11px]">{shade.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Description */}
            <div className={`space-y-1 text-xs leading-relaxed ${
              theme === 'escuro' ? 'text-zinc-300' : 'text-zinc-700'
            }`}>
              <p>{product.description}</p>
            </div>

            {/* Benefits Checklist */}
            <div className="space-y-1 pt-1">
              <span className={`text-[10px] font-black uppercase tracking-widest block ${
                theme === 'escuro' ? 'text-zinc-400' : 'text-zinc-500'
              }`}>
                Destaques do Produto:
              </span>
              {product.benefits.map((b, i) => (
                <div key={i} className={`flex items-center gap-1.5 text-xs ${
                  theme === 'escuro' ? 'text-zinc-300' : 'text-zinc-800'
                }`}>
                  <Check className="w-3 h-3 text-pink-500 shrink-0 font-bold" />
                  <span>{b}</span>
                </div>
              ))}
            </div>

            {/* Makeup Tip */}
            {product.usageTip && (
              <div className={`p-2.5 rounded-xl border text-xs flex items-start gap-2 ${
                theme === 'escuro'
                  ? 'bg-pink-950/40 border-pink-900/50 text-pink-200'
                  : 'bg-pink-50 border-pink-200 text-pink-900'
              }`}>
                <Sparkles className="w-3.5 h-3.5 text-pink-500 shrink-0 mt-0.5" />
                <div className="text-[11px] leading-relaxed">
                  <strong>Dica A Gata da Make:</strong> {product.usageTip}
                </div>
              </div>
            )}

          </div>

          {/* Bottom Actions */}
          <div className={`space-y-3 pt-3 border-t ${
            theme === 'escuro' ? 'border-zinc-800' : 'border-zinc-200'
          }`}>
            
            {/* Quantity Selector */}
            <div className="flex items-center justify-between">
              <span className={`text-xs font-bold uppercase tracking-wider ${
                theme === 'escuro' ? 'text-zinc-400' : 'text-zinc-600'
              }`}>Quantidade:</span>
              <div className={`flex items-center border rounded-full overflow-hidden ${
                theme === 'escuro' ? 'border-zinc-700' : 'border-zinc-300'
              }`}>
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className={`px-3 py-0.5 font-bold text-xs ${
                    theme === 'escuro' ? 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700' : 'bg-zinc-100 text-zinc-800 hover:bg-zinc-200'
                  }`}
                >
                  -
                </button>
                <span className={`px-3 py-0.5 text-xs font-bold min-w-[2rem] text-center ${
                  theme === 'escuro' ? 'text-white' : 'text-zinc-950'
                }`}>
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className={`px-3 py-0.5 font-bold text-xs ${
                    theme === 'escuro' ? 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700' : 'bg-zinc-100 text-zinc-800 hover:bg-zinc-200'
                  }`}
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart & Buy WhatsApp Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <button
                onClick={handleAddToCart}
                className={`py-2.5 px-4 rounded-full font-bold text-[10px] uppercase tracking-widest shadow-md flex items-center justify-center gap-1.5 transition-all active:scale-95 ${
                  theme === 'escuro'
                    ? 'bg-white text-zinc-950 hover:bg-zinc-200'
                    : 'bg-zinc-950 text-white hover:bg-zinc-800'
                }`}
              >
                <ShoppingBag className="w-3.5 h-3.5 text-pink-500" />
                <span>Adicionar à Sacola</span>
              </button>

              <button
                onClick={handleWhatsAppBuy}
                className="py-2.5 px-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[10px] uppercase tracking-widest shadow-md flex items-center justify-center gap-1.5 transition-all active:scale-95"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Pedir no WhatsApp</span>
              </button>
            </div>

            <div className="flex items-center justify-center gap-3 text-[10px] text-zinc-400 font-medium pt-0.5">
              <span className="flex items-center gap-1">
                <Truck className="w-3 h-3 text-pink-500" />
                Retirada: R. das Pedras, 326
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-pink-500" />
                100% Original
              </span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
