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
          <Card className=" mx-auto text-black text-center card-style head-shot-style">
            <Card.Body>
            <br/><br/><Image src={Sunny} className="head-shot" rounded />
            </Card.Body>
          </Card>
        </div>
        <div style={{alignContent:"center"}} class="col-sm col-md col-lg text-justify">
          <Card className=" mx-auto text-black text-left card-style head-shot-style">
            <Card.Body>
              <Card.Title>
              <br/><br/>
                <h1 className="text-dark">
                  {" "}
                  Sunny Krishnan Pillai{" "}
                </h1>
              </Card.Title>
              <Card.Text
                style={{
                  fontSize: "1.5em"}}
                border="primary"
                className=" rounded text-dark align-middle">
                Full-Stack Web-Developer | IT Operations Manager
               <div> 
                 <b>
                  <br />"I design and develop solutions that makes YOUR life
                  exciting and simple."
                </b>
                </div>
              </Card.Text>

              <Card.Text
                className="text-justify"
                style={{
                  paddingBottom: "1em",
                  fontSize: "1.35em",
                }}
              ><br />
                Over Eight Years of Experience with leading international
                organizations in the field of Information Technology, Web and
                Business Development. My aim is to Strive, Grow and Achieve the
                best of my performance through Hard Work with an organization
                providing All-Round Growth and venture into new technologies and
                seeking a Challenging Career in a progressive organization to
                Prove, Utilize and Enhance My Skills.
              </Card.Text>
              
                <a 
                  className="text-black text-center"
                  target="_blank"
                  href="https://www.linkedin.com/in/sunnyskp"
                >
               </a>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Layout>
  )
}

export default Home
