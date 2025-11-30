import React, { useState } from 'react';
import { FAQS_CONFIG } from '../constants';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const { content } = useLanguage();

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 relative">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-8 text-foreground tracking-tight">{content.faq.title}</h2>

        <div className="space-y-3">
          {FAQS_CONFIG.map((faq, idx) => {
            const item = content.faq.items[faq.questionKey];
            const isActive = activeIndex === idx;
            return (
                <div 
                key={idx} 
                className={`transition-all duration-300 rounded-xl overflow-hidden border ${
                    isActive 
                    ? 'bg-white/90 dark:bg-white/10 border-brand-accent/30 shadow-md shadow-brand-accent/5' 
                    : 'bg-white/60 dark:bg-white/5 border-white/60 dark:border-white/5 hover:bg-white/80 dark:hover:bg-white/10 shadow-sm'
                } backdrop-blur-md`}
                >
                <button
                    onClick={() => toggleIndex(idx)}
                    className="w-full flex items-center justify-between p-5 text-start focus:outline-none"
                >
                    <span className={`font-bold text-base ${isActive ? 'text-brand-accent' : 'text-foreground'}`}>
                    {item.q}
                    </span>
                    <span className={`p-1.5 rounded-full transition-colors ${isActive ? 'bg-brand-accent text-white' : 'text-brand-mutedLight bg-black/5 dark:bg-white/5'}`}>
                    {isActive ? <Minus size={14} /> : <Plus size={14} />}
                    </span>
                </button>
                
                <AnimatePresence>
                    {isActive && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                    >
                        <div className="px-5 pb-5 pt-0 text-brand-muted dark:text-brand-mutedLight text-sm leading-relaxed text-start font-medium">
                        {item.a}
                        </div>
                    </motion.div>
                    )}
                </AnimatePresence>
                </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};