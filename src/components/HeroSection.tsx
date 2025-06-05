import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/6044198/pexels-photo-6044198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/70 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary">
            🎬 Patrocine seu conteúdo favorito!
          </h1>
          <p className="text-lg md:text-xl text-text mb-8 max-w-2xl mx-auto">
            Faça parte da jornada! Patrocine animes, séries, filmes e mais. 
            Seu nome será eternizado nas transmissões e vídeos.
          </p>
          <a 
            href="https://livepix.gg/reactanimepro" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary text-lg"
          >
            Patrocinar Agora
          </a>
        </div>
      </div>
      
      {/* Animated arrow down */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#sponsor" className="text-primary">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="32" 
            height="32" 
            fill="currentColor" 
            viewBox="0 0 16 16"
          >
            <path d="M8 15a.5.5 0 0 1-.5-.5V2.707L1.354 8.854a.5.5 0 1 1-.708-.708l7-7a.5.5 0 0 1 .708 0l7 7a.5.5 0 0 1-.708.708L8.5 2.707V14.5a.5.5 0 0 1-.5.5z" 
                  fill-rule="evenodd"
                  transform="rotate(180 8 8)" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;