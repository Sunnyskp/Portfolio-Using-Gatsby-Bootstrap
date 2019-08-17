import React from "React"
import Header from "./Header"
import Footer from "./Footer"
import { Container } from "react-bootstrap"
import "../css/layout.css"

const Layout = ({ children }) => {
  return (
    <div className="layout-style">
      <Container style={{ paddingTop: "1em", height: "100%" }}>
        <Header />
        <main>{children}</main>
        <Footer />
      </Container>
    </div>
  )
}
export default Layout
