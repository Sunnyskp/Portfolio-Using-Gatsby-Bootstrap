import React from "react"
import Header from "./header"
import Footer from "./Footer"
import { Container } from "react-bootstrap"
import "../css/layout.css"

const Layout = ({ children }) => {
  return (
    <div className="layout-style">
      <Header />
      <Container
        style={{
          paddingTop: "1em",
        }}
      >
        <main>{children}</main>
        <Footer />
      </Container>
    </div>
  )
}
export default Layout
