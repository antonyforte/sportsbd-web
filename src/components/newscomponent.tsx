import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface NewsItem {
  cacheId: string;
  link: string;
  title: string;
  pagemap: { cse_thumbnail: { src: string }[] };
}

const NewsComponent = () => {
  const [newsResults, setNewsResults] = useState<NewsItem[]>([]);

  const apiKey = process.env.APIKEY;
  const searchEngineId = process.env.SEARCHENGINEID;

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
    <div className="bg-black text-orange-500 p-8">
      <h1 className="text-3xl font-bold mb-4">Notícias do Campeonato Brasileiro</h1>
      <ul className="list-none p-0">
        {newsResults.map((item) => (
          <li key={item.cacheId} className="mb-8">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold hover:underline block mb-2"
            >
              {item.title}
            </a>
            {item.pagemap?.cse_thumbnail?.length > 0 && (
              <img
                src={item.pagemap.cse_thumbnail[0].src}
                alt="Imagem relacionada à notícia"
                className="w-40 h-auto rounded"
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsComponent;
