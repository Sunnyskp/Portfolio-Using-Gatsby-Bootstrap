import React from "React"
import { Navbar } from "react-bootstrap"

const Footer = () => {
  return (
    <Navbar sticky="bottom" variant="dark">
      <Navbar.Collapse>
        <Navbar.Text className="text-light text-right">
          <em>&copy; 2019 Sunny Krishnan Pillai</em>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  )
}
export default Footer
