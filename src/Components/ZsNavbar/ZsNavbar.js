import React from 'react';
import {Container, Navbar, Nav, NavDropdown  } from 'react-bootstrap';
import {Link, NavLink} from 'react-router-dom';
import styles from './ZsNavbar.module.css';

const ZsNavbar = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">Zainab Studio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <NavLink to="/" className="nav-link">Home</NavLink>
                    <NavLink to="/about" className="nav-link">About</NavLink>
                    <NavLink to="/blogs" className="nav-link">Blogs</NavLink>
                    <NavLink to="/contact" className="nav-link">Contact</NavLink>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    );
};

export default ZsNavbar;