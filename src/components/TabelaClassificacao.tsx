import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Time {
  nome: string;
  escudo?: string;
  vitorias: number;
  empates: number;
  derrotas: number;
}

const TabelaClassificacao: React.FC = () => {
  const [times, setTimes] = useState<Time[]>([]);

  useEffect(() => {
    async function fetchTimes() {
      try {
        const response = await axios.get<Time[]>('http://localhost:3333/times');
        setTimes(response.data);
      } catch (error) {
        console.error('Erro ao buscar os times:', error);
      }
    }

    fetchTimes();
  }, []);

  const calcularPontos = (vitorias: number, empates: number): number => {
    return vitorias * 3 + empates;
  };

  const classificarTimes = (): Time[] => {
    const timesComPontos = times.map((time) => ({
      ...time,
      pontos: calcularPontos(time.vitorias, time.empates),
    }));
    const timesCopy = [...timesComPontos];
    return timesCopy.sort((a, b) => {
      return calcularPontos(b.vitorias, b.empates) - calcularPontos(a.vitorias, a.empates);
    });
  };

  const timesOrdenados = classificarTimes();

  return (
    <div className="bg-black text-orange-500">
      <h1 className="text-3xl font-bold mb-4">Tabela de Classificação</h1>
      <table className="w-full">
        <thead>
          <tr>
            <th className="py-2 text-center">Posição</th>
            <th className="py-2 text-center">Time</th>
            <th className="py-2 text-center">Pontos</th>
            <th className="py-2 text-center">Vitórias</th>
            <th className="py-2 text-center">Empates</th>
            <th className="py-2 text-center">Derrotas</th>
          </tr>
        </thead>
        <tbody>
          {timesOrdenados.map((time, index) => (
            <tr key={time.nome}>
              <td className="py-2 text-center">{index + 1}</td>
              <td className="py-2 text-center">
                {time.escudo && <img src={time.escudo} alt={time.nome} className="h-8 w-8 mr-2 inline-block" />}
                {time.nome}
              </td>
              <td className="py-2 text-center">{calcularPontos(time.vitorias, time.empates)}</td>
              <td className="py-2 text-center">{time.vitorias}</td>
              <td className="py-2 text-center">{time.empates}</td>
              <td className="py-2 text-center">{time.derrotas}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelaClassificacao;
