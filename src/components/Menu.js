import React, { Component } from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Menu extends Component {

    render() {

        return (
            <Navbar sticky="top" bg="primary" variant="dark">
                <Navbar.Brand>Musical Hendrix</Navbar.Brand>
                <Nav className="menu">
                    <Link className="link" to="/home">Home</Link>
                    <Link className="link" to="/dondeEstamos">Donde Estamos</Link>
                    <Link className="link" to="/lista">Productos</Link>
                </Nav>
            </Navbar>
        )
    }
}

export default Menu