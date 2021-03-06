import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <>
           <Navbar expand="lg" bg="light" variant="light">
    <Container>
    <Navbar.Brand style={{ fontWeight: '700', textDecoration: 'none', fontSize: '1rem',color:'WindowFrame',backgroundColor:'MenuText',padding:'2px' }} href="#home">Learn To Love</Navbar.Brand>
    <Nav className="ms-auto">
      <Nav.Link style={{ fontWeight: '700', textDecoration: 'none', fontSize: '1rem' }} href="#home">Home</Nav.Link>
      <Nav.Link style={{ fontWeight: '700', textDecoration: 'none', fontSize: '1rem' }} href="#features">All Courses</Nav.Link>
      <Nav.Link style={{ fontWeight: '700', textDecoration: 'none', fontSize: '1rem' }} href="#services">Contact Us</Nav.Link>
      <Nav.Link style={{ fontWeight: '700', textDecoration: 'none', fontSize: '1rem' }} href="#login">Log in</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </>
    );
};

export default Header;