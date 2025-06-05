import React from 'react';

const SponsorSection: React.FC = () => {
  const sponsorOptions = [
    {
      type: 'Animes',
      price: 'R$ 4,00 por episódio ou R$ 45,00 por temporada (até 13 episódios) / 24 episódios por R$ 70,00',
      description: 'Patrocine sua série de anime favorita e tenha seu nome citado nas transmissões!',
      link: 'https://livepix.gg/reactanimepro',
    },
    {
      type: 'Filmes',
      price: 'R$ 30,00 por filme',
      description: 'Garanta a exibição do seu filme favorito',
      link: 'https://livepix.gg/reactanimepro',
    },
    {
      type: 'Desenhos',
      price: 'R$ 3,00 por episódio',
      description: 'Desenhos animados ocidentais e mais',
      link: 'https://livepix.gg/reactanimepro',
    },
    {
      type: 'Séries',
      price: 'R$ 7,00 por episódio',
      description: 'Suas séries live-action favoritas',
      link: 'https://livepix.gg/reactanimepro',
    },
    {
      type: 'Mangá/Manhwa/HQ',
      price: 'R$ 3,00 por capítulo',
      description: 'Conteúdo de leitura comentado',
      link: 'https://livepix.gg/reactanimepro',
    },
  ];

  return (
    <section id="sponsor" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-16">Como Patrocinar</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sponsorOptions.map((option, index) => (
            <div
              key={index}
              className="bg-background p-6 rounded-lg shadow-lg border border-primary/20 
                         hover:border-primary transition-all duration-300 transform 
                         hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold mb-2 text-primary">{option.type}</h3>
              <p className="text-lg font-bold mb-2">{option.price}</p>
              <p className="text-text-secondary mb-4">{option.description}</p>
              <a
                href={option.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-block w-full text-center"
              >
                Patrocinar {option.type}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4 text-text-secondary max-w-2xl mx-auto">
            Todos os patrocinadores terão seu nome mencionado durante as transmissões e nos vídeos gravados.
            Patrocinadores VIP recebem benefícios exclusivos!
          </p>
          <a
            href="https://livepix.gg/reactanimepro"
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Seja um Patrocinador VIP
          </a>
        </div>
      </div>
    </section>
  );
};

export default SponsorSection;
