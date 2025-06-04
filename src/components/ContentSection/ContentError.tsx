import React from 'react';

interface ContentErrorProps {
  onRetry: () => void;
}

const ContentError: React.FC<ContentErrorProps> = ({ onRetry }) => {
  return (
    <div className="text-center py-12">
      <div className="text-5xl mb-4">😢</div>
      <h3 className="text-xl font-semibold mb-4">Ops! Não conseguimos carregar os conteúdos</h3>
      <p className="mb-6 text-text-secondary">
        Ocorreu um erro ao carregar a lista de conteúdos. Por favor, tente novamente.
      </p>
      <button 
        onClick={onRetry}
        className="btn-primary"
      >
        Tentar novamente
      </button>
    </div>
  );
};

export default ContentError;