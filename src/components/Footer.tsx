import React from 'react';
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  Clock, 
  Instagram, 
  Heart, 
  ShieldCheck, 
  ArrowUp,
  Sun,
  Moon
} from 'lucide-react';
import { STORE_INFO } from '../data/mockData';
import { useTheme } from '../context/ThemeContext';
import { NavTab } from '../types';

interface FooterProps {
  onSelectTab: (tab: NavTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  const { theme, toggleTheme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t relative overflow-hidden transition-colors ${
      theme === 'escuro'
        ? 'bg-zinc-950 text-white border-zinc-800'
        : 'bg-zinc-100 text-zinc-950 border-zinc-200'
    }`}>
      
      {/* Decorative Top Line */}
      <div className="h-1 bg-gradient-to-r from-pink-600 via-rose-500 to-pink-700" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-pink-500 flex items-center justify-center text-white font-serif font-black text-base shadow-sm">
                G
              </div>
              <div>
                <span className={`font-serif font-black text-lg block leading-none ${
                  theme === 'escuro' ? 'text-white' : 'text-zinc-950'
                }`}>
                  A GATA DA <span className="text-pink-500">MAKE</span>
                </span>
                <span className="text-[9px] uppercase tracking-widest text-pink-500 font-bold">
                  Cosméticos & Maquiagens
                </span>
              </div>
            </div>

            <p className={`text-xs leading-relaxed max-w-sm font-medium ${
              theme === 'escuro' ? 'text-zinc-400' : 'text-zinc-700'
            }`}>
              Sua loja especializada em maquiagens profissionais, nacionais e importadas, batons, 
              paletas e cuidados para a pele com promoções exclusivas na Zona Norte de São Paulo.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <a
                href={`https://wa.me/${STORE_INFO.phoneRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${
                  theme === 'escuro'
                    ? 'bg-zinc-900 border-zinc-800 text-white hover:bg-emerald-600'
                    : 'bg-white border-zinc-300 text-zinc-800 hover:bg-emerald-600 hover:text-white'
                }`}
                title="WhatsApp"
              >
                <Phone className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${
                  theme === 'escuro'
                    ? 'bg-zinc-900 border-zinc-800 text-white hover:bg-pink-600'
                    : 'bg-white border-zinc-300 text-zinc-800 hover:bg-pink-600 hover:text-white'
                }`}
                title="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="font-serif font-bold text-xs text-pink-500 uppercase tracking-widest">
              Seções do App
            </h4>
            <ul className="space-y-1.5 text-xs font-semibold">
              <li>
                <button
                  onClick={() => onSelectTab('inicio')}
                  className={`transition-colors ${
                    theme === 'escuro' ? 'text-zinc-300 hover:text-pink-400' : 'text-zinc-700 hover:text-pink-600'
                  }`}
                >
                  🏠 Início / Destaques
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('produtos')}
                  className={`transition-colors ${
                    theme === 'escuro' ? 'text-zinc-300 hover:text-pink-400' : 'text-zinc-700 hover:text-pink-600'
                  }`}
                >
                  💄 Vitrine de Maquiagens
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('promocoes')}
                  className={`transition-colors ${
                    theme === 'escuro' ? 'text-zinc-300 hover:text-pink-400' : 'text-zinc-700 hover:text-pink-600'
                  }`}
                >
                  🔥 Promoções & Cupons
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('galeria')}
                  className={`transition-colors ${
                    theme === 'escuro' ? 'text-zinc-300 hover:text-pink-400' : 'text-zinc-700 hover:text-pink-600'
                  }`}
                >
                  📸 Fotos do Espaço & Loja
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('quiz')}
                  className={`transition-colors ${
                    theme === 'escuro' ? 'text-zinc-300 hover:text-pink-400' : 'text-zinc-700 hover:text-pink-600'
                  }`}
                >
                  ✨ Quiz da Make Ideal
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('localizacao')}
                  className={`transition-colors ${
                    theme === 'escuro' ? 'text-zinc-300 hover:text-pink-400' : 'text-zinc-700 hover:text-pink-600'
                  }`}
                >
                  📍 Localização & Horários
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Location (5 cols) */}
          <div className="lg:col-span-5 space-y-2.5">
            <h4 className="font-serif font-bold text-xs text-pink-500 uppercase tracking-widest">
              Loja Física & Atendimento
            </h4>
            <div className={`space-y-2 text-xs font-medium ${
              theme === 'escuro' ? 'text-zinc-300' : 'text-zinc-700'
            }`}>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                <span>R. das Pedras, 326 - Jardim Paulistano (ZN), São Paulo - SP</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-pink-500 shrink-0" />
                <a href={`tel:${STORE_INFO.phoneRaw}`} className={`font-bold ${
                  theme === 'escuro' ? 'text-white' : 'text-zinc-950'
                }`}>
                  (11) 98531-3930
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                <span>Seg a Sáb: 09h às 19h30 | Dom: 10h às 15h</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-1.5">
              {['PIX', 'Cartões', 'Dinheiro', '100% Originais'].map((flag) => (
                <span 
                  key={flag} 
                  className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider border ${
                    theme === 'escuro'
                      ? 'bg-zinc-900 border-zinc-800 text-zinc-300'
                      : 'bg-white border-zinc-300 text-zinc-800'
                  }`}
                >
                  {flag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className={`pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs ${
          theme === 'escuro' ? 'border-zinc-800 text-zinc-400' : 'border-zinc-200 text-zinc-600'
        }`}>
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} A Gata da Make. Todos os direitos reservados.</span>
          </div>

          <div className="flex items-center gap-4">
            {/* Quick theme buttons in footer */}
            <button
              onClick={toggleTheme}
              className={`px-3 py-1 rounded-full text-[11px] font-bold flex items-center gap-1.5 border transition-all ${
                theme === 'escuro'
                  ? 'bg-zinc-900 border-zinc-700 text-yellow-300 hover:bg-zinc-800'
                  : 'bg-white border-zinc-300 text-zinc-900 hover:bg-zinc-50'
              }`}
            >
              {theme === 'escuro' ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span>Tema Claro</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-zinc-900 fill-zinc-900" />
                  <span>Tema Escuro</span>
                </>
              )}
            </button>

            <button
              onClick={scrollToTop}
              className={`p-2 rounded-xl border transition-colors ${
                theme === 'escuro'
                  ? 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-white'
                  : 'bg-white border-zinc-300 text-zinc-700 hover:text-zinc-950'
              }`}
              title="Voltar ao Topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
