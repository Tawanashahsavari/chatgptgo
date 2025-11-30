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
        <h2 className="text-3xl md:text-4xl font-black text-center mb-8 text-white tracking-tight">{content.faq.title}</h2>

        <div className="space-y-3">
          {FAQS_CONFIG.map((faq, idx) => {
            const item = content.faq.items[faq.questionKey];
            const isActive = activeIndex === idx;
            return (
                <div 
                key={idx} 
                className={`transition-all duration-300 rounded-xl overflow-hidden border ${
                    isActive 
                    ? 'bg-[#181818] border-[#1DB954]/50 shadow-md shadow-[#1DB954]/10' 
                    : 'bg-[#181818] border-[#282828] hover:bg-[#282828] hover:border-[#1DB954]/30'
                } backdrop-blur-md`}
                >
                <button
                    onClick={() => toggleIndex(idx)}
                    className="w-full flex items-center justify-between p-5 text-start focus:outline-none"
                >
                    <span className={`font-bold text-base ${isActive ? 'text-[#1DB954]' : 'text-white'}`}>
                    {item.q}
                    </span>
                    <span className={`p-1.5 rounded-full transition-colors duration-300 ${isActive ? 'bg-[#1DB954] text-black' : 'text-[#727272] bg-[#282828]'}`}>
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
                        <div className="px-5 pb-5 pt-0 text-[#b3b3b3] text-sm leading-relaxed text-start font-medium">
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