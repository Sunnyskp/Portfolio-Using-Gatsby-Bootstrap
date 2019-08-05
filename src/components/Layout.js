import React from "React"
import Header from "./Header"
import Footer from "./Footer"
import { Container } from "react-bootstrap"
import "../css/layout.css"

const Layout = ({ children }) => {
  return (
    <div>
      <Container>
        <Header />
        <main>{children}</main>
      </Container>
      <Footer />
    </div>
  )
}
export default Layout
