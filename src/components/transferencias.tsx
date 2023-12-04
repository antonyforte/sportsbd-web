import { useEffect, useState } from 'react';
import axios from 'axios';

interface Jogador {
  apelido: string;
  dataNascimento: string;
  nacionalidade: string;
  time_anterior: string;
  time_nome: string;
  foto: string; // URL da foto do jogador
  idade: string;
}

interface Time {
  nome: string;
  escudo?: string;
}

function JogadoresComponent() {
  const [jogadores, setJogadores] = useState<Jogador[]>([]);
  const [times, setTimes] = useState<Time[]>([]);

  useEffect(() => {
    const fetchJogadores = async () => {
      try {
        const response = await axios.get<Jogador[]>('http://localhost:3333/jogadores');
        setJogadores(response.data);
      } catch (error) {
        console.error('Erro ao buscar jogadores:', error);
      }
    };

    const fetchTimes = async () => {
      try {
        const response = await axios.get<Time[]>('http://localhost:3333/times');
        setTimes(response.data);
      } catch (error) {
        console.error('Erro ao buscar times:', error);
      }
    };

    fetchJogadores();
    fetchTimes();
  }, []);



  const getEscudoTime = (nomeTime: string): string | undefined => {
    const timeEncontrado = times.find((time) => time.nome === nomeTime);
    return timeEncontrado?.escudo;
  };

  return (
    <div className="bg-black text-orange-500">
      <h1 className="text-3xl font-bold mb-4">Jogadores</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-black">
            <th className="py-2 px-4 text-orange-500">Foto</th>
            <th className="py-2 px-4 text-orange-500">Apelido</th>
            <th className="py-2 px-4 text-orange-500">Idade</th>
            <th className="py-2 px-4 text-orange-500">Nacionalidade</th>
            <th className="py-2 px-4 text-orange-500">Time Anterior</th>
            <th className="py-2 px-4 text-orange-500">Time Atual</th>
          </tr>
        </thead>
        <tbody>
          {jogadores.map((jogador, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-700'}>
              <td className="py-2 px-4 text-center">
                <img src={jogador.foto} alt="Foto do Jogador" className="w-8 h-8 rounded-full inline-block" />
              </td>
              <td className="py-2 px-4">{jogador.apelido}</td>
              <td className="py-2 px-4 text-center">{jogador.idade}</td>
              <td className="py-2 px-4">{jogador.nacionalidade}</td>
              <td className="py-2 px-4 text-center">
                {jogador.time_anterior &&
                  getEscudoTime(jogador.time_anterior) && (
                    <img
                      src={getEscudoTime(jogador.time_anterior)!}
                      alt="Escudo Time Anterior"
                      className="w-8 h-8 inline-block mr-2"
                    />
                  )}
                {jogador.time_anterior}
              </td>
              <td className="py-2 px-4">{jogador.time_nome}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default JogadoresComponent;
