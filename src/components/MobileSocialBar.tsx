import React from 'react';
import { Instagram, Youtube, MessageCircle, Twitch } from 'lucide-react';
import { FaDiscord } from 'react-icons/fa'; // ← Ícone oficial do Discord

const MobileSocialBar: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-card z-40">
      <div className="flex justify-around items-center py-2">
        <a
          href="https://chat.whatsapp.com/KeB7rxgP7OJKyzveQBKlZY"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#25D366] p-2"
          aria-label="WhatsApp"
        >
          <MessageCircle size={24} />
        </a>

        <a
          href="https://www.instagram.com/reactanimepro/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#E1306C] p-2"
          aria-label="Instagram"
        >
          <Instagram size={24} />
        </a>

        <a
          href="https://www.youtube.com/@ReactAnimePro"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#FF0000] p-2"
          aria-label="YouTube"
        >
          <Youtube size={24} />
        </a>

        <a
          href="https://www.twitch.tv/oirobson"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#9146FF] p-2"
          aria-label="Twitch"
        >
          <Twitch size={24} />
        </a>

        <a
          href="https://discord.com/invite/xDhNaEsBmA"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#5865F2] p-2"
          aria-label="Discord"
        >
          <FaDiscord size={24} />
        </a>
      </div>
    </div>
  );
};

export default MobileSocialBar;
