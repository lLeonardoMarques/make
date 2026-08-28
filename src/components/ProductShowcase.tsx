import React, { useState, useMemo } from 'react';
import { Sparkles } from 'lucide-react';
import { Product, ProductCategory } from '../types';
import { PRODUCTS_DATA } from '../data/mockData';
import { ProductCard } from './ProductCard';
import { CategoryFilterBar } from './CategoryFilterBar';
import { useTheme } from '../context/ThemeContext';

interface ProductShowcaseProps {
  onQuickView: (product: Product) => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({ onQuickView }) => {
  const { theme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'populares' | 'menor-preco' | 'maior-preco' | 'maior-desconto'>('populares');

  const categories: { id: ProductCategory; label: string; icon: string }[] = [
    { id: 'todos', label: 'Todas as Makes', icon: '✨' },
    { id: 'promocoes', label: 'Em Promoção', icon: '🔥' },
    { id: 'labios', label: 'Batom & Gloss', icon: '💄' },
    { id: 'rosto', label: 'Bases & Pele', icon: '🌸' },
    { id: 'olhos', label: 'Sombras & Delineador', icon: '👁️' },
    { id: 'pinceis', label: 'Pincéis & Esponjas', icon: '🖌️' },
    { id: 'skincare', label: 'Skincare & Brumas', icon: '💧' },
    { id: 'combos', label: 'Combos & Kits', icon: '🎁' }
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((product) => {
      // Category filter
      if (selectedCategory === 'promocoes') {
        if (!product.isPromotion && !product.discountPercent) return false;
      } else if (selectedCategory !== 'todos' && product.category !== selectedCategory) {
        return false;
      }

      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesBrand = product.brand.toLowerCase().includes(query);
        const matchesDesc = product.description.toLowerCase().includes(query);
        if (!matchesName && !matchesBrand && !matchesDesc) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'menor-preco') return a.price - b.price;
      if (sortBy === 'maior-preco') return b.price - a.price;
      if (sortBy === 'maior-desconto') return (b.discountPercent || 0) - (a.discountPercent || 0);
      return b.rating - a.rating; // populares
    });
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <section id="produtos" className="py-8 sm:py-12 relative animate-in fade-in duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full font-bold text-[10px] uppercase tracking-widest border ${
            theme === 'escuro'
              ? 'bg-pink-950/80 text-pink-300 border-pink-900/60'
              : 'bg-pink-50 text-pink-700 border-pink-200'
          }`}>
            <Sparkles className="w-3.5 h-3.5 text-pink-500" />
            <span>Catálogo Completo de Beleza</span>
          </div>
          <h2 className={`font-serif font-black text-2xl sm:text-4xl tracking-tight ${
            theme === 'escuro' ? 'text-white' : 'text-zinc-950'
          }`}>
            Vitrine Exclusiva <span className="text-pink-500">A Gata da Make</span>
          </h2>
          <p className={`text-xs sm:text-sm font-medium ${
            theme === 'escuro' ? 'text-zinc-300' : 'text-zinc-700'
          }`}>
            Encontre a maquiagem perfeita para o seu estilo com envio expresso ou retirada rápida na Zona Norte de São Paulo.
          </p>
        </div>

        {/* Modular Category Filter & Search Bar */}
        <CategoryFilterBar
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          sortBy={sortBy}
          onSortChange={setSortBy}
          totalResultsCount={filteredProducts.length}
        />

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className={`text-center py-16 rounded-3xl border p-8 space-y-3 ${
            theme === 'escuro' ? 'bg-zinc-900 border-zinc-800 text-white' : 'bg-white border-zinc-200 text-zinc-950'
          }`}>
            <div className="text-3xl">💄</div>
            <h3 className="font-serif font-black text-lg">
              Nenhum produto encontrado
            </h3>
            <p className={`text-xs max-w-sm mx-auto ${
              theme === 'escuro' ? 'text-zinc-400' : 'text-zinc-600'
            }`}>
              Não encontramos resultados para sua busca. Tente palavras como "base", "batom", "blush" ou limpe os filtros.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('todos');
              }}
              className="px-4 py-2 rounded-full bg-pink-500 text-white text-xs font-bold uppercase tracking-wider hover:bg-pink-600 transition-colors"
            >
              Limpar Filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={onQuickView}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
