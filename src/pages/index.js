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
          <Card.Subtitle className="mb-2">
            <b>Full Stack Web-Developer | Software Engineer | IT Manager</b>
          </Card.Subtitle>
          <Card.Text>
            "I design and develop solutions that makes people's lives exciting
            and simple."
          </Card.Text>
          <button type="button" className="btn btn-info">
            <a
              className="text-white text-center"
              target="_blank"
              href="https://www.linkedin.com/in/sunnyskp"
            >
              Download Resume
            </a>
          </button>
        </Card.Body>
      </Card>
    </Layout>
  )
}

export default Home
