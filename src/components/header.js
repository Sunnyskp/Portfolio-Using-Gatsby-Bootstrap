import React from "React"
import Logo from "../images/S-logo.png"
import { Navbar, Nav } from "react-bootstrap"
import "../css/header-style.css"

const Header = () => {
  return (
    <Navbar.Collapse id="responsive-navbar-nav" class="navbar-expand-lg">
      <Nav className="justify-content-between" activeKey="/home">
        <Nav.Item className="nav-menu">
          <Nav.Link className="nav-menu" href="/">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav-menu">
          <Nav.Link className="nav-menu" href="/portfolio">
            Portfolio
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav-menu">
          <Nav.Link className="nav-menu" href="/experience.js">
            Experience
          </Nav.Link>
        </Nav.Item>
        <Navbar.Brand className="nav-menu" href="/">
          <img src={Logo} className="logo-style" alt="" />
        </Navbar.Brand>
        <Nav.Item className="nav-menu">
          <Nav.Link className="nav-menu" href="/about.js">
            About Me
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav-menu">
          <Nav.Link className="nav-menu" href="/contact.js">
            Contact Me
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav-menu">
          <Nav.Link
            className="nav-menu"
            href="https://github.com/Sunnyskp"
            target="_blank"
          >
            GitHub
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  )
}
export default Header
