import React, { useEffect } from 'react';
import { 
  X, 
  Sparkles, 
  ShoppingBag, 
  Phone, 
  MapPin, 
  Camera, 
  Compass, 
  Percent, 
  ChevronRight, 
  Sun,
  Moon,
  Home,
  MessageSquareHeart,
  Clock
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';
import { STORE_INFO } from '../data/mockData';
import { NavTab } from '../types';

interface MobileMenuProps {
  isOpen: boolean;
  activeTab: NavTab;
  onClose: () => void;
  onSelectTab: (tab: NavTab) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  activeTab,
  onClose,
  onSelectTab
}) => {
  const { theme, toggleTheme } = useTheme();
  const { totalItemsCount, setIsCartOpen } = useCart();

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navItems: { id: NavTab; label: string; badge?: string; badgeColor?: string; icon: React.ReactNode }[] = [
    {
      id: 'inicio',
      label: 'Início / Destaques',
      badge: 'Home',
      badgeColor: 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300',
      icon: <Home className="w-4 h-4 text-pink-500" />
    },
    {
      id: 'produtos',
      label: 'Vitrine de Maquiagens',
      badge: 'Completo',
      badgeColor: 'bg-pink-100 dark:bg-pink-950 text-pink-700 dark:text-pink-300',
      icon: <ShoppingBag className="w-4 h-4 text-pink-500" />
    },
    {
      id: 'promocoes',
      label: 'Promoções & Cupons',
      badge: '10% OFF',
      badgeColor: 'bg-rose-500 text-white',
      icon: <Percent className="w-4 h-4 text-rose-500" />
    },
    {
      id: 'galeria',
      label: 'Espaço & Fotos Reais',
      icon: <Camera className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
    },
    {
      id: 'quiz',
      label: 'Quiz da Make Ideal',
      badge: 'Interativo',
      badgeColor: 'bg-pink-500 text-white',
      icon: <Sparkles className="w-4 h-4 text-pink-500" />
    },
    {
      id: 'localizacao',
      label: 'Localização & Horários',
      badge: 'Zona Norte',
      badgeColor: 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300',
      icon: <Compass className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
    },
    {
      id: 'avaliacoes',
      label: 'Depoimentos de Clientes',
      badge: '4.9 ⭐',
      badgeColor: 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300',
      icon: <MessageSquareHeart className="w-4 h-4 text-amber-500" />
    }
  ];

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 lg:hidden flex justify-end"
      aria-modal="true"
      role="dialog"
    >
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-200 animate-in fade-in"
      />

      {/* Drawer Canvas */}
      <div 
        className={`relative w-full max-w-xs sm:max-w-sm h-full flex flex-col justify-between shadow-2xl border-l z-10 overflow-y-auto animate-in slide-in-from-right duration-200 ${
          theme === 'escuro'
            ? 'bg-zinc-950 text-white border-zinc-800'
            : 'bg-white text-zinc-950 border-zinc-200'
        }`}
      >
        {/* Top Header */}
        <div>
          <div className={`p-4 border-b flex items-center justify-between ${
            theme === 'escuro' ? 'border-zinc-800' : 'border-zinc-100'
          }`}>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-white font-serif font-black text-sm shadow-sm">
                G
              </div>
              <div>
                <span className={`font-serif font-black text-sm tracking-tight block leading-none ${
                  theme === 'escuro' ? 'text-white' : 'text-zinc-950'
                }`}>
                  A GATA DA <span className="text-pink-500">MAKE</span>
                </span>
                <span className={`text-[9px] uppercase tracking-widest font-bold mt-0.5 block ${
                  theme === 'escuro' ? 'text-zinc-400' : 'text-zinc-500'
                }`}>
                  Menu de Navegação
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className={`p-2 rounded-full transition-colors ${
                theme === 'escuro'
                  ? 'bg-zinc-900 text-zinc-300 hover:text-white hover:bg-zinc-800'
                  : 'bg-zinc-100 text-zinc-700 hover:text-zinc-950 hover:bg-zinc-200'
              }`}
              aria-label="Fechar menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Cart Pill */}
          <div className={`p-3 border-b ${
            theme === 'escuro' ? 'bg-zinc-900/60 border-zinc-800' : 'bg-zinc-50 border-zinc-100'
          }`}>
            <button
              onClick={() => {
                onClose();
                setIsCartOpen(true);
              }}
              className="w-full py-2.5 px-3.5 rounded-xl bg-pink-500 hover:bg-pink-600 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-between shadow-sm transition-all active:scale-[0.98]"
            >
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-4 h-4" />
                <span>Abrir Sacola</span>
              </div>
              <div className="flex items-center gap-1.5 bg-black/30 px-2 py-0.5 rounded-full text-[10px]">
                <span className="font-black text-white">{totalItemsCount}</span>
                <span className="text-pink-100">itens</span>
              </div>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="p-3 space-y-1">
            <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 block ${
              theme === 'escuro' ? 'text-zinc-400' : 'text-zinc-500'
            }`}>
              Selecione a Seção
            </span>
            {navItems.map((item) => {
              const isSelected = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onSelectTab(item.id)}
                  className={`w-full p-2.5 rounded-xl flex items-center justify-between text-left text-xs font-bold transition-colors ${
                    isSelected
                      ? theme === 'escuro'
                        ? 'bg-white text-zinc-950 shadow-sm'
                        : 'bg-zinc-950 text-white shadow-sm'
                      : theme === 'escuro'
                        ? 'text-zinc-200 hover:bg-zinc-900'
                        : 'text-zinc-800 hover:bg-zinc-100'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className={`p-1.5 rounded-lg ${
                      isSelected
                        ? isSelected && theme === 'escuro' ? 'bg-zinc-100 text-pink-600' : 'bg-zinc-800 text-pink-400'
                        : theme === 'escuro' ? 'bg-zinc-900 text-pink-400' : 'bg-zinc-100 text-pink-500'
                    }`}>
                      {item.icon}
                    </div>
                    <span>{item.label}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {item.badge && !isSelected && (
                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${item.badgeColor}`}>
                        {item.badge}
                      </span>
                    )}
                    <ChevronRight className={`w-3.5 h-3.5 ${
                      isSelected ? 'opacity-90' : 'opacity-40'
                    }`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Theme Toggle (Light / Dark) */}
          <div className={`p-3 mx-3 my-2 rounded-2xl border space-y-2 ${
            theme === 'escuro' ? 'bg-zinc-900/60 border-zinc-800' : 'bg-zinc-50 border-zinc-200'
          }`}>
            <div className={`flex items-center justify-between text-[10px] font-bold uppercase tracking-widest ${
              theme === 'escuro' ? 'text-zinc-300' : 'text-zinc-700'
            }`}>
              <span>Aparência / Tema:</span>
              <span className="text-pink-500 font-black">{theme === 'escuro' ? 'Escuro' : 'Claro'}</span>
            </div>
            
            <button
              onClick={toggleTheme}
              className={`w-full py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 border ${
                theme === 'escuro'
                  ? 'bg-zinc-800 border-zinc-700 text-yellow-300 hover:bg-zinc-700'
                  : 'bg-white border-zinc-300 text-zinc-900 hover:bg-zinc-100'
              }`}
            >
              {theme === 'escuro' ? (
                <>
                  <Sun className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span>Mudar para Tema Claro</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-zinc-900 fill-zinc-900" />
                  <span>Mudar para Tema Escuro</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Footer & Direct Contact Actions */}
        <div className={`p-4 border-t space-y-3 ${
          theme === 'escuro' ? 'bg-zinc-950 border-zinc-800' : 'bg-zinc-50 border-zinc-200'
        }`}>
          {/* WhatsApp Direct CTA */}
          <a
            href={`https://wa.me/${STORE_INFO.phoneRaw}?text=${encodeURIComponent(STORE_INFO.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
          >
            <Phone className="w-4 h-4" />
            <span>Chamar no WhatsApp</span>
          </a>

          {/* Quick Location & Schedule */}
          <div className={`text-[11px] space-y-1 px-1 ${
            theme === 'escuro' ? 'text-zinc-400' : 'text-zinc-600'
          }`}>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-pink-500 shrink-0" />
              <span className="truncate">R. das Pedras, 326 - Zona Norte, SP</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px]">
              <Clock className="w-3 h-3 text-zinc-400 shrink-0" />
              <span>Seg à Sáb: 09h às 19h30</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
