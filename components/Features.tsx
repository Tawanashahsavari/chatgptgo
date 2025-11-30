import React, { useState } from 'react';
import { FEATURES_CONFIG } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';

export const Features: React.FC = () => {
  const { content } = useLanguage();
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const toggleFeature = (idx: number) => {
    setActiveIdx(activeIdx === idx ? null : idx);
  };

  return (
    <section id="features" className="py-12 md:py-16 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-black mb-3 text-foreground tracking-tight">
                {content.features.title}
            </h2>
            <p className="text-brand-muted dark:text-brand-mutedLight text-sm md:text-lg font-light max-w-2xl mx-auto">
                {content.features.subtitle}
            </p>
        </div>

        {/* Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {FEATURES_CONFIG.map((feature, idx) => {
             const itemContent = content.features.items[feature.titleKey];
             const isActive = activeIdx === idx;
             
             return (
                <motion.div
                    key={idx}
                    layout
                    onClick={() => toggleFeature(idx)}
                    className={`
                        relative overflow-hidden cursor-pointer group rounded-2xl border transition-all duration-500
                        ${isActive 
                            ? 'bg-white/90 dark:bg-brand-accent/5 border-brand-accent/30 shadow-[0_0_30px_-10px_rgba(99,102,241,0.2)] ring-1 ring-brand-accent/20' 
                            : 'bg-white/70 dark:bg-white/5 border-white/60 dark:border-white/5 hover:bg-white/90 dark:hover:bg-white/10 hover:border-brand-accent/20 shadow-sm'
                        }
                        backdrop-blur-xl
                    `}
                >
                    {/* Active Gradient Background */}
                    <AnimatePresence>
                        {isActive && (
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 via-transparent to-brand-secondary/5 pointer-events-none"
                            />
                        )}
                    </AnimatePresence>

                    <div className="p-5 flex flex-col h-full relative z-10">
                        <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                                {/* Icon Box */}
                                <div className={`
                                    p-3 rounded-xl transition-all duration-500
                                    ${isActive 
                                        ? 'bg-brand-accent text-white shadow-lg shadow-brand-accent/30 scale-110' 
                                        : 'bg-brand-accent/10 text-brand-accent group-hover:scale-105'
                                    }
                                `}>
                                    <feature.icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                                </div>
                                
                                <h3 className={`font-bold text-base md:text-lg transition-colors duration-300 ${isActive ? 'text-brand-accent' : 'text-foreground'}`}>
                                    {itemContent.title}
                                </h3>
                            </div>

                            {/* Indicator */}
                            <div className={`text-brand-mutedLight transition-transform duration-300 ${isActive ? 'rotate-180 text-brand-accent' : ''}`}>
                                {isActive ? <Minus size={16} /> : <Plus size={16} />}
                            </div>
                        </div>
                        
                        <AnimatePresence>
                            {isActive && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                    animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
                                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                    className="overflow-hidden"
                                >
                                    <p className="text-sm text-brand-muted dark:text-brand-mutedLight leading-relaxed border-t border-black/5 dark:border-white/5 pt-4">
                                        {itemContent.desc}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
             );
          })}
        </div>
      </div>
    </section>
  );
};