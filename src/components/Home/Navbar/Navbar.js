import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../images/logo.png";

const Header = () => {
  const activeMenu = {
    borderBottom: "2px solid #ffdf1b",
    color: "#ffdf1b !important",
  };
  return (
    <Navbar className="navbar-bg" expand="lg">
      <div className="container">
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="" className="img-fluid" width="100px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} exact activeStyle={activeMenu} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} activeStyle={activeMenu} to="/about">
              About Us
            </Nav.Link>
            <Nav.Link as={NavLink} activeStyle={activeMenu} to="/project">
              Projects
            </Nav.Link>
            <Nav.Link as={NavLink} activeStyle={activeMenu} to="/contact">
              Contact
            </Nav.Link>
            <Nav.Link as={NavLink} activeStyle={activeMenu} to="/admin">
              Admin
            </Nav.Link>
            <Nav.Link as={NavLink} activeStyle={activeMenu} to="/login">
              <Button>Login</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
