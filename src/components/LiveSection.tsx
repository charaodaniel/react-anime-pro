import React from 'react';

const LiveSection: React.FC = () => {
  return (
    <section id="live" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-16">Ao Vivo</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Twitch Player */}
          <div className="bg-background p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-primary">Twitch Stream</h3>
            <div className="aspect-video w-full">
              <iframe
                src="https://player.twitch.tv/?channel=oirobson&parent=hhttps://vercel.com/daniel-charao-machados-projects/react-anime-pro/6C4uNEugn1K9yAWSQtSuPng5oJJb/&autoplay=false&muted=true&theme=dark"
                frameBorder="0"
                allowFullScreen={true}
                scrolling="no"
                height="100%"
                width="100%"
                title="Twitch Stream"
                className="rounded-md"
              ></iframe>
            </div>
            <p className="mt-4 text-text-secondary text-sm">
              Transmissões ao vivo de segunda a sexta, 19h às 22h.
            </p>
          </div>

          {/* YouTube Latest Videos */}
          <div className="bg-background p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-primary">Últimos Vídeos</h3>
            <div className="aspect-video w-full">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/@ReactAnimePro"
                title="YouTube Video Player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-md"
              ></iframe>
            </div>
            <p className="mt-4 text-text-secondary text-sm">
              Novos vídeos toda semana! Inscreva-se para não perder nenhum conteúdo.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="mb-6 text-text-secondary">
            Siga nas redes sociais para ficar por dentro das próximas lives e lançamentos!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://twitch.tv/oirobson" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Seguir na Twitch
            </a>
            <a 
              href="https://www.youtube.com/@ReactAnimePro/featured" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Inscrever no YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveSection;