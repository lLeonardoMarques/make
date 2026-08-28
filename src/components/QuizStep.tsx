import React from 'react';
import { 
  Check, 
  Sun, 
  Sparkles, 
  Eye, 
  Heart, 
  ShieldCheck, 
  Sparkle, 
  Layers, 
  Feather, 
  Smile, 
  Star, 
  Flame, 
  Droplets 
} from 'lucide-react';
import { QuizQuestion } from '../types';

interface QuizStepProps {
  questions: QuizQuestion[];
  currentStep: number;
  onSelectOption: (questionId: number, optionValue: string) => void;
}

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Sun,
  Sparkles,
  Eye,
  Heart,
  ShieldCheck,
  Sparkle,
  Layers,
  Feather,
  Smile,
  Star,
  Flame,
  Droplets
};

export const QuizStep: React.FC<QuizStepProps> = ({
  questions,
  currentStep,
  onSelectOption
}) => {
  const currentQuestion = questions[currentStep];

  return (
    <div className="space-y-5">
      {/* Progress Steps Indicator */}
      <div className="flex items-center justify-between max-w-xs mx-auto mb-4">
        {questions.map((q, idx) => (
          <div key={q.id} className="flex items-center gap-2">
            <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
              currentStep === idx
                ? 'bg-pink-500 text-white ring-2 ring-white/50 scale-105'
                : currentStep > idx
                ? 'bg-emerald-500 text-white'
                : 'bg-zinc-800 text-zinc-400'
            }`}>
              {currentStep > idx ? <Check className="w-3.5 h-3.5" /> : idx + 1}
            </div>
            {idx < questions.length - 1 && (
              <div className={`w-10 h-0.5 rounded ${
                currentStep > idx ? 'bg-emerald-500' : 'bg-zinc-800'
              }`} />
            )}
          </div>
        ))}
      </div>

      {/* Question Card */}
      <div className="bg-black/60 rounded-2xl border border-white/10 p-5 sm:p-6 space-y-4">
        <div className="text-center space-y-1">
          <span className="text-[10px] font-bold text-pink-300 uppercase tracking-widest">
            Pergunta {currentStep + 1} de {questions.length}
          </span>
          <h3 className="font-serif font-bold text-base sm:text-lg text-white">
            {currentQuestion.question}
          </h3>
        </div>

        {/* Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {currentQuestion.options.map((opt) => {
            const IconComponent = iconMap[opt.icon] || Sparkles;

            return (
              <button
                key={opt.value}
                onClick={() => onSelectOption(currentQuestion.id, opt.value)}
                className="p-3.5 rounded-xl bg-white/5 hover:bg-pink-600/30 border border-white/10 hover:border-pink-400/60 text-left transition-all group flex items-start gap-3 hover:scale-[1.01] active:scale-[0.99]"
              >
                <div className="p-2 rounded-lg bg-pink-500/20 text-pink-300 group-hover:bg-pink-500 group-hover:text-white shrink-0 transition-colors">
                  <IconComponent className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-xs text-white block group-hover:text-pink-200">
                    {opt.label}
                  </span>
                  {opt.description && (
                    <span className="text-[10px] text-zinc-400 leading-tight block mt-0.5">
                      {opt.description}
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
