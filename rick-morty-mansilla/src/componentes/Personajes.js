import React from 'react';

function Personajes(props) {
    return(
        <React.Fragment> 
        
            <img src={props.personaje.image} alt="" />

            <h4>
                {props.personaje.name}
            </h4>

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