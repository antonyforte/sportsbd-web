import { z } from 'zod';
import axios from 'axios';
import fs from 'fs';

const teamSchema = z.object({
  sigla: z.string(),
  nome: z.string(),
});

async function getAndWriteTeams() {
  try {
    const response = await axios.get('URL_DO_SERVIDOR/times'); // Substitua pela URL correta
    const teams: unknown[] = response.data; // Supondo que 'response.data' é um array de times

    const validatedTeams = teams.map((team: unknown) => {
      try {
        return teamSchema.parse(team);
      } catch (error) {
        console.error('Erro de validação do time:', error);
        return null;
      }
    }).filter(Boolean);


    const formattedTeams: Record<string, string> = {};
    validatedTeams.forEach((team: any) => {
      formattedTeams[team.sigla] = team.nome;
    });


    const jsonData = JSON.stringify(formattedTeams, null, 2);
    fs.writeFileSync('caminho/para/o/arquivo/times.json', jsonData);
    console.log('Arquivo escrito com sucesso!');
  } catch (error) {
    console.error('Ocorreu um erro:', error);
  }
}


getAndWriteTeams();
