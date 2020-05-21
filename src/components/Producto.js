import React, { Component } from 'react'
import { Media, Button } from 'react-bootstrap'
import PostData from '../data/instrumentos.json'

class Producto extends Component {

    render() {
        const {id} = this.props.location.state
        return (
            <div>
                <Media>
                    <img
                        width={512}
                        height={512}
                        className="foto"
                        src={`../images/${PostData.instrumentos[id-1].imagen}`}
                        alt="Generic placeholder"
                    />
                    <Media.Body className='lineaVertical'>
                        <div className='texto'>
                        <h5 className='vendidos'>{PostData.instrumentos[id-1].cantidadVendida} vendidos</h5>
                        <p className='articulo'>{PostData.instrumentos[id-1].instrumento}</p>
                        <p className='precio'>${PostData.instrumentos[id-1].precio}</p>
                        <p className='modeloCosto'>Marca: {PostData.instrumentos[id-1].marca}</p>
                        <p className='modeloCosto'>Modelo: {PostData.instrumentos[id-1].modelo}</p>
                        <div>
                                {PostData.instrumentos[id-1].costoEnvio === "G" ?
                                <p className='envio'> <img src="../images/camion.png" alt=""></img>Envió gratis a todo el pais!</p>
                                : <p className='costo'>Costo de Envio Interior de Argentina: ${PostData.instrumentos[id-1].costoEnvio}</p>}
                            </div>
                        <Button variant="outline-primary">Agregar al Carrito</Button>
                        </div>
                    </Media.Body>
                </Media>
                <p className='descripcion'>Descripcion:</p>
                <p className='descripcion'>{PostData.instrumentos[id-1].descripcion}</p>
            </div>
        )
    }
}
export default Producto