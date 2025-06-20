import React, { useState } from 'react';

// 👉 Aqui você edita os vídeos:
const youtubeVideos = [
  { id: 'D0apESlc6Ms' },
  { id: 'RDYVXb_HzS0' },
  { id: 'ocGI6FQ8wxI' },
  { id: 'fEDaMfSVpeE' },
  { id: 'Wk_PB5GSvNo' },
];

const LiveSection: React.FC = () => {
  const visibleCount = 3; // Quantos vídeos aparecem de cada vez no carrossel
  const [visibleStart, setVisibleStart] = useState(0);
  const [playingVideos, setPlayingVideos] = useState<string[]>([]);

  const prev = () => {
    setVisibleStart((old) => (old - 1 + youtubeVideos.length) % youtubeVideos.length);
  };

  const next = () => {
    setVisibleStart((old) => (old + 1) % youtubeVideos.length);
  };

  const getVisibleVideos = () => {
    const videos = [];
    for (let i = 0; i < visibleCount; i++) {
      videos.push(youtubeVideos[(visibleStart + i) % youtubeVideos.length]);
    }
    return videos;
  };

  const handlePlay = (videoId: string) => {
    setPlayingVideos((prev) => [...prev, videoId]);
  };

  const visibleVideos = getVisibleVideos();

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

        {/* Carrossel de vídeos YouTube com thumbnails */}
        <div className="bg-background p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-primary">Últimos Vídeos</h3>

          <div className="flex items-center space-x-2">
            <button
              onClick={prev}
              className="btn-secondary"
              aria-label="Vídeo anterior"
            >
              &#8592;
            </button>

            <div className="flex overflow-hidden w-[1000px] space-x-4">
              {visibleVideos.map((video, idx) => {
                const isPlaying = playingVideos.includes(video.id);
                return (
                  <div
                    key={`${video.id}-${idx}`}
                    className="w-[320px] h-[180px] flex-shrink-0 rounded-md overflow-hidden shadow relative cursor-pointer"
                    onClick={() => handlePlay(video.id)}
                  >
                    {isPlaying ? (
                      <iframe
                        loading="lazy"
                        width="320"
                        height="180"
                        src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                        title={`YouTube Video ${video.id}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <>
                        <img
                          src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                          alt={`Thumbnail do vídeo ${video.id}`}
                          width="320"
                          height="180"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white font-bold text-xl">
                          ▶
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>

            <button
              onClick={next}
              className="btn-secondary"
              aria-label="Próximo vídeo"
            >
              &#8594;
            </button>
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
