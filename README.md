# React Anime Pro 🎬

Uma plataforma web moderna para criadores de conteúdo de anime se conectarem com seu público e receberem patrocínios para seus conteúdos.

## 🌟 Funcionalidades

- **Patrocínio de Conteúdo**: Permite que espectadores patrocinem episódios, filmes e séries de anime específicos
- **Transmissão ao Vivo**: Player integrado da Twitch para conteúdo ao vivo
- **Fila de Conteúdo**: Sistema dinâmico de gerenciamento de conteúdo com acompanhamento de status
- **Integração Social**: Conectado com as principais plataformas sociais
- **Design Responsivo**: Tema escuro totalmente responsivo com detalhes em amarelo

## 🚀 Stack Tecnológico

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React Icons
- Papa Parse (leitura de CSV)

## 📦 Instalação

1. Clone o repositório
2. Instale as dependências:
```bash
npm install
```
3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

## 🏗️ Estrutura do Projeto

```
src/
├── components/         # Componentes React
│   ├── ContentSection/  # Componentes relacionados a conteúdo
│   ├── LiveSection/    # Componentes de transmissão ao vivo
│   └── ...            # Outros componentes
├── types/             # Definições de tipos TypeScript
├── App.tsx           # Componente principal da aplicação
└── main.tsx         # Ponto de entrada da aplicação
```

## 🎨 Sistema de Design

- **Cores**:
  - Fundo: `#0d1117`
  - Fundo dos Cards: `#161b22`
  - Primária (Amarelo): `#ffd21f`
  - Texto: `#f0f6fc`
  - Texto Secundário: `#8b949e`
  - Sucesso: `#2ea043`
  - Assistindo: `#1f6feb`
  - Fila: `#db6d28`

- **Tipografia**: Família de fontes Poppins
- **Componentes**: Componentes customizados com estilo consistente

## 📱 Design Responsivo

- Abordagem desktop-first
- Menu de navegação para mobile
- Layouts em grid responsivos
- Botões de redes sociais adaptáveis

## 🔄 Gerenciamento de Conteúdo

O aplicativo suporta dois métodos de carregamento de conteúdo:
1. Primário: Endpoint de API (configurável)
2. Alternativo: Arquivo CSV local (`public/conteudos.csv`)

## 🌐 Integração Social

Integrado com:
- WhatsApp
- Instagram
- YouTube
- Twitch
- Discord

## 🎥 Transmissão ao Vivo

- Player da Twitch embutido
- Integração com os vídeos mais recentes do YouTube
- Integração de chat em tempo real

## 📄 Licença

Licença MIT - fique à vontade para usar este projeto para seus próprios propósitos.

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para enviar um Pull Request.