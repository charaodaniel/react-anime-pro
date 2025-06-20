import React, { useEffect, useState } from 'react';

const youtubeVideos = [
  'https://www.youtube.com/embed/ABC12345678', // Vídeo 1
  'https://www.youtube.com/embed/DEF98765432', // Vídeo 2
  'https://www.youtube.com/embed/GHI45678901', // Vídeo 3
  'https://www.youtube.com/embed/JKL32165498', // Vídeo 4
];

const LiveSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % youtubeVideos.length);
    }, 5000); // Troca a cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="live" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-16">Ao Vivo</h2>

        {/* Twitch Player + Chat */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Twitch Player */}
          <div className="bg-background p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-primary">Twitch Stream</h3>
            <div className="aspect-video w-full">
              <iframe
                src="https://player.twitch.tv/?channel=oirobson&parent=react-anime-pro.vercel.app&autoplay=false&muted=true&theme=dark"
                frameBorder="0"
                allowFullScreen
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

          {/* Twitch Chat */}
          <div className="bg-background p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-primary">Twitch Chat</h3>
            <div className="aspect-video w-full">
              <iframe
                src="https://www.twitch.tv/embed/oirobson/chat?parent=react-anime-pro.vercel.app"
                frameBorder="0"
                scrolling="no"
                height="100%"
                width="100%"
                title="Twitch Chat"
                className="rounded-md"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Player Fixo do YouTube */}
        <div className="bg-background p-4 rounded-lg shadow-lg mb-12">
          <h3 className="text-xl font-semibold mb-4 text-primary">Último Vídeo no YouTube</h3>
          <div className="w-[320px] h-[180px] mx-auto">
            <iframe
              width="100%"
              height="100%"
              src={youtubeVideos[currentIndex]}
              title={`YouTube Video ${currentIndex + 1}`}
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

        {/* Carrossel Automático de Outros Vídeos */}
        <div className="bg-background p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-primary">Outros Vídeos</h3>

          <div className="aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src={youtubeVideos[currentIndex]}
              title={`YouTube Video ${currentIndex + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-md"
            ></iframe>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center mt-4 space-x-2">
            {youtubeVideos.map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-400'
                }`}
              ></span>
            ))}
          </div>
        </div>

        {/* Redes Sociais */}
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
