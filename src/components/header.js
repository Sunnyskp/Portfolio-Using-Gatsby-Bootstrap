import React from "React"
import Logo from "../images/S-logo.png"
import { Navbar, Nav } from "react-bootstrap"
import "../css/header-style.css"

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Nav className="mx-auto">
        <Nav.Link className="nav-menu" href="../pages/index.js">
          Home
        </Nav.Link>
        <Nav.Link className="nav-menu" href="../pages/portfolio.js">
          Portfolio
        </Nav.Link>
        <Nav.Link className="nav-menu" href="../pages/experience.js">
          Experience
        </Nav.Link>
        <Navbar.Brand href="#home">
          <img src={Logo} className="logo-style" alt="" />
        </Navbar.Brand>
        <Nav.Link className="nav-menu" href="../pages/aboutme.js">
          About Me
        </Nav.Link>
        <Nav.Link className="nav-menu" href="../pages/contact.js">
          Contact Me
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
