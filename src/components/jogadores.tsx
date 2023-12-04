import { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@/components/ui/table';
import { getFakePlayersData } from '@/test/fakeData';
import { MagicCard } from '@/components/magic-Card'
import axios from 'axios';

interface Player {
  nome: string;
  apelido: string;
  posicao: string;
  foto: string;
  time_nome: string;
  time_complemento: string;
  time_anterior: string;
  data_nascimento: string;
  nacionalidade: string;
  suspenso: boolean;
}

function PlayersTable() {
  const [playersData, setPlayersData] = useState<Player[]>([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {

        const response = await axios.get<Player[]>('http://localhost:3333/jogadores')
        const jogadores = response.data
        setPlayersData(jogadores);
      } catch (error) {
        console.error('Erro ao buscar jogadores:', error);
      }
    };

    fetchPlayers();
  }, []);

  return (
    <div className='min-h-screen flex flex-col w-full h-full'>
      <Table className='w-full border-collapse table-cell flex flex-col'>
        <TableHead>
          <TableRow>
            <TableCell className='px-20 w-1/3'>Nome</TableCell>
            <TableCell className='px-20 w-1/3'>Posição</TableCell>
            <TableCell className='px-20 w-1/3'>Nacionalidade</TableCell>
            <TableCell className='px-20 w-1/3'>Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {playersData.map((player) => (
            <TableRow key={player.nome}>
              <TableCell className='px-20 w-1/3 ' suppressHydrationWarning>{player.nome}</TableCell>
              <TableCell className='px-20 w-1/3' suppressHydrationWarning>{player.posicao}</TableCell>
              <TableCell className='px-20 w-1/3' suppressHydrationWarning><img src={player.nacionalidade} /></TableCell>
              <TableCell className='px-20 w-1/3' suppressHydrationWarning>{player.time_nome}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default PlayersTable;
