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
      <div class="row">
        <div class="col-lg">
          <Card className=" mx-auto text-white text-center card-style head-shot-style">
            <Card.Body>
              <Image src={Sunny} className="head-shot" rounded />
            </Card.Body>
          </Card>
        </div>
        <div class="col-sm col-md col-lg text-justify">
          <Card className=" mx-auto text-white text-left card-style head-shot-style">
            <Card.Body>
              <Card.Title>
                <h1 className="text-light">
                  {" "}
                  <b>Sunny Krishnan Pillai</b>{" "}
                </h1>
              </Card.Title>
              <Card.Text
                style={{
                  fontSize: "1.15em",
                  textShadow: "0.1em 0.1em 0.1em #000",
                }}
                border="primary"
                className=" rounded text-light align-middle"
              >
                <b>Full Stack Web-Developer | IT Manager</b>
                <br />

                <b>
                  "I design and develop solutions that makes people's lives
                  exciting and simple."
                </b>
              </Card.Text>

              <Card.Text
                className="text-justify"
                style={{
                  paddingBottom: "1em",
                  fontSize: "1.15em",
                  fontStyle: "italic",
                }}
              >
                Over 7 Years of Experience with leading international
                organizations in the field of Information Technology, Web and
                Business Development. My aim is to Strive, Grow and Achieve the
                best of my performance through Hard Work with an organization
                providing All-Round Growth and venture into new technologies and
                seeking a Challenging Career in a progressive organization to
                Prove, Utilize and Enhance My Skills.
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
        </div>
      </div>
    </Layout>
  )
}

export default Home
