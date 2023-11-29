import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Certifique-se de instalar o axios: npm install axios

interface NewsItem {
  cacheId: string;
  link: string;
  title: string;
  // Outros campos conforme os dados retornados pela API
}

const NewsComponent = () => {
  const [newsResults, setNewsResults] = useState<NewsItem[]>([]);

  const apiKey = 'AIzaSyDqCJZJQ8XSP0BouOSEq5IVbcpJSgHLDO8';
  const searchEngineId = 'a5bb93fb6a998499f';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/customsearch/v1?q=Campeonato+Brasileiro&cx=${searchEngineId}&key=${apiKey}`
        );
        setNewsResults(response.data.items);
      } catch (error) {
        console.error('Erro ao buscar notícias:', error);
      }
    };

    fetchData();
  }, [apiKey, searchEngineId]);

  return (
    <div style={{ backgroundColor: 'black', color: 'orange', padding: '20px' }}>
      <h1>Notícias do Campeonato Brasileiro</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {newsResults.map((item) => (
          <li key={item.cacheId} style={{ marginBottom: '15px' }}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'orange', textDecoration: 'none' }}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsComponent;
