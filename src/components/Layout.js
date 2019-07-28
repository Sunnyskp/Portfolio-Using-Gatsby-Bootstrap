import React from "React"
import Header from "./Header"
import Footer from "./Footer"
import "../css/layout.css"

const Layout = ({ children }) => {
  return (
    <div className="container">
      <br />
      <Header className="container" />
      <br />
      <div>{children}</div>
      <br />
      <Footer className="container" />
    </div>
  )
}
export default Layout
