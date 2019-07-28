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
      {/* <div className="hero-image">
        <div className="hero-text">
          <Image src={Sunny} className="head-shot" rounded />
          <h1>Sunny K Pillai</h1>
          <p>
            <b>Full Stack Web-Developer | Software Engineer | IT Manager</b>
          </p>
          <p>
            <em>
              "I design and develop solutions that makes people's lives exciting
              and simple. Currently managing 6+ live e-Commerce websites. I have
              more than 7 years of experience with leading international
              organizations in the field of Information Technology and Business
              Development."
            </em>
          </p>
          <button type="button" className="btn btn-info">
            Download Resume
          </button>
        </div>
      </div> */}

      <Card className="bg-light text-dark text-center font-weight-bold">
        <Card.ImgOverlay>
          <Image src={Sunny} className="head-shot" rounded />
          <Card.Title>
            <h1>Sunny K Pillai</h1>
          </Card.Title>
          <Card.Text class="align-self-end">
            <p>
              <b>Full Stack Web-Developer | Software Engineer | IT Manager</b>
            </p>
            <em>
              "I design and develop solutions that makes people's lives exciting
              and simple. Currently managing 6+ live e-Commerce websites. I have
              more than 7 years of experience with leading international
              organizations in the field of Information Technology and Business
              Development."
            </em>
          </Card.Text>
          <button type="button" className="btn btn-info">
            Download Resume
          </button>
        </Card.ImgOverlay>
      </Card>
    </Layout>
  )
}

export default Home
