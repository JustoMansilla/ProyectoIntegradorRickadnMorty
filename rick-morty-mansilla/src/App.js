import React from 'react';
import Header from './componentes/Header'
import Personajes from './componentes/Personajes'

import arrayRickAndMorty from './rickandmorty.json';

console.log(arrayRickAndMorty);

function App() {
  return (
    <div classNameNameName="App">
      <header classNameName="App-header">
          <div className="Header">
                <Header />
          </div>
      </header>

        <div className="grid-container">
          

           <ul>
          {
                  arrayRickAndMorty.map(function (personaje, idx) {
                    return(
                      <div key={ idx }>
                           <Personajes personaje={personaje} />
                      </div>
                    )
                  })
          }
          </ul>

          </div>


    </div>
  );
}

export default App;
