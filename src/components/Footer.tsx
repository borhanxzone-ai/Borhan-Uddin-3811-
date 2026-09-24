import React from 'react';
import { siteConfig } from '../data/portfolioData';
import { Video, ArrowUp } from 'lucide-react';
import {
  ThreeDWhatsAppIcon,
  ThreeDFacebookIcon,
  ThreeDYouTubeIcon,
  ThreeDInstagramIcon,
  ThreeDBehanceIcon,
} from './ThreeDSocialIcon';

interface FooterProps {
  onOpenEditGuide?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/5 py-12 md:py-16 text-neutral-400 text-xs relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/5">
          
          {/* Logo & Slogan */}
          <div className="space-y-2 max-w-sm">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 via-purple-500 to-rose-500 p-0.5 flex items-center justify-center shadow-md">
                <div className="w-full h-full bg-[#0d0e15] rounded-full overflow-hidden flex items-center justify-center">
                  {siteConfig.avatarUrl ? (
                    <img
                      src="/favicon-512x512.png"
                      alt={siteConfig.agencyName}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center"
                    />
                  ) : (
                    <Video className="w-4 h-4 text-amber-400" />
                  )}
                </div>
              </div>
              <span className="font-heading text-lg font-bold text-white tracking-tight">
                {siteConfig.agencyName}
              </span>
            </div>
            <p className="text-neutral-400 text-xs leading-relaxed">
              {siteConfig.brandTagline}. Crafting high-converting motion ads, viral short-form retention, and brand commercials.
            </p>
          </div>

          {/* Social Links: WhatsApp, Facebook, YouTube, Instagram, Behance */}
          <div className="flex items-center gap-3">
            {siteConfig.contact.whatsapp && (
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-2xl bg-[#12141f] hover:bg-[#161a29] border border-white/10 hover:border-emerald-500/50 flex items-center justify-center transition-all transform hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/20 group cursor-pointer"
                aria-label="WhatsApp"
                title="WhatsApp Direct Chat"
              >
                <ThreeDWhatsAppIcon className="w-7 h-7 transition-transform group-hover:scale-110" />
              </a>
            )}
            {siteConfig.contact.socials.facebook && (
              <a
                href={siteConfig.contact.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-2xl bg-[#12141f] hover:bg-[#161a29] border border-white/10 hover:border-blue-500/50 flex items-center justify-center transition-all transform hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/20 group cursor-pointer"
                aria-label="Facebook"
                title="Facebook Profile"
              >
                <ThreeDFacebookIcon className="w-7 h-7 transition-transform group-hover:scale-110" />
              </a>
            )}
            {siteConfig.contact.socials.youtube && (
              <a
                href={siteConfig.contact.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-2xl bg-[#12141f] hover:bg-[#161a29] border border-white/10 hover:border-red-500/50 flex items-center justify-center transition-all transform hover:-translate-y-1 hover:shadow-xl hover:shadow-red-500/20 group cursor-pointer"
                aria-label="YouTube"
                title="YouTube Channel (@Borhan_Creation-e6n)"
              >
                <ThreeDYouTubeIcon className="w-7 h-7 transition-transform group-hover:scale-110" />
              </a>
            )}
            {siteConfig.contact.socials.instagram && (
              <a
                href={siteConfig.contact.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-2xl bg-[#12141f] hover:bg-[#161a29] border border-white/10 hover:border-pink-500/50 flex items-center justify-center transition-all transform hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-500/20 group cursor-pointer"
                aria-label="Instagram"
                title="Instagram Profile (@borhan_xyz)"
              >
                <ThreeDInstagramIcon className="w-7 h-7 transition-transform group-hover:scale-110" />
              </a>
            )}
            {siteConfig.contact.socials.behance && (
              <a
                href={siteConfig.contact.socials.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-2xl bg-[#12141f] hover:bg-[#161a29] border border-white/10 hover:border-blue-500/50 flex items-center justify-center transition-all transform hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/20 group cursor-pointer"
                aria-label="Behance"
                title="Behance Portfolio (@borhanuddin-2004)"
              >
                <ThreeDBehanceIcon className="w-7 h-7 transition-transform group-hover:scale-110" />
              </a>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {siteConfig.agencyName}. All rights reserved.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
