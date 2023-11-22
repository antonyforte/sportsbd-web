

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


export function getFakeTransfersData(): Promise<Transfer[]> {
  console.log('Fetching fake transfers data...')
    const fakeDataII = [
        {
            avatar: "https://img.a.transfermarkt.technology/portrait/header/440658-1543844997.jpg?lm=1",
            nome: "Artur",
            posicao: "ATA",
            idade: "25",
            nacionalidade: "https://tmssl.akamaized.net/images/flagge/verysmall/26.png?lm=1520611569",
            timeOrigem: "Red Bull Bragantino",
            escudotimeOrigem: "https://tmssl.akamaized.net/images/wappen/head/8793.png?lm=1577915313",
            timeDestino: "Palmeiras",
            escudotimeDestino: "https://tmssl.akamaized.net/images/wappen/head/1023.png?lm=1411204983",
        },
        {
            avatar: "teste",
            nome: "teste",
            posicao: "teste",
            idade: "teste",
            nacionalidade: "teste",
            timeOrigem: "teste",
            escudotimeOrigem: "teste",
            timeDestino: "teste",
            escudotimeDestino: "teste",
        },

      ];


      for (let i = 3; i <= 10; i++) {
        fakeDataII.push({
            avatar: "teste",
            nome: "teste",
            posicao: "teste",
            idade: "teste",
            nacionalidade: "teste",
            timeOrigem: "teste",
            escudotimeOrigem: "teste",
            timeDestino: "teste",
            escudotimeDestino: "teste",
        });
      }


    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Resolving fake transfers data: ',fakeDataII)
        resolve(fakeDataII);
      }, 1000);
    });
  }
