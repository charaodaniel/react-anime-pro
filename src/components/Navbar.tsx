import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-sm shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-primary font-bold text-2xl flex items-center">
          <span className="mr-2">🎬</span> React Anime Pro
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-text hover:text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#sponsor"
            className="text-text hover:text-primary transition-colors"
          >
            Como Patrocinar
          </a>
          <a
            href="#content"
            className="text-text hover:text-primary transition-colors"
          >
            Conteúdo
          </a>
          <a
            href="#live"
            className="text-text hover:text-primary transition-colors"
          >
            Ao Vivo
          </a>
          <a
            href="https://example.com/patrocinar"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Patrocinar Agora
          </a>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-card shadow-xl transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0 invisible'
        } overflow-hidden`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <a
            href="#sponsor"
            className="text-text hover:text-primary transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Como Patrocinar
          </a>
          <a
            href="#content"
            className="text-text hover:text-primary transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Conteúdo
          </a>
          <a
            href="#live"
            className="text-text hover:text-primary transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Ao Vivo
          </a>
          <a
            href="https://example.com/patrocinar"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-center"
          >
            Patrocinar Agora
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;