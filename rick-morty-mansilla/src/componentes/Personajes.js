import React from 'react';

function Personajes(props) {
    return(
        <React.Fragment> 
        
            
            <img src={props.personaje.image} alt="" />

            <h5>
                {props.personaje.name}
            </h5>
            <p>
            {props.personaje.status}

            </p>
            <p>
            {props.personaje.species}

            </p>
            <p>
                Origin: 
            {props.personaje.origin.name}

            </p>

        </React.Fragment>
    );
}

export default Personajes;