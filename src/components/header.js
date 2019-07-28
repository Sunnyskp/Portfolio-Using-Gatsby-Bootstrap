import React from "React"
import Logo from "../images/S-logo.png"
import { Navbar, Nav } from "react-bootstrap"
import "../css/header-style.css"

const Header = () => {
  return (
    // <div class="container">
    //   <Navbar.Collapse id="responsive-navbar-nav">
    //     <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
    //       <Nav className="mx-auto">
    //         <Nav.Link className="nav-menu" href="/">
    //           Home
    //         </Nav.Link>
    //         <Nav.Link className="nav-menu" href="/portfolio">
    //           Portfolio
    //         </Nav.Link>
    //         <Nav.Link className="nav-menu" href="/experience.js">
    //           Experience
    //         </Nav.Link>
    //         <Navbar.Brand href="/">
    //           <img src={Logo} className="logo-style" alt="" />
    //         </Navbar.Brand>
    //         <Nav.Link className="nav-menu" href="/about.js">
    //           About
    //         </Nav.Link>
    //         <Nav.Link className="nav-menu" href="/contact.js">
    //           Contact
    //         </Nav.Link>
    //         <Nav.Link
    //           className="nav-menu"
    //           href="https://www.linkedin.com/in/sunnyskp"
    //         >
    //           LinkedIn
    //         </Nav.Link>
    //       </Nav>
    //     </Navbar>
    //   </Navbar.Collapse>
    // </div>
    // <div>
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
            href="https://www.linkedin.com/in/sunnyskp"
            target="_blank"
          >
            LinkedIn
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  )
}
export default Header
