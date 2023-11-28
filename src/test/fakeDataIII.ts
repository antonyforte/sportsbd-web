export interface MatchData {
    rodada: string
    time_casa: string;
    time_fora: string;
    gols_casa: string;
    gols_fora: string;
    logo_casa: string;
    logo_fora: string;
    // Outros campos, se houver
  }

  export function getFakeMatchData(): Promise<MatchData[]> {
    console.log('Fetching fake match data...');

    const fakeDataIII: MatchData[] = [
      {
        rodada: "1",
        time_casa: "Time A",
        time_fora: "Time B",
        gols_casa: "2",
        gols_fora: "1",
        logo_casa: "https://example.com/logo_time_a.png",
        logo_fora: "https://example.com/logo_time_b.png",
      },
      // Adicione mais dados de partidas aqui conforme necessário
    ];

    // Simulando mais dados de partidas
    for (let i = 0; i < 5; i++) {
      fakeDataIII.push({
        rodada: `${i}`,
        time_casa: `Time ${i}`,
        time_fora: `Time ${i + 1}`,
        gols_casa: `${Math.floor(Math.random() * 5)}`,
        gols_fora: `${Math.floor(Math.random() * 5)}`,
        logo_casa: `https://example.com/logo_time_${i}.png`,
        logo_fora: `https://example.com/logo_time_${i + 1}.png`,
      });
    }

    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Resolving fake match data: ', fakeDataIII);
        resolve(fakeDataIII);
      }, 1000);
    });
  }
