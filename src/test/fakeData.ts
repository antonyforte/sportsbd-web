// Arquivo fakeData.js

interface Player{
    nome: string
    posicao: string
    nacionalidade: string
    time: string
  }


export function getFakePlayersData(): Promise<Player[]> {
    const fakeData = [
        {
          nome: 'Jogador 1',
          posicao: 'Atacante',
          nacionalidade: 'Brasileira',
          time: 'Time A',
        },
        {
          nome: 'Jogador 2',
          posicao: 'Meio-Campista',
          nacionalidade: 'Inglesa',
          time: 'Time B',
        },
        // Os jogadores 3 até 52 são adicionados aqui
      ];

      // Adicionando mais 50 jogadores ao array fakeData
      for (let i = 3; i <= 52; i++) {
        fakeData.push({
          nome: `Jogador ${i}`,
          posicao: `Posição ${i}`, // Pode substituir por posições reais se preferir
          nacionalidade: i % 2 === 0 ? 'Brasileira' : 'Inglesa', // Exemplo de alternância entre nacionalidades
          time: i % 2 === 0 ? 'Time A' : 'Time B', // Alternância entre dois times
        });
      }


    return new Promise((resolve) => {
      // Simulando um pequeno atraso de tempo para simular uma chamada assíncrona à API
      setTimeout(() => {
        resolve(fakeData);
      }, 1000); // Tempo de espera simulado de 1 segundo (1000 milissegundos)
    });
  }
