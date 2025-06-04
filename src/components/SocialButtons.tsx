import React from 'react';
import { Instagram, Youtube, MessageCircle, Twitch, MessageSquare } from 'lucide-react';

const SocialButtons: React.FC = () => {
  return (
    <div className="fixed right-5 top-1/2 transform -translate-y-1/2 z-40 hidden md:block">
      <div className="flex flex-col items-center space-y-4">
        <a
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn bg-[#25D366] text-white hover:bg-[#128C7E]"
          aria-label="WhatsApp"
        >
          <MessageCircle size={20} />
        </a>
        
        <a
          href="https://instagram.com/username"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn bg-[#E1306C] text-white hover:bg-[#C13584]"
          aria-label="Instagram"
        >
          <Instagram size={20} />
        </a>
        
        <a
          href="https://youtube.com/c/username"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn bg-[#FF0000] text-white hover:bg-[#CC0000]"
          aria-label="YouTube"
        >
          <Youtube size={20} />
        </a>
        
        <a
          href="https://twitch.tv/username"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn bg-[#9146FF] text-white hover:bg-[#7829CC]"
          aria-label="Twitch"
        >
          <Twitch size={20} />
        </a>
        
        <a
          href="https://discord.gg/invite"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn bg-[#5865F2] text-white hover:bg-[#4752C4]"
          aria-label="Discord"
        >
          <MessageSquare size={20} />
        </a>
      </div>
    </div>
  );
};

export default SocialButtons;