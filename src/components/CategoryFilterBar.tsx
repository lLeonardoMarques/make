import React from 'react';
import { Search, X, ArrowUpDown } from 'lucide-react';
import { ProductCategory } from '../types';
import { useTheme } from '../context/ThemeContext';

interface CategoryFilterBarProps {
  categories: { id: ProductCategory; label: string; icon: string }[];
  selectedCategory: ProductCategory;
  onSelectCategory: (cat: ProductCategory) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortBy: 'populares' | 'menor-preco' | 'maior-preco' | 'maior-desconto';
  onSortChange: (sort: 'populares' | 'menor-preco' | 'maior-preco' | 'maior-desconto') => void;
  totalResultsCount: number;
}

export const CategoryFilterBar: React.FC<CategoryFilterBarProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  totalResultsCount
}) => {
  const { theme } = useTheme();

  return (
    <div className="space-y-3">
      {/* Search Input and Sort Selection Row */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        {/* Search Input */}
        <div className="relative flex-1 max-w-lg">
          <Search className="w-4 h-4 text-pink-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Buscar batom, base, paleta, pincel, sérum..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className={`w-full pl-10 pr-10 py-2.5 rounded-full border focus:outline-none focus:ring-2 focus:ring-pink-500 text-xs shadow-sm ${
              theme === 'escuro'
                ? 'bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-500'
                : 'bg-white border-zinc-300 text-zinc-950 placeholder:text-zinc-500'
            }`}
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Sort & Result Counter */}
        <div className="flex items-center justify-between md:justify-end gap-3 text-xs">
          <span className={`text-[11px] font-bold uppercase tracking-wider ${
            theme === 'escuro' ? 'text-zinc-400' : 'text-zinc-600'
          }`}>
            {totalResultsCount} {totalResultsCount === 1 ? 'produto' : 'produtos'}
          </span>

          <div className={`flex items-center gap-1.5 border rounded-full px-3 py-1.5 shadow-sm ${
            theme === 'escuro'
              ? 'bg-zinc-900 border-zinc-800 text-white'
              : 'bg-white border-zinc-300 text-zinc-950'
          }`}>
            <ArrowUpDown className="w-3.5 h-3.5 text-pink-500" />
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value as any)}
              className={`bg-transparent text-xs font-semibold focus:outline-none cursor-pointer pr-1 ${
                theme === 'escuro' ? 'text-white bg-zinc-900' : 'text-zinc-950 bg-white'
              }`}
            >
              <option value="populares" className={theme === 'escuro' ? 'bg-zinc-900 text-white' : 'bg-white text-zinc-950'}>Mais Populares</option>
              <option value="menor-preco" className={theme === 'escuro' ? 'bg-zinc-900 text-white' : 'bg-white text-zinc-950'}>Menor Preço</option>
              <option value="maior-preco" className={theme === 'escuro' ? 'bg-zinc-900 text-white' : 'bg-white text-zinc-950'}>Maior Preço</option>
              <option value="maior-desconto" className={theme === 'escuro' ? 'bg-zinc-900 text-white' : 'bg-white text-zinc-950'}>Maior Desconto</option>
            </select>
          </div>
        </div>
      </div>

      {/* Horizontal Scrollable Categories */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none pt-1">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 border ${
                isSelected
                  ? theme === 'escuro'
                    ? 'bg-white text-zinc-950 border-white shadow-sm font-bold'
                    : 'bg-zinc-950 text-white border-zinc-950 shadow-sm font-bold'
                  : theme === 'escuro'
                    ? 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-pink-400'
                    : 'bg-zinc-100 border-zinc-300 text-zinc-800 hover:border-pink-500'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
