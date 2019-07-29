import React from "React"
import { Card, CardDeck, Container } from "react-bootstrap"
import Layout from "../components/Layout"
import BG from "../imageS/problem-solved.png"

const About = () => {
  return (
    <Layout>
      <Card
        style={{ background: "none", border: "0" }}
        className="bg-dark text-white"
      >
        <Card.ImgOverlay>
          <Card.Text>
            <Container>
              <CardDeck>
                <Card style={{ background: "none", border: "0" }}>
                  <Card.Img src={BG} alt="Card image" />
                </Card>
                <Card style={{ background: "none", border: "0" }}>
                  <Card.Body>
                    <Card.Title>I am, Web Developer!</Card.Title>
                    <br />
                    <Card.Text>
                      Over 7 Years of Experience with leading international
                      organizations in the fields of Information Technology and
                      Business Development. Came in the University Toppers List
                      and received Academic Excellence Award from School of
                      Engineering and Information Technology - Manipal
                      University Dubai Campus. Achieved Scholarship in every
                      semester and passed out with an overall CGPA of 9.3 out of
                      10 for Bachelor of Engineering, Computer Science. Honesty,
                      Loyalty and Professionalism shown in all aspects of
                      career. Strong Team Player, Focus on Team & Individual
                      Results, and Excellent Interpersonal & Behavioral Skills.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardDeck>
            </Container>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </Layout>
  )
}
export default About
