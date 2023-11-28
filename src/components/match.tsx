import React from 'react';
import '@/app/match.css'; // Nome do arquivo CSS onde as estilizações estão contidas

interface MatchComponentProps{
    time_casa: string;
    time_fora: string;
    gols_casa: string;
    gols_fora: string;
    logo_casa: string;
    logo_fora: string;
}


const MatchComponent: React.FC<MatchComponentProps> = ({time_casa, time_fora, gols_casa, gols_fora, logo_casa, logo_fora}) => {
    return(
      <div className="container">
        <div className="match">
          <div className="match-header align-middle justify-center items-center">
            <div className="match-tournament ">
              Brasileirão Série A 2023
            </div>
          </div>
          <div className="match-content">
            <div className="column">
              <div className="team team--home">
                <div className="team-logo">
                  <img src={logo_casa} alt="Team Logo" />
                </div>
                <h2 className="team-name">{time_casa}</h2>
              </div>
            </div>

            <div className="column">
              <div className="match-details">
                <div className="match-date">
                  12 Aug at <strong>19:00</strong>
                </div>
                <div className="match-score">
                  <span className="match-score-number match-score-number--leading">{gols_casa}</span>
                  <span className="match-score-divider">:</span>
                  <span className="match-score-number">{gols_fora}</span>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="team team--away">
                <div className="team-logo">
                  <img src={logo_fora} alt="Team Logo" />
                </div>
                <h2 className="team-name">{time_fora}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default MatchComponent;
