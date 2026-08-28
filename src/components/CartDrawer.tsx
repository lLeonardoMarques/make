import React, { useState } from 'react';
import { 
  X, 
  ShoppingBag, 
  Trash2, 
  Phone, 
  MapPin, 
  Truck, 
  Tag, 
  ArrowRight,
  Store
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';
import { STORE_INFO } from '../data/mockData';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    subtotal,
    total,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    couponDiscount,
    deliveryMethod,
    setDeliveryMethod,
    sendWhatsAppOrder,
    totalItemsCount
  } = useCart();

  const { theme } = useTheme();
  const [couponInput, setCouponInput] = useState('');
  const [couponError, setCouponError] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerNotes, setCustomerNotes] = useState('');

  if (!isCartOpen) return null;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponInput.trim()) return;
    const res = applyCoupon(couponInput);
    if (!res.success) {
      setCouponError(res.message);
    } else {
      setCouponError('');
      setCouponInput('');
    }
  };

  const handleCheckout = () => {
    sendWhatsAppOrder(customerName, customerNotes);
  };

  return (
    <div 
      onClick={() => setIsCartOpen(false)}
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-end animate-in fade-in duration-200"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className={`w-full max-w-md h-full flex flex-col justify-between shadow-2xl border-l animate-in slide-in-from-right duration-200 ${
          theme === 'escuro'
            ? 'bg-zinc-950 text-white border-zinc-800'
            : 'bg-white text-zinc-950 border-zinc-200'
        }`}
      >
        
        {/* Cart Header */}
        <div className={`p-4 border-b flex items-center justify-between ${
          theme === 'escuro' ? 'border-zinc-800' : 'border-zinc-100'
        }`}>
          <div className="flex items-center gap-2.5">
            <div className={`p-2 rounded-xl border ${
              theme === 'escuro'
                ? 'bg-pink-950 text-pink-400 border-pink-900/50'
                : 'bg-pink-50 text-pink-600 border-pink-100'
            }`}>
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h3 className={`font-serif font-black text-base ${
                theme === 'escuro' ? 'text-white' : 'text-zinc-950'
              }`}>
                Sua Sacola de Makes
              </h3>
              <span className={`text-[10px] uppercase tracking-wider font-bold ${
                theme === 'escuro' ? 'text-zinc-400' : 'text-zinc-500'
              }`}>
                {totalItemsCount} {totalItemsCount === 1 ? 'item' : 'itens'} selecionados
              </span>
            </div>
          </div>

          <button
            onClick={() => setIsCartOpen(false)}
            className={`p-1.5 rounded-full transition-colors ${
              theme === 'escuro'
                ? 'hover:bg-zinc-800 text-zinc-400 hover:text-white'
                : 'hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950'
            }`}
            aria-label="Fechar sacola"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Cart Items Scroll Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {cart.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <div className="w-14 h-14 rounded-full bg-pink-50 dark:bg-pink-950 text-pink-500 flex items-center justify-center mx-auto text-xl border border-pink-100 dark:border-pink-900/50">
                🛍️
              </div>
              <h4 className={`font-serif font-black text-base ${
                theme === 'escuro' ? 'text-white' : 'text-zinc-950'
              }`}>
                Sua sacola está vazia
              </h4>
              <p className={`text-xs max-w-xs mx-auto ${
                theme === 'escuro' ? 'text-zinc-400' : 'text-zinc-600'
              }`}>
                Explore nossas makes em promoção e adicione seus produtos favoritos para comprar!
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className={`px-4 py-2 rounded-full font-bold text-[10px] uppercase tracking-widest shadow-sm transition-all ${
                  theme === 'escuro'
                    ? 'bg-white text-zinc-950 hover:bg-zinc-200'
                    : 'bg-zinc-950 text-white hover:bg-zinc-800'
                }`}
              >
                Ver Vitrine de Makes
              </button>
            </div>
          ) : (
            <div className="space-y-2.5">
              {cart.map((item, idx) => (
                <div
                  key={`${item.product.id}-${item.selectedShade || 'default'}-${idx}`}
                  className={`p-3 rounded-2xl border flex items-center gap-3 density-card ${
                    theme === 'escuro'
                      ? 'bg-zinc-900 border-zinc-800 text-white'
                      : 'bg-zinc-50 border-zinc-200 text-zinc-950'
                  }`}
                >
                  {/* Thumbnail */}
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    referrerPolicy="no-referrer"
                    className="w-14 h-14 rounded-xl object-cover shrink-0 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700"
                  />

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h5 className={`font-serif font-bold text-xs line-clamp-1 ${
                      theme === 'escuro' ? 'text-white' : 'text-zinc-950'
                    }`}>
                      {item.product.name}
                    </h5>
                    {item.selectedShade && (
                      <span className="text-[10px] text-pink-500 font-semibold block">
                        Tom: {item.selectedShade}
                      </span>
                    )}
                    <span className="text-xs font-black text-pink-500 mt-0.5 block">
                      R$ {item.product.price.toFixed(2).replace('.', ',')}
                    </span>
                  </div>

                  {/* Quantity & Delete */}
                  <div className="flex flex-col items-end gap-1.5 shrink-0">
                    <button
                      onClick={() => removeFromCart(item.product.id, item.selectedShade)}
                      className="text-zinc-400 hover:text-rose-500 p-0.5 transition-colors"
                      title="Remover"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>

                    <div className={`flex items-center border rounded-full overflow-hidden ${
                      theme === 'escuro' ? 'border-zinc-700 bg-zinc-800' : 'border-zinc-300 bg-white'
                    }`}>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1, item.selectedShade)}
                        className={`px-2 py-0.5 text-xs font-bold ${
                          theme === 'escuro' ? 'text-zinc-200 hover:bg-zinc-700' : 'text-zinc-800 hover:bg-zinc-100'
                        }`}
                      >
                        -
                      </button>
                      <span className={`px-1.5 py-0.5 text-[10px] font-bold min-w-[1.2rem] text-center ${
                        theme === 'escuro' ? 'text-white' : 'text-zinc-950'
                      }`}>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1, item.selectedShade)}
                        className={`px-2 py-0.5 text-xs font-bold ${
                          theme === 'escuro' ? 'text-zinc-200 hover:bg-zinc-700' : 'text-zinc-800 hover:bg-zinc-100'
                        }`}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Delivery Method Selection */}
              <div className="pt-2 space-y-1.5">
                <span className={`text-[10px] font-bold uppercase tracking-wider block ${
                  theme === 'escuro' ? 'text-zinc-400' : 'text-zinc-600'
                }`}>
                  Forma de Recebimento:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setDeliveryMethod('retirada')}
                    className={`p-2 rounded-xl text-xs font-bold border flex items-center justify-center gap-1.5 transition-all ${
                      deliveryMethod === 'retirada'
                        ? 'border-pink-600 bg-pink-500/10 text-pink-500 ring-1 ring-pink-500'
                        : theme === 'escuro'
                          ? 'border-zinc-800 bg-zinc-900 text-zinc-300'
                          : 'border-zinc-200 bg-zinc-50 text-zinc-800'
                    }`}
                  >
                    <Store className="w-3.5 h-3.5 text-pink-500" />
                    <span className="text-[11px]">Retirar na Loja</span>
                  </button>

                  <button
                    onClick={() => setDeliveryMethod('entrega')}
                    className={`p-2 rounded-xl text-xs font-bold border flex items-center justify-center gap-1.5 transition-all ${
                      deliveryMethod === 'entrega'
                        ? 'border-pink-600 bg-pink-500/10 text-pink-500 ring-1 ring-pink-500'
                        : theme === 'escuro'
                          ? 'border-zinc-800 bg-zinc-900 text-zinc-300'
                          : 'border-zinc-200 bg-zinc-50 text-zinc-800'
                    }`}
                  >
                    <Truck className="w-3.5 h-3.5 text-pink-500" />
                    <span className="text-[11px]">Entrega Express</span>
                  </button>
                </div>
                {deliveryMethod === 'retirada' && (
                  <p className={`text-[10px] flex items-center gap-1 ${
                    theme === 'escuro' ? 'text-zinc-400' : 'text-zinc-600'
                  }`}>
                    <MapPin className="w-3 h-3 text-pink-500" />
                    R. das Pedras, 326 (Zona Norte)
                  </p>
                )}
              </div>

              {/* Coupon Code Section */}
              <div className="pt-1">
                {appliedCoupon ? (
                  <div className={`p-2 rounded-xl border flex items-center justify-between text-xs ${
                    theme === 'escuro'
                      ? 'bg-pink-950/60 border-pink-900 text-pink-300'
                      : 'bg-pink-50 border-pink-200 text-pink-700'
                  }`}>
                    <div className="flex items-center gap-1.5 font-bold text-[11px]">
                      <Tag className="w-3 h-3" />
                      <span>Cupom: {appliedCoupon}</span>
                    </div>
                    <button
                      onClick={removeCoupon}
                      className="text-[10px] text-rose-500 hover:underline font-semibold uppercase tracking-wider"
                    >
                      Remover
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyCoupon} className="flex gap-1.5">
                    <input
                      type="text"
                      placeholder="Cupom (ex: GATAMAKE10)"
                      value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value)}
                      className={`flex-1 px-3 py-1.5 text-xs rounded-full border uppercase placeholder:normal-case focus:outline-none focus:ring-1 focus:ring-pink-500 text-[11px] ${
                        theme === 'escuro'
                          ? 'bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-500'
                          : 'bg-white border-zinc-300 text-zinc-950 placeholder:text-zinc-500'
                      }`}
                    />
                    <button
                      type="submit"
                      className="px-3 py-1.5 rounded-full bg-pink-500 hover:bg-pink-600 text-white text-[10px] font-bold uppercase tracking-wider transition-colors"
                    >
                      Aplicar
                    </button>
                  </form>
                )}
                {couponError && (
                  <span className="text-[10px] text-rose-500 mt-1 block">{couponError}</span>
                )}
              </div>

              {/* Customer Name & Notes Input */}
              <div className="space-y-1.5 pt-1">
                <input
                  type="text"
                  placeholder="Seu Nome Completo (opcional)"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className={`w-full px-3 py-1.5 text-xs rounded-xl border focus:outline-none focus:ring-1 focus:ring-pink-500 text-[11px] ${
                    theme === 'escuro'
                      ? 'bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-500'
                      : 'bg-white border-zinc-300 text-zinc-950 placeholder:text-zinc-500'
                  }`}
                />
                <textarea
                  placeholder="Observação (ex: tom da pele, preferência de horário...)"
                  rows={2}
                  value={customerNotes}
                  onChange={(e) => setCustomerNotes(e.target.value)}
                  className={`w-full px-3 py-1.5 text-xs rounded-xl border focus:outline-none focus:ring-1 focus:ring-pink-500 resize-none text-[11px] ${
                    theme === 'escuro'
                      ? 'bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-500'
                      : 'bg-white border-zinc-300 text-zinc-950 placeholder:text-zinc-500'
                  }`}
                />
              </div>

            </div>
          )}
        </div>

        {/* Cart Footer */}
        {cart.length > 0 && (
          <div className={`p-4 border-t space-y-2.5 ${
            theme === 'escuro'
              ? 'border-zinc-800 bg-zinc-950'
              : 'border-zinc-200 bg-zinc-50'
          }`}>
            
            {/* Price Calculations */}
            <div className="space-y-1 text-xs">
              <div className={`flex items-center justify-between text-[11px] ${
                theme === 'escuro' ? 'text-zinc-400' : 'text-zinc-600'
              }`}>
                <span>Subtotal:</span>
                <span className={`font-semibold ${theme === 'escuro' ? 'text-white' : 'text-zinc-950'}`}>R$ {subtotal.toFixed(2).replace('.', ',')}</span>
              </div>
              {couponDiscount > 0 && (
                <div className="flex items-center justify-between text-emerald-600 dark:text-emerald-400 font-semibold text-[11px]">
                  <span>Desconto (10%):</span>
                  <span>- R$ {couponDiscount.toFixed(2).replace('.', ',')}</span>
                </div>
              )}
              {appliedCoupon === 'GANHEBRINDE' && (
                <div className="flex items-center justify-between text-pink-500 font-semibold text-[11px]">
                  <span>Brinde Especial:</span>
                  <span>1x Esponja Soft Grátis!</span>
                </div>
              )}
              <div className={`flex items-center justify-between text-xs font-black pt-1 border-t ${
                theme === 'escuro' ? 'border-zinc-800 text-white' : 'border-zinc-200 text-zinc-950'
              }`}>
                <span className="uppercase tracking-wider">Total a Pagar:</span>
                <span className="text-base text-pink-500 font-black">
                  R$ {total.toFixed(2).replace('.', ',')}
                </span>
              </div>
            </div>

            {/* Checkout Action Button */}
            <button
              onClick={handleCheckout}
              className="w-full py-3 px-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[10px] uppercase tracking-widest shadow-md flex items-center justify-center gap-1.5 transition-all active:scale-95"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Finalizar no WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <p className={`text-[9px] text-center uppercase tracking-wider ${
              theme === 'escuro' ? 'text-zinc-400' : 'text-zinc-600'
            }`}>
              Atendimento WhatsApp: <strong>(11) 98531-3930</strong>
            </p>
          </div>
        )}

      </div>
    </div>
  );
};
