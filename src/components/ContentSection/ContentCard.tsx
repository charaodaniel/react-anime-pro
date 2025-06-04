import React from 'react';
import { ContentCardProps } from '../../types';

const ContentCard: React.FC<ContentCardProps> = ({ content }) => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <span className="status-badge status-completed">✅ Completo</span>;
      case 'watching':
        return <span className="status-badge status-watching">▶ Assistindo</span>;
      case 'queue':
      default:
        return <span className="status-badge status-queue">⏳ Na fila</span>;
    }
  };

  return (
    <div className="bg-background p-5 rounded-lg shadow-md border border-card 
                   hover:border-primary transition-all duration-300">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold">{content.title}</h3>
        {getStatusBadge(content.status)}
      </div>
      
      <div className="text-text-secondary mb-3">
        <p>{content.type} {content.episodes && `• ${content.episodes} episódio(s)`}</p>
      </div>
      
      {content.sponsor && (
        <div className="bg-primary/10 p-2 rounded-md">
          <span className="text-sm font-medium">
            Patrocinado por: <span className="text-primary">{content.sponsor}</span>
          </span>
        </div>
      )}
    </div>
  );
};

export default ContentCard;