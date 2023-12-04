import { z } from 'zod';
import axios from 'axios';
import fs from 'fs';

const teamSchema = z.object({
  complemento: z.string(),
  nome: z.string(),
});

export async function getAndWriteTeams() {
  try {
    const response = await axios.get('http://localhost:3333/times'); // Substitua pela URL correta
    const teams: unknown[] = response.data;

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
      formattedTeams[team.complemento] = team.nome;
    });


    const jsonData = JSON.stringify(formattedTeams, null, 2);
    fs.writeFileSync('src/table/react-league-table/data/team-mapping.json', jsonData);
    console.log('Arquivo escrito com sucesso!');
  } catch (error) {
    console.error('Ocorreu um erro:', error);
  }
}


getAndWriteTeams();
