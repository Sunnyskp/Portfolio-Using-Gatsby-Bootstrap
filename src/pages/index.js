import React from "react"
import Sunny from "../images/Sunny-Krishnan-Pillai.jpg"
// import BG from "../images/problem-solved.png"
import Layout from "../components/Layout"
import Card from "react-bootstrap/Card"
import Image from "react-bootstrap/Image"

import "bootstrap/dist/css/bootstrap.css"
import "../css/home-page-style.css"

const Home = () => {
  return (
    <Layout>
      <Card className="text-white text-center card-style">
        <Card.Body>
          <Image src={Sunny} className="head-shot" rounded />
          <br />
          <br />
          <Card.Title>
            <h1>Sunny Krishnan Pillai</h1>
          </Card.Title>
          <Card.Text
            style={{
              fontStyle: "italic",
              textShadow: "0.1px 0.1px #000000",
              backgroundColor: "#FFFFFF70",
            }}
            border="primary"
            className="rounded text-dark align-middle"
          >
            <b>Full Stack Web-Developer | Software Engineer | IT Manager</b>
            <br />
            <b>
              "I design and develop solutions that makes people's lives exciting
              and simple."
            </b>
          </Card.Text>
          <button type="button" className="btn btn-dark">
            <a
              className="text-white text-center"
              target="_blank"
              href="https://www.linkedin.com/in/sunnyskp"
            >
              <b>VIEW RESUME</b>
            </a>
          </button>
        </Card.Body>
      </Card>
    </Layout>
  )
}

export default Home
