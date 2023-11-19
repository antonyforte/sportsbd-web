import React from 'react'

export function MagicCard(){

      return (
        <>
          <style>
            {`
              @property --rotate {
                syntax: "<angle>";
                initial-value: 132deg;
                inherits: false;
              }
              :root {
                --card-height: 12vh;
                --card-width: calc(var(--card-height) * 50.0 );
              }
              .card {

                background: #191c29;
                width: var(--card-width);
                height: var(--card-height);
                padding: 3px;
                position: relative;
                border-radius: 6px;
                justify-content: center;
                align-items: center;
                text-align: center;
                display: flex;
                font-size: 1.5em;
                color: rgb(88 199 250 / 0%);
                cursor: pointer;
                font-family: cursive;
                h
              }

              .card:hover {
                color: rgb(88 199 250 / 100%);
                transition: color 1s;
              }
              .card:hover:before, .card:hover:after {
                animation: none;
                opacity: 0;
              }


              .card::before {
                content: "";
                width: 106%;
                height: 100%;
                border-radius: 0px;
                background-image: linear-gradient(
                  var(--rotate)
                  , #ffa500, #ff2500 43%, #a500ff);
                  position: absolute;
                  z-index: -1;
                  top: 2%;
                  left: -3.2%;
                  animation: spin 2.5s linear infinite;
              }

              .card::after {
                position: absolute;
                content: "";
                top: calc(var(--card-height) / 6);
                left: 0;
                right: 0;
                z-index: -1;
                height: 100%;
                width: 100%;
                margin: 0 auto;
                transform: scale(0.8);
                filter: blur(calc(var(--card-height) / 6));
                background-image: linear-gradient(
                  var(--rotate)
                  , #ffa500, #ff2500 43%, #a500ff);
                  opacity: 1;
                transition: opacity .5s;
                animation: spin 2.5s linear infinite;
              }

              @keyframes spin {
                0% {
                  --rotate: 0deg;
                }
                100% {
                  --rotate: 360deg;
                }
              }

              a {
                color: #212534;
                text-decoration: none;
                font-family: sans-serif;
                font-weight: bold;
                margin-top: 2rem;
              }
            `}
          </style>
          <div className="card">
            <p className="text-orange-600 text-xl gap-8">Antonio Caio Davi Evaldo Gustavo</p>
          </div>
        </>
      );
    };
