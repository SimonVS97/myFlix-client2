import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export function Menubar(props) {

  const user = props.user;

  const onLoggedOut = () => {
    localStorage.clear();
    window.open("/", "_self");
  }

  const isAuth = () => {
    // test if the script is being run in a web-browser or not
    if (typeof window == "undefined") {
      return false;
    }
    if (localStorage.getItem("token")) {
      return localStorage.getItem("token");
    } else {
      return false;
    }
  };

  return (
    <Navbar sticky='top'>
      <Container>
        <Navbar.Brand>myFlix-Cinema</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            {isAuth() && (
              <Nav.Link href={'/users/${user}'}>{user}</Nav.Link>
            )}
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Profile-View</Nav.Link>
            <Nav.Link>Sign Up</Nav.Link>
            <Nav.Link>Sign Out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
} 