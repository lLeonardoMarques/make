import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem } from '../types';
import { STORE_INFO } from '../data/mockData';
import confetti from 'canvas-confetti';

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number, selectedShade?: string) => void;
  removeFromCart: (productId: string, shade?: string) => void;
  updateQuantity: (productId: string, quantity: number, shade?: string) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  appliedCoupon: string;
  applyCoupon: (code: string) => { success: boolean; message: string };
  removeCoupon: () => void;
  couponDiscount: number;
  subtotal: number;
  total: number;
  totalItemsCount: number;
  deliveryMethod: 'retirada' | 'entrega';
  setDeliveryMethod: (method: 'retirada' | 'entrega') => void;
  sendWhatsAppOrder: (customerName: string, customerNotes?: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('gata_make_cart');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return [];
      }
    }
    return [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [appliedCoupon, setAppliedCoupon] = useState<string>('');
  const [deliveryMethod, setDeliveryMethod] = useState<'retirada' | 'entrega'>('retirada');

  useEffect(() => {
    localStorage.setItem('gata_make_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product, quantity = 1, selectedShade?: string) => {
    setCart(prev => {
      const existingIndex = prev.findIndex(
        item => item.product.id === product.id && item.selectedShade === selectedShade
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }

      return [...prev, { product, quantity, selectedShade }];
    });

    try {
      confetti({
        particleCount: 25,
        spread: 40,
        origin: { y: 0.8 },
        colors: ['#ec4899', '#f472b6', '#fb7185', '#ffffff']
      });
    } catch (e) {
      // ignore
    }
  };

  const removeFromCart = (productId: string, shade?: string) => {
    setCart(prev => prev.filter(
      item => !(item.product.id === productId && item.selectedShade === shade)
    ));
  };

  const updateQuantity = (productId: string, quantity: number, shade?: string) => {
    if (quantity <= 0) {
      removeFromCart(productId, shade);
      return;
    }

    setCart(prev => prev.map(item => {
      if (item.product.id === productId && item.selectedShade === shade) {
        return { ...item, quantity };
      }
      return item;
    }));
  };

  const clearCart = () => {
    setCart([]);
    setAppliedCoupon('');
  };

  const applyCoupon = (code: string) => {
    const normalized = code.trim().toUpperCase();
    if (normalized === 'GATAMAKE10') {
      setAppliedCoupon('GATAMAKE10');
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#ec4899', '#f43f5e', '#a855f7']
        });
      } catch (e) {}
      return { success: true, message: 'Cupom de 10% aplicado com sucesso!' };
    } else if (normalized === 'GANHEBRINDE') {
      setAppliedCoupon('GANHEBRINDE');
      return { success: true, message: 'Brinde (Esponja Soft) adicionado ao seu pedido!' };
    } else if (normalized === 'ZONANORTE') {
      setAppliedCoupon('ZONANORTE');
      return { success: true, message: 'Cupom de Retirada Imediata ativado!' };
    }
    return { success: false, message: 'Cupom inválido ou expirado.' };
  };

  const removeCoupon = () => {
    setAppliedCoupon('');
  };

  const subtotal = cart.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  
  let couponDiscount = 0;
  if (appliedCoupon === 'GATAMAKE10') {
    couponDiscount = subtotal * 0.10;
  }

  const total = Math.max(0, subtotal - couponDiscount);
  const totalItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const sendWhatsAppOrder = (customerName: string, customerNotes?: string) => {
    if (cart.length === 0) return;

    let message = `🌸 *NOVO PEDIDO - A GATA DA MAKE* 🌸\n\n`;
    message += `👤 *Cliente:* ${customerName.trim() || 'Cliente VIP'}\n`;
    message += `📍 *Forma de Recebimento:* ${deliveryMethod === 'retirada' ? 'Retirada na Loja (Rua das Pedras, 326)' : 'Entrega em Domicílio'}\n`;
    if (appliedCoupon) {
      message += `🎟️ *Cupom Aplicado:* ${appliedCoupon}\n`;
    }
    message += `\n🛍️ *ITENS DO PEDIDO:*\n`;

    cart.forEach((item, index) => {
      const shadeInfo = item.selectedShade ? ` [Tom: ${item.selectedShade}]` : '';
      const itemTotal = (item.product.price * item.quantity).toFixed(2).replace('.', ',');
      message += `${index + 1}. ${item.product.name}${shadeInfo}\n   ${item.quantity}x R$ ${item.product.price.toFixed(2).replace('.', ',')} = R$ ${itemTotal}\n`;
    });

    message += `\n💰 *Subtotal:* R$ ${subtotal.toFixed(2).replace('.', ',')}\n`;
    if (couponDiscount > 0) {
      message += `🎁 *Desconto do Cupom:* - R$ ${couponDiscount.toFixed(2).replace('.', ',')}\n`;
    }
    if (appliedCoupon === 'GANHEBRINDE') {
      message += `🎁 *Brinde Especial:* 1x Esponja Soft Inclusa!\n`;
    }
    message += `✨ *TOTAL FINAL:* R$ ${total.toFixed(2).replace('.', ',')}\n\n`;

    if (customerNotes && customerNotes.trim()) {
      message += `📝 *Observações:* ${customerNotes.trim()}\n\n`;
    }

    message += `Gostaria de confirmar a disponibilidade e a forma de pagamento (PIX / Cartão)!`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${STORE_INFO.phoneRaw}?text=${encoded}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        appliedCoupon,
        applyCoupon,
        removeCoupon,
        couponDiscount,
        subtotal,
        total,
        totalItemsCount,
        deliveryMethod,
        setDeliveryMethod,
        sendWhatsAppOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
