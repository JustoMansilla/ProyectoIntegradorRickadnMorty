import React from 'react';
import Header from './componentes/Header'
import Personajes from './componentes/Personajes'
import Footer from './componentes/Footer'

import arrayRickAndMorty from './rickandmorty.json';

console.log(arrayRickAndMorty);

function App() {
  return (
    <div classNameNameName="App">
      <header className="App-header">
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

          <footer className="Footer">
              <Footer />
          </footer>


    </div>
  );
}

export default App;
