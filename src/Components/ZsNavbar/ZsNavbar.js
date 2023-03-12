import React from 'react';
import {Container, Navbar, Nav, NavDropdown  } from 'react-bootstrap';
import {Link, NavLink} from 'react-router-dom';
import styles from './ZsNavbar.module.css';
import classNames from 'classnames';

const ZsNavbar = () => {
    return (
        <>
            <Navbar bg="white" className="shadow-sm" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand as={Link} to="/" className={classNames(styles.zLogo)}>Zainab</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <NavLink to="/" className={classNames('nav-link', styles.zNavLink)}>Home</NavLink>
                    <NavLink to="/about" className={classNames('nav-link', styles.zNavLink)}>About</NavLink>
                    <NavLink to="/blogs" className={classNames('nav-link', styles.zNavLink)}>Blogs</NavLink>
                    <NavLink to="/contact" className={classNames('nav-link', styles.zNavLink)}>Contact</NavLink>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    );
};

export default ZsNavbar;