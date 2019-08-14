import React from "react"
import Sunny from "../images/Sunny-Krishnan-Pillai.jpg"
import Layout from "../components/Layout"
import Card from "react-bootstrap/Card"
import Image from "react-bootstrap/Image"

import "bootstrap/dist/css/bootstrap.css"
import "../css/home-page-style.css"

const Home = () => {
  return (
    <Layout>
      <Card className=" mx-auto text-white text-right card-style head-shot-style">
        <Card.Body>
          <Image src={Sunny} className="head-shot" rounded />
          <br />
          <br />
          <Card.Title>
            <h1 className="text-light"> Sunny Krishnan Pillai </h1>
          </Card.Title>
          <Card.Text
            style={{
              paddingBottom: "0.5em",
              fontSize: "1.15em",
              textShadow: "0.1em 0.1em 0.1em #000",
            }}
            border="primary"
            className=" rounded text-light align-middle"
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
