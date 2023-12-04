import React from 'react';
import '@/app/magic.css'; // Nome do arquivo CSS onde as estilizações estão contidas

function CardzinComNomes() {
  const handleHover = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.currentTarget.classList.add('animate');
  };

  const handleAnimationEnd = (event: React.AnimationEvent<HTMLDivElement>) => {
    event.currentTarget.classList.remove('animate');
  };

  return (
      <article className="article" onMouseEnter={handleHover} onAnimationEnd={handleAnimationEnd}>
        <h1>
            <span>Antonio </span>
            <span>Caio </span>
            <span>Davi </span>
            <span>Evaldo </span>
            <span>Gustavo </span>
            <span>João</span>
        </h1>

      </article>
  );
}

export default CardzinComNomes;
