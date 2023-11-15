import { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@/components/ui/table';
import { getFakePlayersData } from '@/test/fakeData'; // Importando a função para dados falsos

interface Player {
  nome: string;
  posicao: string;
  nacionalidade: string;
  time: string;
}

function PlayersTable() {
  const [playersData, setPlayersData] = useState<Player[]>([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        // Simulando dados recebidos do backend
        const fakeData = await getFakePlayersData();
        // Se os dados forem recebidos com sucesso, atualize o estado com os dados dos jogadores
        setPlayersData(fakeData);
      } catch (error) {
        console.error('Erro ao buscar jogadores:', error);
      }
    };

    // Chame a função para buscar os jogadores ao montar o componente
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
              <TableCell className='px-20 w-1/3' suppressHydrationWarning>{player.nome}</TableCell>
              <TableCell className='px-20 w-1/3' suppressHydrationWarning>{player.posicao}</TableCell>
              <TableCell className='px-20 w-1/3' suppressHydrationWarning>{player.nacionalidade}</TableCell>
              <TableCell className='px-20 w-1/3' suppressHydrationWarning>{player.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default PlayersTable;