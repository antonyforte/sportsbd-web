import { Table, TableBody, TableCell, TableHead, TableRow } from '@/components/ui/table';
import { useEffect, useState } from 'react';
import { getFakeTransfersData } from "@/test/fakeDataII";

interface Transfer {
    avatar: string;
    nome: string;
    posicao: string;
    idade: string;
    nacionalidade: string;
    timeOrigem: string;
    escudotimeOrigem: string;
    timeDestino: string;
    escudotimeDestino: string;
}

function TransferTable() {
    const [transfersData, setTransfersData] = useState<Transfer[]>([]);

    useEffect(() => {
      const fetchTransfers = async () => {
        try {
          console.log('Fetching transfer...')
          const fakeDataII = await getFakeTransfersData();
          setTransfersData(fakeDataII);
        } catch (error) {
          console.error('Erro ao buscar jogadores:', error);
        }
      };

      fetchTransfers();
    }, []);

    return(
        <div className='min-h-screen flex flex-col w-full h-full'>
        <Table className='w-full border-collapse table-cell flex flex-col'>
          <TableHead>
            <TableRow>
              <TableCell className='px-20 w-1/3'>Jogadores</TableCell>
              <TableCell className='px-20 w-1/3'>Idade</TableCell>
              <TableCell className='px-20 w-1/3'>Nacionalidade</TableCell>
              <TableCell className='px-20 w-1/3'>Origem</TableCell>
              <TableCell className='px-20 w-1/3'>Destino</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transfersData.map((transfer) => (
              <TableRow key={transfer.nome}>
                <TableCell className='px-20 w-1/3' suppressHydrationWarning><img src={transfer.avatar} alt="avatar arthur" className='w-20 h-15 px-4'/> {transfer.nome} {transfer.posicao}</TableCell>
                <TableCell className='px-20 w-1/3' suppressHydrationWarning>{transfer.idade}</TableCell>
                <TableCell className='px-20 w-1/3' suppressHydrationWarning><img src={transfer.nacionalidade} /></TableCell>
                <TableCell className='px-20 w-1/3' suppressHydrationWarning><img src={transfer.escudotimeOrigem} />{transfer.timeOrigem}</TableCell>
                <TableCell className='px-20 w-1/3' suppressHydrationWarning><img src={transfer.escudotimeDestino} />{transfer.timeDestino}</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )
    }

export default TransferTable
