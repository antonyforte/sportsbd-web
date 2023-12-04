import React, { useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import LeagueTable from "@/table/react-league-table/components/league-table/index";
import axios from "axios";


const EditedTable: React.FC = () => {
  useEffect(() => {
    async function fetchDataAndWriteTeams(){
      try{
        await axios.get('/api/parser')
      } catch(error){
        console.error('Failed to parser teams',error)
      }
    }
  })
  return (
    <MainWrapper>
      <TableWrapper>
        <Title >
          Campeonato Brasileiro 2023
        </Title>
        <div>
          <LeagueTable />
        </div>
      </TableWrapper>
    </MainWrapper>
  );
};

const Title = styled.h1`
  font-size: 1.5em;
  margin: 0;
`;

const TableWrapper = styled.div`
  text-align: center;
  background-color: #360037;
  color: white;
  border-radius: 3px;
  height:100%;

`;

const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('/static/champion2017-bg.jpg') no-repeat center center fixed;
  background-size: cover;
  font-family: PremierLeagueSans;
  font-weight: 300;
  padding: 5em 0;
  min-height: calc(100vh - 10em);
`;

export default EditedTable;
