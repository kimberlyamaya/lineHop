import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// import bootstrap
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
      <Navbar bg="light">
        <Container>
          <Navbar.Brand>LineHop</Navbar.Brand>
        </Container>
      </Navbar>

  );
}

export default Header;
