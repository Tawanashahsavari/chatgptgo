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
        <div className={`pointer-events-auto transition-all duration-300 flex items-center justify-between
          ${isScrolled 
            ? 'w-full max-w-5xl bg-black/90 backdrop-blur-xl border border-[#282828] shadow-[0_8px_30px_rgb(0,0,0,0.3)] rounded-2xl py-3 px-6' 
            : 'w-full max-w-7xl bg-transparent py-4 px-0'
          }`}
        >
          {/* Brand */}
          <div className="flex items-center gap-3 group">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-xl shadow-lg transition-all duration-300
               ${isScrolled ? 'bg-[#1DB954] text-black group-hover:shadow-[0_0_20px_rgba(29,185,84,0.5)]' : 'bg-white text-brand-dark dark:bg-[#1DB954] dark:text-black shadow-black/5'}
            `}>
              G
            </div>
            <div className={`flex flex-col ${!isScrolled && 'drop-shadow-sm'}`}>
              <span className="font-bold text-lg leading-tight tracking-wide text-foreground">PanbeNet</span>
              <span className="text-[10px] uppercase tracking-wider font-semibold opacity-70">Store</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center bg-[#181818]/80 backdrop-blur-lg rounded-full px-2 py-1.5 border border-[#282828]">
            {NAV_LINKS.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="px-5 py-2 rounded-full text-sm font-medium text-[#b3b3b3] hover:text-white hover:bg-[#282828] transition-all duration-300"
              >
                {content.nav[link.key]}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center bg-[#181818]/80 backdrop-blur-lg rounded-full p-1 border border-[#282828]">
                <button 
                  onClick={toggleLanguage}
                  className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-[#282828] transition-colors text-xs font-black text-[#b3b3b3] hover:text-white"
                >
                  {language === 'fa' ? 'EN' : 'فا'}
                </button>
                <button 
                  onClick={toggleTheme}
                  className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-[#282828] transition-colors text-[#b3b3b3] hover:text-white"
                >
                  {theme === 'dark' ? <Sun size={16} strokeWidth={2.5} /> : <Moon size={16} strokeWidth={2.5} />}
                </button>
            </div>
            
            <a 
              href={TELEGRAM_LINK}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:scale-105
              bg-[#1DB954] hover:bg-[#1ed760] text-black`}
            >
              <ShoppingBag size={16} strokeWidth={2.5} />
              <span>{content.hero.ctaPrimary.split(' ')[0]}</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-3 md:hidden">
            <button 
              className={`p-2.5 rounded-xl backdrop-blur-md border ${isScrolled ? 'bg-[#181818] border-[#282828]' : 'bg-[#181818]/80 border-[#282828] shadow-sm'}`}
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={20} className="text-white" />
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
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm md:hidden flex justify-end"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="w-4/5 h-full bg-[#121212] backdrop-blur-2xl border-l border-[#282828] p-8 flex flex-col shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-10">
                <span className="font-black text-2xl text-white">Menu</span>
                <button onClick={() => setMobileMenuOpen(false)} className="p-2 rounded-full bg-[#282828] hover:bg-[#383838] text-white">
                   <X />
                </button>
              </div>

              <nav className="flex flex-col gap-3">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.key}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between p-4 rounded-2xl bg-[#181818] text-lg font-bold transition-transform active:scale-95 text-white hover:bg-[#282828]"
                  >
                    {content.nav[link.key]}
                  </a>
                ))}
              </nav>

              <div className="mt-auto grid grid-cols-2 gap-4">
                 <button onClick={toggleLanguage} className="p-4 rounded-2xl bg-[#1DB954]/10 text-[#1DB954] font-black flex justify-center text-xl">
                    {language === 'fa' ? 'English' : 'فارسی'}
                 </button>
                 <button onClick={toggleTheme} className="p-4 rounded-2xl bg-[#181818] flex justify-center text-white">
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