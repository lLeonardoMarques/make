import React, { useState } from 'react';
import { Compass } from 'lucide-react';
import { STORE_INFO } from '../data/mockData';
import { useTheme } from '../context/ThemeContext';
import { 
  StoreAddressCard, 
  StoreContactCard, 
  StoreHoursCard, 
  StoreMapFrame 
} from './StoreCards';

export const StoreLocation: React.FC = () => {
  const { theme } = useTheme();
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(STORE_INFO.address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('11985313930');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(STORE_INFO.address)}`;
  const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent(STORE_INFO.address)}`;

  return (
    <section id="localizacao" className="py-8 sm:py-12 relative animate-in fade-in duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full font-bold text-[10px] uppercase tracking-widest border ${
            theme === 'escuro'
              ? 'bg-pink-950/80 text-pink-300 border-pink-900/60'
              : 'bg-pink-50 text-pink-700 border-pink-200'
          }`}>
            <Compass className="w-3.5 h-3.5 text-pink-500" />
            <span>Visite Nosso Espaço Físico</span>
          </div>
          <h2 className={`font-serif font-black text-2xl sm:text-4xl tracking-tight ${
            theme === 'escuro' ? 'text-white' : 'text-zinc-950'
          }`}>
            Localização & <span className="text-pink-500">Atendimento</span>
          </h2>
          <p className={`text-xs sm:text-sm font-medium ${
            theme === 'escuro' ? 'text-zinc-300' : 'text-zinc-700'
          }`}>
            Venha experimentar os produtos em nosso camarim e montar seu kit ideal com atendimento exclusivo na Zona Norte de São Paulo.
          </p>
        </div>

        {/* Main Location Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Cards: Details, Hours & Contact (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <StoreAddressCard
              copiedAddress={copiedAddress}
              onCopyAddress={handleCopyAddress}
              googleMapsUrl={googleMapsUrl}
              wazeUrl={wazeUrl}
            />

            <StoreContactCard
              copiedPhone={copiedPhone}
              onCopyPhone={handleCopyPhone}
            />

            <StoreHoursCard />
          </div>

          {/* Right Map & Store Visual (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <StoreMapFrame />
          </div>

        </div>

      </div>
    </section>
  );
};
