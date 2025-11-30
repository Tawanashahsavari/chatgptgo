import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ShoppingBag } from 'lucide-react';
import { NAV_LINKS, TELEGRAM_LINK } from '../constants';
import { AnimatePresence, motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { content, toggleLanguage, language } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <div className={`pointer-events-auto transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) flex items-center justify-between
          ${isScrolled 
            ? 'w-full max-w-5xl bg-white/80 dark:bg-[#0B0F19]/80 backdrop-blur-xl border border-white/60 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)] rounded-2xl py-3 px-6' 
            : 'w-full max-w-7xl bg-transparent py-4 px-0'
          }`}
        >
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-xl shadow-lg transition-colors duration-500
               ${isScrolled ? 'bg-gradient-to-br from-brand-accent to-brand-secondary text-white' : 'bg-white text-brand-dark dark:bg-white dark:text-black shadow-black/5'}
            `}>
              G
            </div>
            <div className={`flex flex-col ${!isScrolled && 'drop-shadow-sm'}`}>
              <span className="font-bold text-lg leading-tight tracking-wide text-foreground">PanbeNet</span>
              <span className="text-[10px] uppercase tracking-wider font-semibold opacity-70">Store</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center bg-white/60 dark:bg-white/5 backdrop-blur-lg rounded-full px-2 py-1.5 border border-white/40 dark:border-white/5 shadow-sm">
            {NAV_LINKS.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="px-5 py-2 rounded-full text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-white/60 dark:hover:bg-white/10 transition-all duration-300"
              >
                {content.nav[link.key]}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center bg-white/60 dark:bg-white/5 backdrop-blur-lg rounded-full p-1 border border-white/40 dark:border-white/5 shadow-sm">
                <button 
                  onClick={toggleLanguage}
                  className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-white/60 dark:hover:bg-white/10 transition-colors text-xs font-black text-foreground"
                >
                  {language === 'fa' ? 'EN' : 'فا'}
                </button>
                <button 
                  onClick={toggleTheme}
                  className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-white/60 dark:hover:bg-white/10 transition-colors text-foreground"
                >
                  {theme === 'dark' ? <Sun size={16} strokeWidth={2.5} /> : <Moon size={16} strokeWidth={2.5} />}
                </button>
            </div>
            
            <a 
              href={TELEGRAM_LINK}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5
              ${isScrolled 
                ? 'bg-gradient-to-r from-brand-accent to-brand-secondary text-white' 
                : 'bg-white dark:bg-foreground text-brand-dark dark:text-background border border-gray-100 dark:border-transparent'}`}
            >
              <ShoppingBag size={16} strokeWidth={2.5} />
              <span>{content.hero.ctaPrimary.split(' ')[0]}</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-3 md:hidden">
            <button 
              className={`p-2.5 rounded-xl backdrop-blur-md border ${isScrolled ? 'bg-white/50 dark:bg-white/5 border-white/20' : 'bg-white/60 dark:bg-black/50 border-white/30 shadow-sm'}`}
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={20} className="text-foreground" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm md:hidden flex justify-end"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="w-4/5 h-full bg-white/95 dark:bg-[#0B0F19]/95 backdrop-blur-2xl border-l border-white/20 dark:border-white/10 p-8 flex flex-col shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-10">
                <span className="font-black text-2xl text-foreground">Menu</span>
                <button onClick={() => setMobileMenuOpen(false)} className="p-2 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-foreground">
                   <X />
                </button>
              </div>

              <nav className="flex flex-col gap-3">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.key}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 dark:bg-white/5 text-lg font-bold transition-transform active:scale-95 text-foreground hover:bg-gray-100"
                  >
                    {content.nav[link.key]}
                  </a>
                ))}
              </nav>

              <div className="mt-auto grid grid-cols-2 gap-4">
                 <button onClick={toggleLanguage} className="p-4 rounded-2xl bg-brand-accent/10 text-brand-accent font-black flex justify-center text-xl">
                    {language === 'fa' ? 'English' : 'فارسی'}
                 </button>
                 <button onClick={toggleTheme} className="p-4 rounded-2xl bg-gray-100 dark:bg-white/5 flex justify-center text-foreground">
                    {theme === 'dark' ? <Sun /> : <Moon />}
                 </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};