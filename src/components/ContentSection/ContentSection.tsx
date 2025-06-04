import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import ContentCard from './ContentCard';
import ContentLoader from './ContentLoader';
import ContentError from './ContentError';
import { Content } from '../../types';

const ContentSection: React.FC = () => {
  const [contents, setContents] = useState<Content[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const loadContents = async () => {
    setLoading(true);
    setError(false);
    
    try {
      // First try to load from API (simulated with a timeout for error)
      // In a real app, you'd replace this with a fetch call to your actual API
      await new Promise(resolve => setTimeout(resolve, 1500));
      throw new Error('API not available'); // Simulating API failure
      
    } catch (e) {
      // If API fails, fallback to CSV file
      try {
        const response = await fetch('/conteudos.csv');
        if (!response.ok) throw new Error('Failed to fetch CSV');
        
        const csvText = await response.text();
        
        Papa.parse(csvText, {
          header: true,
          complete: (results) => {
            setContents(results.data as Content[]);
            setLoading(false);
          },
          error: () => {
            setError(true);
            setLoading(false);
          }
        });
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    loadContents();
  }, []);

  return (
    <section id="content" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-16">Conteúdo na Fila</h2>

        {loading ? (
          <ContentLoader />
        ) : error ? (
          <ContentError onRetry={loadContents} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contents.map((content, index) => (
              <ContentCard key={index} content={content} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ContentSection;