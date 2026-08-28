import React from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Navigation, 
  Copy, 
  Check, 
  ExternalLink, 
  Sparkles, 
  Car, 
  CreditCard, 
  ShieldCheck 
} from 'lucide-react';
import { STORE_INFO } from '../data/mockData';
import { useTheme } from '../context/ThemeContext';

interface StoreAddressCardProps {
  copiedAddress: boolean;
  onCopyAddress: () => void;
  googleMapsUrl: string;
  wazeUrl: string;
}

export const StoreAddressCard: React.FC<StoreAddressCardProps> = ({
  copiedAddress,
  onCopyAddress,
  googleMapsUrl,
  wazeUrl
}) => {
  const { theme } = useTheme();

  return (
    <div className={`rounded-2xl border p-5 shadow-sm space-y-3 density-card ${
      theme === 'escuro' ? 'bg-zinc-900 border-zinc-800 text-white' : 'bg-white border-zinc-200 text-zinc-950'
    }`}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className={`p-2.5 rounded-xl shrink-0 border ${
            theme === 'escuro' 
              ? 'bg-pink-950/80 text-pink-400 border-pink-900/60' 
              : 'bg-pink-50 text-pink-600 border-pink-100'
          }`}>
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-pink-500 block">
              Endereço da Loja
            </span>
            <h3 className={`font-serif font-bold text-base mt-0.5 ${
              theme === 'escuro' ? 'text-white' : 'text-zinc-950'
            }`}>
              R. das Pedras, 326
            </h3>
            <p className={`text-xs mt-0.5 leading-relaxed ${
              theme === 'escuro' ? 'text-zinc-300' : 'text-zinc-700'
            }`}>
              Jardim Paulistano (Zona Norte)<br />
              São Paulo - SP, CEP: 02812-010
            </p>
          </div>
        </div>

        <button
          onClick={onCopyAddress}
          className={`p-2 rounded-full border text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 transition-colors shrink-0 ${
            theme === 'escuro'
              ? 'border-zinc-700 hover:bg-zinc-800 text-zinc-200'
              : 'border-zinc-300 hover:bg-zinc-100 text-zinc-800'
          }`}
          title="Copiar Endereço"
        >
          {copiedAddress ? (
            <>
              <Check className="w-3 h-3 text-emerald-500" />
              <span className="text-emerald-600">Copiado!</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              <span>Copiar</span>
            </>
          )}
        </button>
      </div>

      {/* Navigation Buttons */}
      <div className="pt-1 grid grid-cols-2 gap-2">
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2 px-3 rounded-full bg-black hover:bg-zinc-800 text-white font-bold text-[10px] uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm transition-all text-center"
        >
          <Navigation className="w-3 h-3 text-pink-400" />
          <span>Google Maps</span>
          <ExternalLink className="w-3 h-3 opacity-70" />
        </a>

        <a
          href={wazeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2 px-3 rounded-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-[10px] uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm transition-all text-center"
        >
          <Car className="w-3 h-3" />
          <span>Abrir no Waze</span>
          <ExternalLink className="w-3 h-3 opacity-70" />
        </a>
      </div>
    </div>
  );
};

interface StoreContactCardProps {
  copiedPhone: boolean;
  onCopyPhone: () => void;
}

export const StoreContactCard: React.FC<StoreContactCardProps> = ({
  copiedPhone,
  onCopyPhone
}) => {
  const { theme } = useTheme();

  return (
    <div className={`rounded-2xl border p-5 shadow-sm space-y-3 density-card ${
      theme === 'escuro' ? 'bg-zinc-900 border-zinc-800 text-white' : 'bg-white border-zinc-200 text-zinc-950'
    }`}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className={`p-2.5 rounded-xl shrink-0 border ${
            theme === 'escuro' 
              ? 'bg-emerald-950/80 text-emerald-400 border-emerald-900/60' 
              : 'bg-emerald-50 text-emerald-600 border-emerald-100'
          }`}>
            <Phone className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-500 block">
              Telefone & WhatsApp
            </span>
            <h3 className={`font-serif font-bold text-base mt-0.5 ${
              theme === 'escuro' ? 'text-white' : 'text-zinc-950'
            }`}>
              {STORE_INFO.phoneFormatted}
            </h3>
            <p className={`text-xs mt-0.5 ${
              theme === 'escuro' ? 'text-zinc-300' : 'text-zinc-700'
            }`}>
              Tire dúvidas, envie sua lista de makes ou consulte estoque com resposta imediata.
            </p>
          </div>
        </div>

        <button
          onClick={onCopyPhone}
          className={`p-2 rounded-full border text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 transition-colors shrink-0 ${
            theme === 'escuro'
              ? 'border-zinc-700 hover:bg-zinc-800 text-zinc-200'
              : 'border-zinc-300 hover:bg-zinc-100 text-zinc-800'
          }`}
          title="Copiar Telefone"
        >
          {copiedPhone ? (
            <>
              <Check className="w-3 h-3 text-emerald-500" />
              <span className="text-emerald-600">Copiado!</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              <span>Copiar</span>
            </>
          )}
        </button>
      </div>

      <div className="pt-1 grid grid-cols-2 gap-2">
        <a
          href={`https://wa.me/${STORE_INFO.phoneRaw}?text=${encodeURIComponent(STORE_INFO.whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2 px-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[10px] uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm transition-all"
        >
          <Phone className="w-3 h-3" />
          <span>WhatsApp</span>
        </a>

        <a
          href={`tel:${STORE_INFO.phoneRaw}`}
          className={`py-2 px-3 rounded-full font-bold text-[10px] uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all border ${
            theme === 'escuro'
              ? 'bg-zinc-800 border-zinc-700 text-white hover:bg-zinc-700'
              : 'bg-zinc-100 border-zinc-300 text-zinc-900 hover:bg-zinc-200'
          }`}
        >
          <span>Ligar Agora</span>
        </a>
      </div>
    </div>
  );
};

export const StoreHoursCard: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`rounded-2xl border p-5 shadow-sm space-y-2.5 density-card ${
      theme === 'escuro' ? 'bg-zinc-900 border-zinc-800 text-white' : 'bg-white border-zinc-200 text-zinc-950'
    }`}>
      <div className="flex items-center gap-1.5 text-pink-500 font-bold text-xs uppercase tracking-wider">
        <Clock className="w-3.5 h-3.5" />
        <span>Horários de Funcionamento</span>
      </div>

      <div className={`space-y-1.5 text-xs divide-y ${
        theme === 'escuro' ? 'divide-zinc-800' : 'divide-zinc-100'
      }`}>
        <div className="flex items-center justify-between pt-1 font-medium">
          <span className={theme === 'escuro' ? 'text-zinc-300' : 'text-zinc-700'}>Segunda a Sexta:</span>
          <span className={`font-bold ${theme === 'escuro' ? 'text-white' : 'text-zinc-950'}`}>09:00 às 19:30</span>
        </div>
        <div className="flex items-center justify-between pt-1.5 font-medium">
          <span className={theme === 'escuro' ? 'text-zinc-300' : 'text-zinc-700'}>Sábado:</span>
          <span className={`font-bold ${theme === 'escuro' ? 'text-white' : 'text-zinc-950'}`}>09:00 às 19:00</span>
        </div>
        <div className="flex items-center justify-between pt-1.5 font-medium">
          <span className={theme === 'escuro' ? 'text-zinc-300' : 'text-zinc-700'}>Domingo & Feriados:</span>
          <span className="font-bold text-pink-500">10:00 às 15:00</span>
        </div>
      </div>
    </div>
  );
};

export const StoreMapFrame: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`rounded-2xl overflow-hidden border shadow-sm density-card ${
      theme === 'escuro' ? 'bg-zinc-900 border-zinc-800 text-white' : 'bg-white border-zinc-200 text-zinc-950'
    }`}>
      <div className={`p-3.5 border-b flex items-center justify-between ${
        theme === 'escuro' ? 'border-zinc-800' : 'border-zinc-200'
      }`}>
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-pink-500 animate-ping" />
          <span className={`text-xs font-bold ${
            theme === 'escuro' ? 'text-white' : 'text-zinc-950'
          }`}>
            A Gata da Make no Mapa
          </span>
        </div>
        <span className="text-[10px] text-pink-500 font-bold bg-pink-50 dark:bg-pink-950 px-2 py-0.5 rounded-full uppercase tracking-wider">
          Zona Norte - SP
        </span>
      </div>

      {/* Embedded Google Maps iFrame */}
      <div className="relative w-full h-[250px] sm:h-[300px] bg-zinc-100 dark:bg-zinc-800">
        <iframe
          src="https://maps.google.com/maps?q=Rua%20das%20Pedras,%20326,%20Jardim%20Paulistano,%20Sao%20Paulo,%20SP&t=&z=16&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa de Localização - A Gata da Make"
          className="w-full h-full grayscale-[20%] contrast-[105%]"
        />
      </div>

      {/* Store Amenities Checklist */}
      <div className={`p-4 grid grid-cols-2 gap-2.5 text-xs ${
        theme === 'escuro' ? 'bg-zinc-950/60 text-zinc-300' : 'bg-zinc-50 text-zinc-700'
      }`}>
        <div className="flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-pink-500 shrink-0" />
          <span>Camarim com Testers</span>
        </div>
        <div className="flex items-center gap-1.5">
          <CreditCard className="w-3.5 h-3.5 text-pink-500 shrink-0" />
          <span>PIX & Cartões</span>
        </div>
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-pink-500 shrink-0" />
          <span>100% Originais</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Car className="w-3.5 h-3.5 text-pink-500 shrink-0" />
          <span>Fácil Estacionamento</span>
        </div>
      </div>
    </div>
  );
};
