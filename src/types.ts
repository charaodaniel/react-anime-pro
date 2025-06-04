export interface Content {
  title: string;
  type: string;
  episodes: string;
  sponsor: string;
  status: 'completed' | 'watching' | 'queue';
}

export interface ContentCardProps {
  content: Content;
}