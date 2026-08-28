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
  Clock, 
  ArrowRight, 
  Eye, 
  Brush, 
  Droplet, 
  Palette,
  HeartHandshake
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
      {/* Top Notification Bar - Versão Responsiva */}
      <div className={
        theme === 'escuro' 
          ? 'bg-black text-white text-xs py-1.5 px-3 border-b border-zinc-900' 
          : 'bg-zinc-950 text-white text-xs py-1.5 px-3 border-b border-zinc-800'
      }>
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-1.5">
          {/* Oferta - Sempre visível */}
          <div className="flex items-center gap-1.5 mx-auto sm:mx-0 font-medium">
            <span className="bg-pink-500 text-white px-1.5 py-0.5 rounded-full text-[8px] sm:text-[9px] uppercase font-black tracking-widest whitespace-nowrap">
              OFERTA
            </span>
            <span className="text-[10px] sm:text-[11px] text-zinc-200 truncate max-w-[140px] sm:max-w-none">
              Cupom <strong className="text-pink-400 font-bold">GATAMAKE10</strong>
              <span className="hidden xs:inline"> para 10% OFF na primeira compra!</span>
            </span>
          </div>

          {/* Info - Escondido em telas menores */}
          <div className="hidden md:flex items-center gap-3 text-[10px] text-zinc-300 font-semibold uppercase tracking-wider">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-pink-500" />
              <span className="hidden lg:inline">R. das Pedras, 326 - Zona Norte SP</span>
              <span className="lg:hidden">ZN • SP</span>
            </span>
            <span className="text-zinc-600">•</span>
            <a 
              href={`https://wa.me/${STORE_INFO.phoneRaw}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-zinc-200 hover:text-pink-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden xl:inline">{STORE_INFO.phoneFormatted}</span>
              <span className="xl:hidden">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`backdrop-blur-md border-b transition-colors duration-200 ${
        theme === 'escuro' 
          ? 'bg-zinc-950/95 border-zinc-800 text-white' 
          : 'bg-white/95 border-zinc-200 text-zinc-950'
      }`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-1.5 sm:gap-3">
          
          {/* Brand Logo - Otimizado para mobile */}
          <button 
            onClick={() => onSelectTab('inicio')}
            className="flex items-center gap-2 sm:gap-3 group focus:outline-none text-left shrink-0 min-w-0"
            title="Ir para o início"
          >
            <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center font-serif font-black text-sm sm:text-base shadow-sm transition-all duration-300 group-hover:scale-105 ${
              theme === 'escuro'
                ? 'bg-gradient-to-br from-pink-500 to-rose-600 text-white shadow-pink-500/20'
                : 'bg-zinc-950 text-white border border-pink-500/30'
            }`}>
              G
            </div>
            
            <div className="flex items-center gap-1.5">
              <div className="flex items-center whitespace-nowrap">
                <span className={`font-serif font-black text-sm sm:text-base lg:text-xl tracking-tight leading-none ${
                  theme === 'escuro' ? 'text-white' : 'text-zinc-950'
                }`}>
                  <span className="hidden xxs:inline">A GATA DA </span>
                  <span className="text-pink-500">MAKE</span>
                </span>
              </div>
              
              <span className={`hidden xl:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest border whitespace-nowrap ${
                theme === 'escuro'
                  ? 'bg-zinc-900 border-zinc-800 text-pink-400'
                  : 'bg-pink-50 border-pink-200 text-pink-700'
              }`}>
                ZN • SP
              </span>
            </div>
          </button>

          {/* Desktop Navigation - Escondido em mobile e tablets */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 text-xs font-bold uppercase tracking-wider">
            
            {/* 1. INÍCIO */}
            <div className="relative group">
              <button
                onClick={() => onSelectTab('inicio')}
                className={`px-2.5 xl:px-3 py-2 rounded-full flex items-center gap-1 transition-all text-xs font-bold ${
                  activeTab === 'inicio'
                    ? theme === 'escuro'
                      ? 'bg-white text-zinc-950 shadow-sm'
                      : 'bg-zinc-950 text-white shadow-sm'
                    : theme === 'escuro'
                      ? 'text-zinc-300 hover:text-white hover:bg-zinc-900'
                      : 'text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100'
                }`}
              >
                <Home className="w-3.5 h-3.5" />
                <span className="hidden xl:inline">Início</span>
              </button>
            </div>

            {/* 2. VITRINE - Versão compacta */}
            <div className="relative group">
              <button
                onClick={() => onSelectTab('produtos', 'todos')}
                className={`px-2.5 xl:px-3 py-2 rounded-full flex items-center gap-1 transition-all text-xs font-bold ${
                  activeTab === 'produtos'
                    ? theme === 'escuro'
                      ? 'bg-white text-zinc-950 shadow-sm'
                      : 'bg-zinc-950 text-white shadow-sm'
                    : theme === 'escuro'
                      ? 'text-zinc-300 hover:text-white hover:bg-zinc-900'
                      : 'text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100'
                }`}
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span className="hidden xl:inline">Vitrine</span>
                <ChevronDown className="w-3 h-3 opacity-60 group-hover:rotate-180 transition-transform duration-200" />
              </button>

              {/* Submenu Dropdown - Ajustado para telas grandes */}
              <div className="absolute top-full left-0 pt-2 w-72 xl:w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-out transform translate-y-1 group-hover:translate-y-0 z-50">
                <div className={`rounded-2xl border p-3 shadow-2xl backdrop-blur-xl ${
                  theme === 'escuro'
                    ? 'bg-zinc-950/98 border-zinc-800 text-white'
                    : 'bg-white/98 border-zinc-200 text-zinc-950'
                }`}>
                  {/* ... conteúdo do submenu mantido igual ... */}
                  <div className="px-2 py-1.5 mb-1.5 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-widest text-pink-500">
                      Categorias de Makes
                    </span>
                    <span className="text-[9px] text-zinc-400 font-semibold lowercase">
                      pronta entrega
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-1">
                    {/* ... categorias mantidas ... */}
                    <button
                      onClick={() => onSelectTab('produtos', 'labios')}
                      className={`w-full p-2 rounded-xl text-left flex items-center gap-2.5 transition-colors ${
                        theme === 'escuro' ? 'hover:bg-zinc-900 text-zinc-200 hover:text-white' : 'hover:bg-pink-50/60 text-zinc-800 hover:text-zinc-950'
                      }`}
                    >
                      <div className="w-7 h-7 rounded-lg bg-pink-100 dark:bg-pink-950/80 text-pink-600 dark:text-pink-400 flex items-center justify-center shrink-0">
                        <Palette className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="font-bold text-xs block normal-case">Batons & Gloss</span>
                        <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-medium block normal-case">Matte, cremosos e liptints</span>
                      </div>
                    </button>

                    <button
                      onClick={() => onSelectTab('produtos', 'rosto')}
                      className={`w-full p-2 rounded-xl text-left flex items-center gap-2.5 transition-colors ${
                        theme === 'escuro' ? 'hover:bg-zinc-900 text-zinc-200 hover:text-white' : 'hover:bg-pink-50/60 text-zinc-800 hover:text-zinc-950'
                      }`}
                    >
                      <div className="w-7 h-7 rounded-lg bg-rose-100 dark:bg-rose-950/80 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0">
                        <Sparkles className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="font-bold text-xs block normal-case">Bases & Preparação</span>
                        <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-medium block normal-case">Bases, corretivos e pó</span>
                      </div>
                    </button>

                    <button
                      onClick={() => onSelectTab('produtos', 'olhos')}
                      className={`w-full p-2 rounded-xl text-left flex items-center gap-2.5 transition-colors ${
                        theme === 'escuro' ? 'hover:bg-zinc-900 text-zinc-200 hover:text-white' : 'hover:bg-pink-50/60 text-zinc-800 hover:text-zinc-950'
                      }`}
                    >
                      <div className="w-7 h-7 rounded-lg bg-purple-100 dark:bg-purple-950/80 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                        <Eye className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="font-bold text-xs block normal-case">Olhos & Sombras</span>
                        <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-medium block normal-case">Paletas e máscaras</span>
                      </div>
                    </button>

                    <button
                      onClick={() => onSelectTab('produtos', 'pinceis')}
                      className={`w-full p-2 rounded-xl text-left flex items-center gap-2.5 transition-colors ${
                        theme === 'escuro' ? 'hover:bg-zinc-900 text-zinc-200 hover:text-white' : 'hover:bg-pink-50/60 text-zinc-800 hover:text-zinc-950'
                      }`}
                    >
                      <div className="w-7 h-7 rounded-lg bg-amber-100 dark:bg-amber-950/80 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                        <Brush className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="font-bold text-xs block normal-case">Pincéis & Acessórios</span>
                        <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-medium block normal-case">Kits completos</span>
                      </div>
                    </button>

                    <button
                      onClick={() => onSelectTab('produtos', 'skincare')}
                      className={`w-full p-2 rounded-xl text-left flex items-center gap-2.5 transition-colors ${
                        theme === 'escuro' ? 'hover:bg-zinc-900 text-zinc-200 hover:text-white' : 'hover:bg-pink-50/60 text-zinc-800 hover:text-zinc-950'
                      }`}
                    >
                      <div className="w-7 h-7 rounded-lg bg-sky-100 dark:bg-sky-950/80 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                        <Droplet className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="font-bold text-xs block normal-case">Skincare & Brumas</span>
                        <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-medium block normal-case">Séruns e hidratantes</span>
                      </div>
                    </button>

                    <button
                      onClick={() => onSelectTab('produtos', 'combos')}
                      className={`w-full p-2 rounded-xl text-left flex items-center gap-2.5 transition-colors ${
                        theme === 'escuro' ? 'hover:bg-zinc-900 text-zinc-200 hover:text-white' : 'hover:bg-pink-50/60 text-zinc-800 hover:text-zinc-950'
                      }`}
                    >
                      <div className="w-7 h-7 rounded-lg bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                        <Gift className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="font-bold text-xs block normal-case">Combos & Kits</span>
                        <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-medium block normal-case">Presenteie com o kit perfeito</span>
                      </div>
                    </button>
                  </div>

                  <div className="mt-2 pt-2 border-t border-zinc-200 dark:border-zinc-800">
                    <button
                      onClick={() => onSelectTab('produtos', 'todos')}
                      className="w-full py-1.5 px-2 rounded-lg bg-pink-500 hover:bg-pink-600 text-white font-bold text-[10px] uppercase tracking-wider flex items-center justify-center gap-1 transition-colors"
                    >
                      <span>Ver Toda a Vitrine</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. PROMOÇÕES - Versão compacta */}
            <div className="relative group">
              <button
                onClick={() => onSelectTab('promocoes')}
                className={`px-2.5 xl:px-3 py-2 rounded-full flex items-center gap-1 transition-all text-xs font-bold ${
                  activeTab === 'promocoes'
                    ? theme === 'escuro'
                      ? 'bg-white text-zinc-950 shadow-sm'
                      : 'bg-zinc-950 text-white shadow-sm'
                    : theme === 'escuro'
                      ? 'text-zinc-300 hover:text-white hover:bg-zinc-900'
                      : 'text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100'
                }`}
              >
                <Percent className="w-3.5 h-3.5 text-rose-500" />
                <span className="hidden xl:inline">Promoções</span>
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                <ChevronDown className="w-3 h-3 opacity-60 group-hover:rotate-180 transition-transform duration-200" />
              </button>

              {/* Submenu Dropdown */}
              <div className="absolute top-full left-0 pt-2 w-64 xl:w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-out transform translate-y-1 group-hover:translate-y-0 z-50">
                <div className={`rounded-2xl border p-3 shadow-2xl backdrop-blur-xl ${
                  theme === 'escuro'
                    ? 'bg-zinc-950/98 border-zinc-800 text-white'
                    : 'bg-white/98 border-zinc-200 text-zinc-950'
                }`}>
                  <div className="px-2 py-1.5 mb-1.5 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-widest text-rose-500 flex items-center gap-1">
                      <Flame className="w-3 h-3" />
                      Descontos Ativos
                    </span>
                  </div>

                  <div className="space-y-1">
                    <button
                      onClick={() => onSelectTab('promocoes')}
                      className={`w-full p-2 rounded-xl text-left flex items-start gap-2.5 transition-colors ${
                        theme === 'escuro' ? 'hover:bg-zinc-900 text-zinc-200' : 'hover:bg-rose-50 text-zinc-800'
                      }`}
                    >
                      <Tag className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-xs block normal-case">Cupom: GATAMAKE10</span>
                        <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-medium block normal-case">10% OFF em qualquer pedido</span>
                      </div>
                    </button>

                    <button
                      onClick={() => onSelectTab('promocoes')}
                      className={`w-full p-2 rounded-xl text-left flex items-start gap-2.5 transition-colors ${
                        theme === 'escuro' ? 'hover:bg-zinc-900 text-zinc-200' : 'hover:bg-rose-50 text-zinc-800'
                      }`}
                    >
                      <Flame className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-xs block normal-case">Cupom: GATAVIP</span>
                        <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-medium block normal-case">15% OFF acima de R$ 150</span>
                      </div>
                    </button>

                    <button
                      onClick={() => onSelectTab('promocoes')}
                      className={`w-full p-2 rounded-xl text-left flex items-start gap-2.5 transition-colors ${
                        theme === 'escuro' ? 'hover:bg-zinc-900 text-zinc-200' : 'hover:bg-rose-50 text-zinc-800'
                      }`}
                    >
                      <Gift className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-xs block normal-case">Cupom: GANHEBRINDE</span>
                        <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-medium block normal-case">1x Esponja Soft Grátis</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. ESPAÇO & FOTOS - Versão compacta */}
            <div className="relative group">
              <button
                onClick={() => onSelectTab('galeria')}
                className={`px-2.5 xl:px-3 py-2 rounded-full flex items-center gap-1 transition-all text-xs font-bold ${
                  activeTab === 'galeria'
                    ? theme === 'escuro'
                      ? 'bg-white text-zinc-950 shadow-sm'
                      : 'bg-zinc-950 text-white shadow-sm'
                    : theme === 'escuro'
                      ? 'text-zinc-300 hover:text-white hover:bg-zinc-900'
                      : 'text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100'
                }`}
              >
                <Camera className="w-3.5 h-3.5" />
                <span className="hidden xl:inline">Espaço & Fotos</span>
                <ChevronDown className="w-3 h-3 opacity-60 group-hover:rotate-180 transition-transform duration-200" />
              </button>

              <div className="absolute top-full left-0 pt-2 w-56 xl:w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-out transform translate-y-1 group-hover:translate-y-0 z-50">
                <div className={`rounded-2xl border p-3 shadow-2xl backdrop-blur-xl ${
                  theme === 'escuro'
                    ? 'bg-zinc-950/98 border-zinc-800 text-white'
                    : 'bg-white/98 border-zinc-200 text-zinc-950'
                }`}>
                  <div className="space-y-1">
                    <button
                      onClick={() => onSelectTab('galeria')}
                      className={`w-full p-2 rounded-xl text-left flex items-center gap-2.5 transition-colors ${
                        theme === 'escuro' ? 'hover:bg-zinc-900 text-zinc-200' : 'hover:bg-pink-50 text-zinc-800'
                      }`}
                    >
                      <Camera className="w-4 h-4 text-pink-500 shrink-0" />
                      <div>
                        <span className="font-bold text-xs block normal-case">Fotos da Loja</span>
                        <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-medium block normal-case">Ambiente instagramável</span>
                      </div>
                    </button>

                    <button
                      onClick={() => onSelectTab('galeria')}
                      className={`w-full p-2 rounded-xl text-left flex items-center gap-2.5 transition-colors ${
                        theme === 'escuro' ? 'hover:bg-zinc-900 text-zinc-200' : 'hover:bg-pink-50 text-zinc-800'
                      }`}
                    >
                      <Sparkles className="w-4 h-4 text-purple-500 shrink-0" />
                      <div>
                        <span className="font-bold text-xs block normal-case">Espaço Provador</span>
                        <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-medium block normal-case">Teste os produtos na loja</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. QUIZ DA MAKE - Ícone apenas em telas médias */}
            <div className="relative group">
              <button
                onClick={() => onSelectTab('quiz')}
                className={`px-2.5 xl:px-3 py-2 rounded-full flex items-center gap-1 transition-all text-xs font-bold ${
                  activeTab === 'quiz'
                    ? theme === 'escuro'
                      ? 'bg-white text-zinc-950 shadow-sm'
                      : 'bg-zinc-950 text-white shadow-sm'
                    : theme === 'escuro'
                      ? 'text-zinc-300 hover:text-white hover:bg-zinc-900'
                      : 'text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-pink-500" />
                <span className="hidden xl:inline">Quiz da Make</span>
              </button>
            </div>

            {/* 6. LOCALIZAÇÃO - Ícone apenas */}
            <div className="relative group">
              <button
                onClick={() => onSelectTab('localizacao')}
                className={`px-2.5 xl:px-3 py-2 rounded-full flex items-center gap-1 transition-all text-xs font-bold ${
                  activeTab === 'localizacao'
                    ? theme === 'escuro'
                      ? 'bg-white text-zinc-950 shadow-sm'
                      : 'bg-zinc-950 text-white shadow-sm'
                    : theme === 'escuro'
                      ? 'text-zinc-300 hover:text-white hover:bg-zinc-900'
                      : 'text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100'
                }`}
              >
                <Compass className="w-3.5 h-3.5" />
                <span className="hidden xl:inline">Localização</span>
              </button>
            </div>

            {/* 7. AVALIAÇÕES - Ícone apenas */}
            <div className="relative group">
              <button
                onClick={() => onSelectTab('avaliacoes')}
                className={`px-2.5 xl:px-3 py-2 rounded-full flex items-center gap-1 transition-all text-xs font-bold ${
                  activeTab === 'avaliacoes'
                    ? theme === 'escuro'
                      ? 'bg-white text-zinc-950 shadow-sm'
                      : 'bg-zinc-950 text-white shadow-sm'
                    : theme === 'escuro'
                      ? 'text-zinc-300 hover:text-white hover:bg-zinc-900'
                      : 'text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100'
                }`}
              >
                <MessageSquareHeart className="w-3.5 h-3.5 text-amber-500" />
                <span className="hidden xl:inline">Avaliações</span>
              </button>
            </div>
          </nav>

          {/* Action Tools - Otimizado para mobile */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            
            {/* Theme Toggle */}
            <ThemeSelector />

            {/* Direct WhatsApp - Escondido em telas muito pequenas */}
            <a
              href={`https://wa.me/${STORE_INFO.phoneRaw}?text=${encodeURIComponent(STORE_INFO.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1 px-2.5 sm:px-3 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-wider shadow-sm transition-all active:scale-95"
              title="Atendimento via WhatsApp"
            >
              <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span className="hidden xxs:inline">WhatsApp</span>
            </a>

            {/* Shopping Bag Button - Tamanho ajustado */}
            <button
              onClick={() => setIsCartOpen(true)}
              className={`relative px-2.5 sm:px-3.5 py-2 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider shadow-sm transition-all active:scale-95 flex items-center gap-1 sm:gap-1.5 ${
                theme === 'escuro'
                  ? 'bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 text-white'
                  : 'bg-zinc-950 hover:bg-zinc-800 text-white'
              }`}
              aria-label="Abrir Sacola de Compras"
            >
              <ShoppingBag className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-pink-400" />
              <span className="hidden xs:inline">Sacola</span>
              <span className="bg-pink-500 text-white text-[8px] sm:text-[9px] font-black px-1.5 py-0.2 rounded-full min-w-[1rem] sm:min-w-[1.1rem] text-center leading-tight">
                {totalItemsCount}
              </span>
            </button>

            {/* Mobile Menu Button - Ajustado */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={`lg:hidden p-1.5 sm:p-2 rounded-full border transition-colors ${
                theme === 'escuro'
                  ? 'border-zinc-800 text-white hover:bg-zinc-900'
                  : 'border-zinc-200 text-zinc-950 hover:bg-zinc-100'
              }`}
              aria-label="Abrir menu mobile"
            >
              <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
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