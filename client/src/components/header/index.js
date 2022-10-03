import React from 'react';
import { Link } from 'react-router-dom';


// import bootstrap
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { BsPersonCircle , BsFillBasket3Fill , BsSearch , BsJustify } from "react-icons/bs";

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <br>
        </br>
        <Container>
        <Navbar.Brand>LineHop</Navbar.Brand>
        <Nav className="nav-menu">
            {/* used link to sign in component */}
            <Nav.Link> <Link to="/signin"><BsPersonCircle /></Link></Nav.Link>
            <Nav.Link href="#host"><BsFillBasket3Fill /></Nav.Link>
            <Nav.Link href="#search"><BsSearch /></Nav.Link>
            <Nav.Link href="#hamburger-menu"><BsJustify /></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
  );
}

export default Header;
