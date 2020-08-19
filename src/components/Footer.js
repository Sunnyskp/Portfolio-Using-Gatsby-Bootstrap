import React from "React"
import { Navbar } from "react-bootstrap"

const Footer = () => {
  return (
    <Navbar sticky="bottom" variant="dark">
      <Navbar.Collapse>
        <Navbar.Text className="text-dark">
          &copy;  2020 Sunny Krishnan Pillai
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  )
}
export default Footer
