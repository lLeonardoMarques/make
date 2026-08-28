import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { QUIZ_QUESTIONS, PRODUCTS_DATA } from '../data/mockData';
import { useCart } from '../context/CartContext';
import { Product } from '../types';
import { QuizStep } from './QuizStep';
import { QuizResult } from './QuizResult';
import confetti from 'canvas-confetti';

interface BeautyQuizProps {
  onQuickViewProduct: (product: Product) => void;
}

export const BeautyQuiz: React.FC<BeautyQuizProps> = ({ onQuickViewProduct }) => {
  const { addToCart, setIsCartOpen } = useCart();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSelectOption = (questionId: number, optionValue: string) => {
    const nextAnswers = { ...answers, [questionId]: optionValue };
    setAnswers(nextAnswers);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
      try {
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#ec4899', '#f43f5e', '#a855f7', '#fb7185']
        });
      } catch (e) {}
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
    setIsCompleted(false);
  };

  // Curate recommended products based on answers
  const recommendedProducts = React.useMemo(() => {
    const list: Product[] = [];
    const base = PRODUCTS_DATA.find(p => p.category === 'rosto') || PRODUCTS_DATA[4];
    const lipstick = PRODUCTS_DATA.find(p => p.category === 'labios') || PRODUCTS_DATA[1];
    const eyelinerOrPalette = PRODUCTS_DATA.find(p => p.category === 'olhos') || PRODUCTS_DATA[2];

    list.push(lipstick);
    list.push(eyelinerOrPalette);
    list.push(base);

    return list;
  }, [answers]);

  const handleAddAllRecommended = () => {
    recommendedProducts.forEach(p => addToCart(p, 1));
    setIsCartOpen(true);
  };

  return (
    <section id="consultoria" className="py-12 sm:py-16 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl bg-gradient-to-tr from-pink-950/90 via-zinc-950 to-pink-950 text-white p-6 sm:p-10 border-2 border-pink-500/40 shadow-2xl relative overflow-hidden">
          
          {/* Ambient Glow */}
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-pink-600/20 rounded-full blur-3xl pointer-events-none" />

          {/* Top Header */}
          <div className="text-center max-w-xl mx-auto space-y-1.5 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-white/20 text-white text-[10px] font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-pink-300" />
              <span>Consultoria Express de Beleza</span>
            </div>
            <h2 className="font-serif font-black text-2xl sm:text-3xl text-white">
              Descubra Seu Combo de Make Ideal
            </h2>
            <p className="text-xs sm:text-sm text-pink-100 font-normal">
              Responda 3 perguntas rápidas e receba a combinação perfeita de maquiagem para o seu estilo!
            </p>
          </div>

          {!isCompleted ? (
            <QuizStep
              questions={QUIZ_QUESTIONS}
              currentStep={currentStep}
              onSelectOption={handleSelectOption}
            />
          ) : (
            <QuizResult
              recommendedProducts={recommendedProducts}
              onAddAll={handleAddAllRecommended}
              onReset={handleReset}
              onQuickViewProduct={onQuickViewProduct}
            />
          )}

        </div>

      </div>
    </section>
  );
};
