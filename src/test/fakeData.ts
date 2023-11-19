

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

      ];


      for (let i = 3; i <= 52; i++) {
        fakeData.push({
          nome: `Jogador ${i}`,
          posicao: `Posição ${i}`,
          nacionalidade: i % 2 === 0 ? 'Brasileira' : 'Inglesa',
          time: i % 2 === 0 ? 'Time A' : 'Time B',
        });
      }


    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(fakeData);
      }, 1000);
    });
  }
