import React from 'react';
import { ABOUT_ME_LINK, CHANNEL_LINK, PROFILE_IMAGE_URL, TRUST_CHANNEL_LINK } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { Send, ExternalLink, BadgeCheck, MapPin, Percent } from 'lucide-react';
import { Button } from './ui/Button';

export const Seller: React.FC = () => {
  const { content } = useLanguage();

  return (
    <section id="seller" className="py-16 md:py-20 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
            
            {/* Profile Card */}
            <div className="relative group perspective-1000">
                <div className="absolute inset-0 bg-brand-accent/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative h-full bg-white dark:bg-[#0B0F19] border border-gray-200 dark:border-white/5 rounded-3xl overflow-hidden shadow-2xl dark:shadow-black/50 flex flex-col">
                    {/* Cover */}
                    <div className="h-32 w-full relative overflow-hidden">
                         <div className="absolute inset-0" 
                              style={{ 
                                  backgroundImage: `url(${PROFILE_IMAGE_URL})`, 
                                  backgroundSize: 'cover', 
                                  backgroundPosition: 'center',
                                  filter: 'blur(20px) brightness(0.7)'
                              }}>
                         </div>
                         <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-[#0B0F19]"></div>
                    </div>

                    <div className="px-6 pb-6 md:px-8 md:pb-8 flex-1 flex flex-col -mt-16 relative">
                        {/* Avatar */}
                        <div className="mb-4 inline-block">
                            <div className="w-28 h-28 rounded-[2rem] p-1.5 bg-white dark:bg-[#0B0F19] shadow-lg border border-gray-100 dark:border-transparent">
                                <img 
                                    src={PROFILE_IMAGE_URL} 
                                    alt={content.seller.name} 
                                    className="w-full h-full rounded-[1.6rem] object-cover"
                                />
                            </div>
                        </div>

                        <div className="mb-5">
                            <div className="flex items-center gap-2 mb-1">
                                <h3 className="text-2xl font-black text-foreground">{content.seller.name}</h3>
                                <BadgeCheck size={20} className="text-brand-accent" fill="currentColor" color="white" />
                            </div>
                            <p className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-secondary mb-2" dir="ltr">{content.seller.role}</p>
                            <div className="flex items-center gap-1.5 text-xs text-brand-muted dark:text-brand-mutedLight font-medium">
                                <MapPin size={12} />
                                <span dir="ltr">Kurdistan, Iran (Remote)</span>
                            </div>
                        </div>

                        <p className="text-brand-muted dark:text-brand-mutedLight text-sm leading-relaxed mb-6 border-s-2 border-brand-accent/20 ps-4 font-medium">
                            {content.seller.bio}
                        </p>

                        <div className="mt-auto">
                            <Button href={ABOUT_ME_LINK} variant="secondary" className="w-full rounded-xl text-xs py-3 font-bold border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10">
                                {content.seller.cta} <ExternalLink size={14} className="ms-2" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Channels & Info */}
            <div className="flex flex-col gap-4">
                <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-[#0B0F19] to-brand-dark text-white border border-white/5 shadow-2xl flex flex-col justify-center flex-1 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/20 blur-[80px] rounded-full"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl font-black mb-2 leading-tight">Join the <br/><span className="text-brand-accent">Community</span>.</h2>
                        <p className="opacity-60 text-sm mb-0 max-w-xs font-medium">Get the latest AI news, exclusive discounts, and support.</p>
                    </div>
                </div>

                {/* Channel Links Grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                    {/* Main Channel */}
                    <a href={CHANNEL_LINK} target="_blank" rel="noopener noreferrer" className="group bg-[#2AABEE] text-white p-5 rounded-3xl shadow-lg hover:shadow-[#2AABEE]/30 transition-all hover:-translate-y-1 flex flex-col justify-between h-32 relative overflow-hidden">
                         <div className="absolute -right-4 -bottom-4 bg-white/20 w-24 h-24 rounded-full blur-xl group-hover:scale-150 transition-transform"></div>
                         <Send size={28} className="relative z-10" />
                         <div className="relative z-10">
                             <div className="text-xs font-bold opacity-90 uppercase tracking-wider mb-1">Official</div>
                             <div className="font-black text-lg">Telegram</div>
                         </div>
                    </a>

                    {/* Trust Channel */}
                    <a href={TRUST_CHANNEL_LINK} target="_blank" rel="noopener noreferrer" className="group bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 p-5 rounded-3xl shadow-sm hover:border-brand-accent/50 transition-all hover:-translate-y-1 flex flex-col justify-between h-32">
                         <div className="w-10 h-10 rounded-full bg-brand-accent/10 text-brand-accent flex items-center justify-center">
                             <Percent size={20} />
                         </div>
                         <div>
                             <div className="text-xs font-bold text-brand-muted uppercase tracking-wider mb-1">Reviews</div>
                             <div className="font-black text-lg text-foreground">Trust & Offers</div>
                         </div>
                    </a>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};