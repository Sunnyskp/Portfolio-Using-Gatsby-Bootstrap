import React from "React"
import Logo from "../images/S-logo.png"
import { Navbar, Nav } from "react-bootstrap"
import "../css/header-style.css"

const Header = () => {
  return (
    <Navbar fixed="top" bg="dark" variant="dark">
      <Nav className="mx-auto">
        <Nav.Link className="nav-menu" href="/">
          Home
        </Nav.Link>
        <Nav.Link className="nav-menu" href="/portfolio">
          Portfolio
        </Nav.Link>
        <Nav.Link className="nav-menu" href="/experience.js">
          Experience
        </Nav.Link>
        <Navbar.Brand href="/">
          <img src={Logo} className="logo-style" alt="" />
        </Navbar.Brand>
        <Nav.Link className="nav-menu" href="/about.js">
          About
        </Nav.Link>
        <Nav.Link className="nav-menu" href="/contact.js">
          Contact
        </Nav.Link>
        <Nav.Link
          className="nav-menu"
          href="https://www.linkedin.com/in/sunnyskp"
        >
          LinkedIn
        </Nav.Link>
      </Nav>
    </Navbar>
  )
}
export default Header
