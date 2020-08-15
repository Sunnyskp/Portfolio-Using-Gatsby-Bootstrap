import React from "React"
import Logo from "../images/S-logo.png"
import { Navbar, Nav } from "react-bootstrap"
import "../css/header-style.css"

const Header = () => {
  return (
    <Navbar.Brand className="d-block headerstyle">
      <Nav
        id="responsive-navbar-nav"
        className="justify-content-between"
        activeKey="/home"
      >
        <Nav.Item className="nav-menu logo-style-nav-mobile">
          <Nav.Link className="nav-menu-link" href="/">
            <img src={Logo} className="logo-style" alt="" />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item
          border="primary"
          className="nav-menu "
        >
          <Nav.Link className="nav-menu-link" href="/">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item
          border="primary"
          className="nav-menu "
        >
          <Nav.Link className="nav-menu-link" href="/portfolio">
            Portfolio
          </Nav.Link>
        </Nav.Item>
        <Nav.Item
          border="primary"
          className="nav-menu "
        >
          <Nav.Link className="nav-menu-link" href="/services">
            Services
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav-menu logo-style-nav-desktop">
          <Nav.Link className="nav-menu-link" href="/">
            <img src={Logo} className="logo-style" alt="" />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item
          border="primary"
          className="nav-menu "
        >
          <Nav.Link className="nav-menu-link" href="/about">
            About Me
          </Nav.Link>
        </Nav.Item>
        <Nav.Item
          border="primary"
          className="nav-menu"
        >
          <Nav.Link className="nav-menu-link" href="/contact">
            Contact Me
          </Nav.Link>
        </Nav.Item>
        <Nav.Item
          border="primary"
          className="nav-menu "
        >
          <Nav.Link
            className="nav-menu-link"
            href="https://github.com/Sunnyskp"
            target="_blank"
          >
            GitHub
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <hr
        style={{ fontStyle: "italic", height: 4, backgroundColor: "#FFFFFF97" }}
        border="primary"
        className="rounded"
      />
    </Navbar.Brand>
  )
}
export default Header
