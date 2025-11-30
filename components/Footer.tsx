import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { TELEGRAM_LINK } from '../constants';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  const { content } = useLanguage();

  return (
    <footer className="relative border-t border-border dark:border-white/5 pt-12 pb-8 bg-white/60 dark:bg-black/30 backdrop-blur-lg">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8 text-center md:text-start">
          <div>
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-accent to-brand-secondary text-white flex items-center justify-center font-black text-lg shadow-lg shadow-brand-accent/30 mb-3 mx-auto md:mx-0">
                G
            </div>
            <p className="text-brand-muted dark:text-brand-mutedLight font-medium text-sm max-w-xs">{content.features.subtitle}</p>
          </div>
          
          <div className="flex gap-6 text-xs text-foreground font-semibold">
            <a href="#" className="hover:text-brand-accent transition-colors opacity-70 hover:opacity-100">{content.footer.links.terms}</a>
            <a href="#" className="hover:text-brand-accent transition-colors opacity-70 hover:opacity-100">{content.footer.links.privacy}</a>
            <a href={TELEGRAM_LINK} className="hover:text-brand-accent transition-colors opacity-70 hover:opacity-100">{content.footer.links.contact}</a>
          </div>
        </div>

        <div className="border-t border-black/5 dark:border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-[10px] text-brand-muted dark:text-brand-mutedLight uppercase tracking-wider font-bold">
          <p>© {year} PanbeNet. All rights reserved.</p>
          <p className="opacity-60">Designed for Premium Users</p>
        </div>
      </div>
    </footer>
  );
};