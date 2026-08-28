import React, { useState } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { CartProvider } from './context/CartContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PromoSection } from './components/PromoSection';
import { ProductShowcase } from './components/ProductShowcase';
import { GallerySection } from './components/GallerySection';
import { BeautyQuiz } from './components/BeautyQuiz';
import { StoreLocation } from './components/StoreLocation';
import { ReviewsSection } from './components/ReviewsSection';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { Product, NavTab } from './types';
import { ShoppingBag, Sparkles, Percent, MapPin, Camera, Star, ArrowRight } from 'lucide-react';
import { PRODUCTS_DATA } from './data/mockData';
import { ProductCard } from './components/ProductCard';

function MainContent() {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState<NavTab>('inicio');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const handleSelectTab = (tab: NavTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const featuredTopPicks = PRODUCTS_DATA.filter(p => p.isBestSeller || p.isPromotion).slice(0, 4);

  return (
    <div className={`min-h-screen flex flex-col relative transition-colors duration-200 selection:bg-pink-500 selection:text-white ${
      theme === 'escuro' ? 'bg-black text-white' : 'bg-white text-zinc-950'
    }`}>
      {/* Main Navigation Header */}
      <Header activeTab={activeTab} onSelectTab={handleSelectTab} />

      {/* Main Content Rendered strictly by Tab (No long scrolling) */}
      <main className="flex-1">
        {activeTab === 'inicio' && (
          <div className="space-y-6 sm:space-y-10 animate-in fade-in duration-200">
            {/* Hero Welcome Section */}
            <Hero onNavigate={handleSelectTab} />

            {/* Quick Highlights Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 space-y-6">
              <div className={`flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b pb-4 ${
                theme === 'escuro' ? 'border-zinc-800' : 'border-zinc-200'
              }`}>
                <div>
                  <div className="flex items-center gap-1.5 text-pink-500 text-xs font-bold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Destaques da Loja</span>
                  </div>
                  <h2 className={`font-serif font-black text-2xl sm:text-3xl ${
                    theme === 'escuro' ? 'text-white' : 'text-zinc-950'
                  }`}>
                    Mais Desejados da Semana
                  </h2>
                </div>

                <button
                  onClick={() => handleSelectTab('produtos')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-pink-500 hover:text-pink-600 transition-colors uppercase tracking-wider"
                >
                  <span>Ver Todos os Produtos</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* 4 Featured Products Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                {featuredTopPicks.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onQuickView={(prod) => setQuickViewProduct(prod)}
                  />
                ))}
              </div>

              {/* Quick Navigation Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <button
                  onClick={() => handleSelectTab('promocoes')}
                  className={`p-4 rounded-2xl border text-left flex items-center justify-between group transition-all ${
                    theme === 'escuro'
                      ? 'bg-zinc-900 border-zinc-800 hover:border-pink-500'
                      : 'bg-zinc-50 border-zinc-200 hover:border-pink-500'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-rose-500 font-bold text-xs">
                      <Percent className="w-4 h-4" />
                      <span>Cupons & Ofertas</span>
                    </div>
                    <p className={`text-xs font-medium ${
                      theme === 'escuro' ? 'text-zinc-300' : 'text-zinc-700'
                    }`}>
                      Até 30% OFF e cupons exclusivos
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-pink-500 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => handleSelectTab('quiz')}
                  className={`p-4 rounded-2xl border text-left flex items-center justify-between group transition-all ${
                    theme === 'escuro'
                      ? 'bg-zinc-900 border-zinc-800 hover:border-pink-500'
                      : 'bg-zinc-50 border-zinc-200 hover:border-pink-500'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-pink-500 font-bold text-xs">
                      <Sparkles className="w-4 h-4" />
                      <span>Quiz da Make Ideal</span>
                    </div>
                    <p className={`text-xs font-medium ${
                      theme === 'escuro' ? 'text-zinc-300' : 'text-zinc-700'
                    }`}>
                      Descubra o combo perfeito para você
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-pink-500 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => handleSelectTab('localizacao')}
                  className={`p-4 rounded-2xl border text-left flex items-center justify-between group transition-all ${
                    theme === 'escuro'
                      ? 'bg-zinc-900 border-zinc-800 hover:border-pink-500'
                      : 'bg-zinc-50 border-zinc-200 hover:border-pink-500'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-emerald-500 font-bold text-xs">
                      <MapPin className="w-4 h-4" />
                      <span>Loja Física & Retirada</span>
                    </div>
                    <p className={`text-xs font-medium ${
                      theme === 'escuro' ? 'text-zinc-300' : 'text-zinc-700'
                    }`}>
                      Rua das Pedras, 326 (Zona Norte)
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-pink-500 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'produtos' && (
          <ProductShowcase onQuickView={(prod) => setQuickViewProduct(prod)} />
        )}

        {activeTab === 'promocoes' && (
          <PromoSection onQuickViewProduct={(prod) => setQuickViewProduct(prod)} />
        )}

        {activeTab === 'galeria' && (
          <GallerySection />
        )}

        {activeTab === 'quiz' && (
          <BeautyQuiz onQuickViewProduct={(prod) => setQuickViewProduct(prod)} />
        )}

        {activeTab === 'localizacao' && (
          <StoreLocation />
        )}

        {activeTab === 'avaliacoes' && (
          <ReviewsSection />
        )}
      </main>

      {/* Footer with quick tab links and dual theme switcher */}
      <Footer onSelectTab={handleSelectTab} />

      {/* Floating WhatsApp Action */}
      <FloatingWhatsApp />

      {/* Shopping Cart Drawer */}
      <CartDrawer />

      {/* Detailed Product Quick View Modal */}
      <ProductModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <MainContent />
      </CartProvider>
    </ThemeProvider>
  );
}
