import React from 'react';

export const categories = [
  {
    type: "Animes",
    custom: (
      <>
        <h3 className="text-xl font-bold mb-2 text-yellow-400 flex items-center gap-2">
          🎥 Animes
        </h3>
        <p className="text-white text-2xl font-bold mb-2">
          R$ 4 por episódio / R$ 45 por temporada
        </p>
        <p className="text-gray-300 mb-4">
          Até 13 episódios ou 24 episódios por R$ 70
        </p>
        <a
          href="https://livepix.gg/reactanimepro"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full border border-yellow-400 text-yellow-400 text-center py-2 rounded hover:bg-yellow-500 hover:text-black transition"
        >
          Patrocinar Animes
        </a>
      </>
    ),
  },
  {
    type: "Filmes",
    custom: (
      <>
        <h3 className="text-xl font-bold mb-2 text-yellow-400 flex items-center gap-2">
          🎬 Filmes
        </h3>
        <p className="text-white text-2xl font-bold mb-2">R$ 30,00 por filme</p>
        <p className="text-gray-300 mb-4">
          Garanta a exibição do seu filme favorito
        </p>
        <a
          href="#"
          className="block w-full border border-yellow-400 text-yellow-400 text-center py-2 rounded hover:bg-yellow-500 hover:text-black transition"
        >
          Patrocinar Filmes
        </a>
      </>
    ),
  },
  {
    type: "Desenhos",
    custom: (
      <>
        <h3 className="text-xl font-bold mb-2 text-yellow-400 flex items-center gap-2">
          🎨 Desenhos
        </h3>
        <p className="text-white text-2xl font-bold mb-2">R$ 3,00 por episódio</p>
        <p className="text-gray-300 mb-4">
          Desenhos animados ocidentais e mais
        </p>
        <a
          href="#"
          className="block w-full border border-yellow-400 text-yellow-400 text-center py-2 rounded hover:bg-yellow-500 hover:text-black transition"
        >
          Patrocinar Desenhos
        </a>
      </>
    ),
  },
  {
    type: "Séries",
    custom: (
      <>
        <h3 className="text-xl font-bold mb-2 text-yellow-400 flex items-center gap-2">
          📺 Séries
        </h3>
        <p className="text-white text-2xl font-bold mb-2">R$ 7,00 por episódio</p>
        <p className="text-gray-300 mb-4">Suas séries live-action favoritas</p>
        <a
          href="#"
          className="block w-full border border-yellow-400 text-yellow-400 text-center py-2 rounded hover:bg-yellow-500 hover:text-black transition"
        >
          Patrocinar Séries
        </a>
      </>
    ),
  },
  {
    type: "Mangá/Manhwa/HQ",
    custom: (
      <>
        <h3 className="text-xl font-bold mb-2 text-yellow-400 flex items-center gap-2">
          📖 Mangá/Manhwa/HQ
        </h3>
        <p className="text-white text-2xl font-bold mb-2">R$ 3,00 por capítulo</p>
        <p className="text-gray-300 mb-4">Conteúdo de leitura comentado</p>
        <a
          href="#"
          className="block w-full border border-yellow-400 text-yellow-400 text-center py-2 rounded hover:bg-yellow-500 hover:text-black transition"
        >
          Patrocinar Mangá/Manhwa/HQ
        </a>
      </>
    ),
  },
];
