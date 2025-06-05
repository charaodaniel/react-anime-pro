import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background py-10 border-t border-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-primary mb-4">React Anime Pro</h3>
            <p className="text-text-secondary">
              Compartilhando as melhores histórias através de animes, séries, filmes e mais.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-text-secondary hover:text-primary transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sponsor" className="text-text-secondary hover:text-primary transition-colors">
                  Como Patrocinar
                </a>
              </li>
              <li>
                <a href="#content" className="text-text-secondary hover:text-primary transition-colors">
                  Conteúdo
                </a>
              </li>
              <li>
                <a href="#live" className="text-text-secondary hover:text-primary transition-colors">
                  Ao Vivo
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="text-text-secondary">
                Email: contato@reactanimepro.com
              </li>
              <li>
                <a 
                  href="https://discord.com/invite/xDhNaEsBmA" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  Discord
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  Termos de Serviço
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-card mt-10 pt-6 text-center text-text-secondary">
          <p>&copy; {currentYear} React Anime Pro. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;