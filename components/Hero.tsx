import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShoppingCart, ShieldCheck, Zap } from 'lucide-react';
import { Button } from './ui/Button';
import { TELEGRAM_LINK, PAYMENT_METHODS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

export const Hero: React.FC = () => {
  const { content } = useLanguage();
  const productImage = "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:0,cw:3996,ch:2247,q:80,w:2560/JFpeVzCqWC5ZbYTbyWu5m8.jpg";

  return (
    <section id="product" className="relative pt-24 pb-10 lg:pt-32 lg:pb-16 overflow-hidden z-20">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          
          {/* Left: Product Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-5/12 w-full max-w-[340px] lg:max-w-none mx-auto perspective-1000 order-1 lg:order-none"
          >
            <div className="relative group">
                {/* Glow - Blue/Violet */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-accent/30 dark:bg-brand-accent/20 blur-[80px] rounded-full pointer-events-none mix-blend-multiply dark:mix-blend-normal"></div>

                <div className="relative bg-white/70 dark:bg-white/5 backdrop-blur-2xl rounded-[2rem] border border-white/80 dark:border-white/10 p-2 shadow-2xl shadow-brand-accent/10 dark:shadow-black/50 transition-transform duration-500 group-hover:scale-[1.02]">
                    <div className="relative rounded-[1.8rem] overflow-hidden aspect-[4/5] bg-brand-dark shadow-inner">
                        <img 
                            src={productImage} 
                            alt="ChatGPT Go" 
                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-90"></div>
                        
                        <div className="absolute bottom-0 inset-x-0 p-6 text-white text-start">
                             <div className="flex items-center gap-2 mb-3">
                                <span className="bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider text-white border border-white/10 shadow-sm">
                                    Official Plan
                                </span>
                             </div>
                             <h3 className="text-4xl font-black mb-1 tracking-tight" dir="ltr">ChatGPT Go</h3>
                             <p className="text-brand-tertiary font-bold text-sm tracking-wide">PanbeNet Exclusive</p>
                        </div>
                    </div>

                    {/* Floating Trust Badge */}
                    <div className="absolute -top-5 -right-5 bg-white/90 dark:bg-[#1e1b4b] backdrop-blur-xl p-3 rounded-2xl shadow-[0_10px_30px_-5px_rgba(0,0,0,0.1)] dark:shadow-xl flex items-center gap-3 border border-white/60 dark:border-white/10 animate-float">
                        <div className="bg-gradient-to-br from-brand-accent to-brand-secondary p-2 rounded-xl text-white shadow-lg shadow-brand-accent/30">
                            <ShieldCheck size={20} />
                        </div>
                        <div className="text-start pe-2">
                            <div className="text-[10px] font-bold text-brand-muted uppercase">Verified Seller</div>
                            <div className="text-sm font-black text-brand-dark dark:text-white">PanbeNet</div>
                        </div>
                    </div>
                </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.2, duration: 0.8 }}
             className="lg:w-7/12 flex flex-col items-center lg:items-start text-center lg:text-start order-2 lg:order-none"
          >
            {/* Tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-[11px] font-bold mb-5 border border-brand-accent/10 shadow-sm">
                <Zap size={12} fill="currentColor" />
                {content.hero.badge}
            </div>

            {/* Fluid Typography using clamp() */}
            <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-black text-foreground leading-[1] mb-5 tracking-tighter drop-shadow-sm">
                {content.hero.pricing.title}
            </h1>

            <p className="text-base md:text-lg text-brand-muted dark:text-brand-mutedLight leading-relaxed mb-8 max-w-xl font-medium">
                {content.hero.subtitle}
            </p>

            {/* Price Block */}
            <div className="bg-white/70 dark:bg-white/5 backdrop-blur-md border border-white/60 dark:border-white/5 rounded-2xl p-4 md:p-6 mb-8 w-full max-w-md mx-auto lg:mx-0 shadow-lg shadow-brand-accent/5 dark:shadow-none">
                <div className="flex items-baseline justify-center lg:justify-start gap-2 mb-2">
                    <span className="text-[clamp(2.5rem,4vw,3.75rem)] font-black text-transparent bg-clip-text bg-gradient-to-br from-brand-accent to-brand-secondary tracking-tighter">
                        {content.hero.pricing.price}
                    </span>
                    <span className="text-sm font-bold text-brand-muted uppercase">{content.hero.pricing.unit}</span>
                </div>
                <div className="h-[1px] bg-gradient-to-r from-transparent via-brand-muted/20 to-transparent my-3"></div>
                <div className="flex justify-center lg:justify-start gap-4 text-[11px] font-bold text-brand-muted uppercase tracking-wider">
                    {content.hero.trust.map((item, i) => (
                        <span key={i} className="flex items-center gap-1">
                            <Star size={10} className="text-brand-accent" fill="currentColor" /> {item}
                        </span>
                    ))}
                </div>
            </div>

            <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-3 mb-10">
                <Button href={TELEGRAM_LINK} variant="primary" className="px-10 py-4 text-base rounded-2xl w-full sm:w-auto shadow-xl shadow-brand-accent/20">
                    <ShoppingCart size={18} className="me-2" />
                    {content.hero.ctaPrimary}
                </Button>
                <Button href="#how" variant="secondary" className="px-10 py-4 text-base rounded-2xl w-full sm:w-auto bg-white/50 dark:bg-white/5 hover:bg-white/80 dark:hover:bg-white/10">
                    {content.hero.ctaSecondary}
                </Button>
            </div>

            {/* Payment Icons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 opacity-90 grayscale hover:grayscale-0 transition-all duration-500">
                {PAYMENT_METHODS.map((method, idx) => (
                    <div key={idx} className="bg-white/80 dark:bg-white/10 p-2 rounded-lg border border-gray-200 dark:border-white/5 shadow-sm" title={method.label}>
                         <div className="w-6 h-4 rounded-[2px]" style={{ backgroundColor: method.color }}></div>
                    </div>
                ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};