import React, {Component} from 'react'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

class NavigationBar extends Component{
    render(){
        return(
            <div>
                    <Navbar bg="light" expand="lg" style={{color:"#222831"}}>
        <Navbar.Brand href="home">Efeler Diyarı Aydın</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="dogalguzellikler">Doğal Güzellikler</Nav.Link>
            <Nav.Link href="tarihiyerler">Tarihi Yerler</Nav.Link>
            <Nav.Link href="aktiviteler">Aktiviteler</Nav.Link>
            <Nav.Link href="slider">Slider</Nav.Link>
            <Nav.Link href="guessgame">Guess Game</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
        )
    }
}
export default NavigationBar;