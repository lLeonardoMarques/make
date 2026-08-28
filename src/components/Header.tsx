import React, { useState } from 'react';
import { 
  Sparkles, 
  ShoppingBag, 
  Phone, 
  MapPin, 
  Menu, 
  Percent, 
  Camera, 
  Compass, 
  Home, 
  MessageSquareHeart, 
  ChevronDown, 
  Flame, 
  Gift, 
  Tag, 
  ArrowRight, 
  Eye, 
  Brush, 
  Droplet, 
  Palette
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';
import { STORE_INFO } from '../data/mockData';
import { MobileMenu } from './MobileMenu';
import { ThemeSelector } from './ThemeSelector';
import { NavTab, ProductCategory } from '../types';

interface HeaderProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab, category?: ProductCategory) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, onSelectTab }) => {
  const { theme } = useTheme();
  const { totalItemsCount, setIsCartOpen } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full transition-colors duration-200">
      {/* Top Notification Bar - Minimalista */}
      <div className={
        theme === 'escuro' 
          ? 'bg-black/90 text-white text-xs py-1 px-3 sm:px-4 border-b border-zinc-800/50' 
          : 'bg-zinc-950/90 text-white text-xs py-1 px-3 sm:px-4 border-b border-zinc-200/50'
      }>
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            <span className="bg-pink-500/90 text-white px-2 py-0.5 rounded-full text-[8px] font-bold tracking-wider">
              ✦ 10% OFF
            </span>
            <span className="text-[10px] text-zinc-300 font-medium">
              Use <strong className="text-pink-400">GATAMAKE10</strong>
              <span className="hidden xs:inline"> na primeira compra</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-3 text-[10px] text-zinc-400 font-medium">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-pink-400" />
              <span className="hidden lg:inline">R. das Pedras, 326 - Zona Norte SP</span>
              <span className="lg:hidden">ZN • SP</span>
            </span>
            <span className="text-zinc-600">|</span>
            <a 
              href={`https://wa.me/${STORE_INFO.phoneRaw}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-zinc-300 hover:text-pink-400 transition-colors"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span className="hidden xl:inline">{STORE_INFO.phoneFormatted}</span>
              <span className="xl:hidden">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar - Minimalista */}
      <div className={`backdrop-blur-md border-b transition-colors duration-200 ${
        theme === 'escuro' 
          ? 'bg-zinc-950/90 border-zinc-800/50 text-white' 
          : 'bg-white/90 border-zinc-200/50 text-zinc-950'
      }`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-2">
          
          {/* Brand - Minimalista e elegante */}
          <button 
            onClick={() => onSelectTab('inicio')}
            className="flex items-center gap-2 sm:gap-3 group focus:outline-none shrink-0"
          >
            <div className={`w-8 h-8 sm:w-9 lg:w-10 lg:h-10 rounded-full flex items-center justify-center font-serif font-bold text-sm sm:text-base transition-all duration-300 group-hover:scale-105 ${
              theme === 'escuro'
                ? 'bg-pink-500 text-white shadow-lg shadow-pink-500/20'
                : 'bg-pink-500 text-white shadow-lg shadow-pink-500/20'
            }`}>
              ✦
            </div>
            
            <div className="flex items-center">
              <span className={`font-serif font-bold text-sm sm:text-base lg:text-lg tracking-tight ${
                theme === 'escuro' ? 'text-white' : 'text-zinc-950'
              }`}>
                <span className="text-WHITE-500">A GATA DA </span>
                <span className="text-pink-500">MAKE</span>
              </span>
            </div>
          </button>

          {/* Desktop Navigation - Ícones minimalistas */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {[
              { id: 'inicio', icon: Home, label: 'Início' },
              { id: 'produtos', icon: ShoppingBag, label: 'Vitrine', hasDropdown: true },
              { id: 'promocoes', icon: Percent, label: 'Promoções', hasDropdown: true },
              { id: 'galeria', icon: Camera, label: 'Fotos', hasDropdown: true },
              { id: 'quiz', icon: Sparkles, label: 'Quiz' },
              { id: 'localizacao', icon: Compass, label: 'Local' },
              { id: 'avaliacoes', icon: MessageSquareHeart, label: 'Avaliações' },
            ].map((item) => (
              <div key={item.id} className="relative group">
                <button
                  onClick={() => onSelectTab(item.id as NavTab)}
                  className={`px-2.5 xl:px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-all text-[11px] font-medium ${
                    activeTab === item.id
                      ? theme === 'escuro'
                        ? 'bg-white/10 text-white'
                        : 'bg-zinc-100 text-zinc-950'
                      : theme === 'escuro'
                        ? 'text-zinc-400 hover:text-white hover:bg-white/5'
                        : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="hidden xl:inline">{item.label}</span>
                  {item.hasDropdown && (
                    <ChevronDown className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                  )}
                </button>
              </div>
            ))}
          </nav>

          {/* Ações - Minimalistas */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            <ThemeSelector />

            <a
              href={`https://wa.me/${STORE_INFO.phoneRaw}?text=${encodeURIComponent(STORE_INFO.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-medium transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden xxs:inline">WhatsApp</span>
            </a>

            <button
              onClick={() => setIsCartOpen(true)}
              className={`relative px-3 py-1.5 rounded-full text-[10px] font-medium transition-all flex items-center gap-1.5 ${
                theme === 'escuro'
                  ? 'hover:bg-white/5 text-white'
                  : 'hover:bg-zinc-100 text-zinc-950'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden xs:inline">Sacola</span>
              <span className="bg-pink-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full min-w-[1.2rem] text-center">
                {totalItemsCount}
              </span>
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={`lg:hidden p-1.5 rounded-lg transition-colors ${
                theme === 'escuro'
                  ? 'hover:bg-white/5 text-white'
                  : 'hover:bg-zinc-100 text-zinc-950'
              }`}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        activeTab={activeTab}
        onClose={() => setIsMobileMenuOpen(false)}
        onSelectTab={(tab, cat) => {
          onSelectTab(tab, cat);
          setIsMobileMenuOpen(false);
        }}
      />
    </header>
  );
};