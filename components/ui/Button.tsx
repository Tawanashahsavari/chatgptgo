import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'glass' | 'ghost' | 'neon';
  href?: string;
  showIcon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  href, 
  showIcon = false, 
  className = '',
  ...props 
}) => {
  const { dir } = useLanguage();
  
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold transition-all duration-300 transform active:scale-95 text-sm md:text-base relative overflow-hidden group tracking-wide";
  
  const variants = {
    // Spotify Green Primary
    primary: "bg-[#1DB954] hover:bg-[#1ed760] text-black shadow-[0_0_20px_-5px_rgba(29,185,84,0.5)] hover:shadow-[0_0_30px_-5px_rgba(30,215,96,0.6)] hover:-translate-y-0.5 border border-transparent",
    
    // High contrast dark/light
    secondary: "bg-black dark:bg-white text-white dark:text-black border border-transparent hover:bg-gray-900 dark:hover:bg-gray-100",
    
    // Neon Outline (Spotify Green)
    neon: "bg-transparent border-2 border-[#1DB954] text-[#1DB954] hover:bg-[#1DB954] hover:text-black shadow-[0_0_15px_-5px_#1DB954]",

    // Subtle Glass
    glass: "backdrop-blur-xl bg-[#181818] border border-[#282828] text-white shadow-lg hover:bg-[#282828] hover:border-[#1DB954]/30",
    
    ghost: "bg-transparent text-[#b3b3b3] hover:text-white"
  };

  const content = (
    <>
      {/* Shine effect for primary */}
      {(variant === 'primary') && (
        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/25 to-transparent z-0" />
      )}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {showIcon && (
            <ArrowUpRight 
                size={18} 
                className={`transition-transform duration-300 ${dir === 'rtl' ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} 
            />
        )}
      </span>
    </>
  );

  if (href) {
    return (
      <a 
        href={href} 
        target={href.startsWith('http') ? "_blank" : "_self"} 
        rel="noopener noreferrer"
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {content}
    </button>
  );
};