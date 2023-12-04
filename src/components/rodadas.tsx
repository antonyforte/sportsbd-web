import { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@/components/ui/table';
import { getFakeMatchData } from '@/test/fakeDataIII';
import PlayersTable from './PlayersTable';

interface Match {
  rodada: string
  time_casa: string;
  time_fora: string;
  gols_casa: string;
  gols_fora: string;
  logo_casa: string;
  logo_fora: string;
}

function MatchTable() {
  const [matchData, setMatchData] = useState<Match[]>([]);

  useEffect(() => {
    const fetchMatch = async () => {
      try {

        const fakeDataIII = await getFakeMatchData();
        setMatchData(fakeDataIII);
      } catch (error) {
        console.error('Erro ao buscar jogadores:', error);
      }
    };

    fetchMatch();
  }, []);

  return (
    <div className='min-h-screen flex flex-col w-full h-full'>
      <Table className='w-full border-collapse table-cell flex flex-col'>
        <TableHead>
        </TableHead>
        <TableBody>
          {matchData.map((match) => (
            <TableRow key={match.rodada}>
              <TableCell className='px-20 w-1/3' suppressHydrationWarning>{match.time_casa}</TableCell>
              <TableCell className='px-20 w-1' suppressHydrationWarning>{match.gols_casa}</TableCell>
              <TableCell className='px-20 w-1' suppressHydrationWarning>X</TableCell>
              <TableCell className='px-20 w-1/3' suppressHydrationWarning>{match.gols_fora}</TableCell>
              <TableCell className='px-20 w-1/3' suppressHydrationWarning>{match.time_fora} </TableCell>
              <TableCell className='px-20 w-1/3' suppressHydrationWarning>Adicional Info</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default MatchTable;
