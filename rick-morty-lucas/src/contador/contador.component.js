
import React, {Component} from 'react'

export class ContadorComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            contador: 0
        }
    }

    cambiarContador(n) {
        this.setState({contador: n})
    }

    restar() {
        this.cambiarContador(this.state.contador - 1)
    }

    sumar() {
        this.cambiarContador(this.state.contador + 1)
    }

    resetear() {
        this.cambiarContador(this.state.contador = 0)
    }

    render() {
        return (
            <div  style={{margin: "20%"}}>
                <h3 style={{color: "black"}}>CONTADOR SUMA Y RESTA</h3>
                <a
                    
                    onClick={(event) => {
                    this.restar()
                }}> - </a>

                &nbsp;
                {this.state.contador}
                &nbsp;

                <a
                    
                    onClick={(event) => {
                    this.sumar()
                }}> + </a>

                <a
                    
                    onClick={(event) => {
                    this.resetear()
                }}> Reset </a>

            </div>
        )
    }
}