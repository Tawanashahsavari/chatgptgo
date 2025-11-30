import React from 'react';
import { STEPS_CONFIG } from '../constants';
import { Shield, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

export const Steps: React.FC = () => {
  const { content, dir } = useLanguage();

  return (
    <section id="how" className="py-12 md:py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-black mb-3 text-foreground tracking-tight">{content.steps.title}</h2>
            <p className="text-brand-muted dark:text-brand-mutedLight text-sm md:text-lg">{content.steps.subtitle}</p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
            {/* Desktop Connecting Line */}
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-accent/20 to-transparent z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {STEPS_CONFIG.map((step, idx) => {
                const item = content.steps.items[step.titleKey];
                return (
                    <motion.div 
                        key={step.id} 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.15 }}
                        className="relative flex flex-col items-center lg:items-center text-center group"
                    >
                        {/* Step Number & Icon */}
                        <div className="relative z-10 mb-6">
                            <div className="w-24 h-24 rounded-2xl bg-white/70 dark:bg-[#0B0F19]/50 backdrop-blur-xl border border-white/80 dark:border-white/10 shadow-xl dark:shadow-none flex items-center justify-center group-hover:scale-105 transition-all duration-500 group-hover:border-brand-accent/30 group-hover:shadow-brand-accent/10">
                                <div className="absolute inset-0 bg-brand-accent/5 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                                <step.icon size={32} className="text-brand-mutedLight group-hover:text-brand-accent transition-colors duration-300 relative z-10" />
                                
                                {/* Badge */}
                                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-xl bg-gradient-to-br from-brand-accent to-brand-secondary text-white flex items-center justify-center font-bold text-sm shadow-lg rotate-12 group-hover:rotate-0 transition-transform duration-300">
                                    {step.id}
                                </div>
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="px-2">
                            <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-brand-accent transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-brand-muted dark:text-brand-mutedLight text-xs leading-relaxed max-w-[200px] mx-auto font-medium">
                                {item.desc}
                            </p>
                        </div>

                        {/* Mobile Connector */}
                        {idx !== STEPS_CONFIG.length - 1 && (
                            <div className="lg:hidden absolute bottom-[-24px] left-1/2 -translate-x-1/2 text-brand-mutedLight/20">
                                <ArrowRight size={20} className="rotate-90" />
                            </div>
                        )}
                    </motion.div>
                );
            })}
            </div>
        </div>

        {/* Security Box */}
        <div className="mt-16 mx-auto max-w-lg">
            <div className="bg-white/60 dark:bg-white/5 border border-white/60 dark:border-brand-accent/10 rounded-2xl p-4 flex items-center gap-4 backdrop-blur-sm shadow-sm">
                <div className="p-2 bg-white dark:bg-white/5 rounded-xl text-brand-accent shadow-sm border border-gray-100 dark:border-transparent">
                    <Shield size={20} />
                </div>
                <div className="text-start">
                    <h4 className="font-bold text-sm text-foreground">{content.steps.securityTitle}</h4>
                    <p className="text-[11px] text-brand-muted dark:text-brand-mutedLight mt-0.5 leading-tight">{content.steps.securityDesc}</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};