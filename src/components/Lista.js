import React, { Component } from 'react';
import { Media } from 'react-bootstrap'
import PostData from '../data/instrumentos.json'
import { Link } from 'react-router-dom';

class Lista extends Component{

    render() {
    return (
        <div>
            {PostData.instrumentos.map((instrumentos, id) => {
                
                return (
                    <Media className='center' key={id}>
                        <img
                            width={256}
                            height={256}
                            className="mr-3"
                            src={`/images/${instrumentos.imagen}`}
                            alt="Generic placeholder"
                        />
                        <Media.Body>
                            <Link to={{pathname:`producto/${instrumentos.id}`, state: {id: instrumentos.id}}}>{instrumentos.instrumento}</Link>
                            <p className='precio'>${instrumentos.precio}</p>
                            <div>
                                {instrumentos.costoEnvio === "G" ?
                                <p className='envio'> <img src="./images/camion.png" alt=""></img>Envió gratis a todo el pais!</p>
                                : <p className='costo'>Costo de Envio Interior de Argentina: ${instrumentos.costoEnvio}</p>}
                            </div>
                            <p>{instrumentos.cantidadVendida} vendidos</p>
                        </Media.Body>
                    </Media>
                )
            })}
        </div>
    )
    }
}

export default Lista