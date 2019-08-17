import React from "React"
import { Navbar } from "react-bootstrap"

const Footer = () => {
  return (
    <Navbar sticky="bottom" variant="dark">
      <Navbar.Collapse>
        <Navbar.Text style={{ fontWeight: "bolder" }} className="text-muted">
          <em>&copy; 2019 Sunny Krishnan Pillai</em>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  )
}
export default Footer
