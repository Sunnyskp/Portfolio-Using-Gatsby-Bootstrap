import React from "React"
import { Card, CardDeck, Container, Row, Col, Image } from "react-bootstrap"
import LinkedIn from "../images/Linkedin.svg"
import Facebook from "../images/Facebook.svg"
import GitHub from "../images/Github.svg"
import Layout from "../components/Layout"

const Contact = () => {
  return (
    <Layout>
      <Card bg="info" className="text-center text-white">
        <Card.Header>
          <h1>Have a question or want to work together?</h1>
        </Card.Header>
        <Card.Body>
          <CardDeck>
            <Card bg="light" className="text-light">
              <Card.Body>
                <Container>
                  <Row>
                    <Col className="text-center">
                      <a
                        className="nav-menu"
                        target="_blank"
                        href="https://www.linkedin.com/in/sunnyskp"
                      >
                        <Image src={LinkedIn} rounded />
                      </a>
                    </Col>
                  </Row>
                </Container>
                <Card.Text>
                  <a
                    className="nav-menu"
                    target="_blank"
                    href="https://www.linkedin.com/in/sunnyskp"
                  >
                    LinkedIn
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card bg="light" className="text-light">
              <Card.Body>
                <Container>
                  <Row>
                    <Col className="text-center">
                      <a
                        className="nav-menu"
                        href="https://github.com/Sunnyskp"
                        target="_blank"
                      >
                        <Image src={GitHub} rounded />
                      </a>
                    </Col>
                  </Row>
                </Container>
                <Card.Text>
                  <a
                    className="nav-menu"
                    href="https://github.com/Sunnyskp"
                    target="_blank"
                  >
                    GitHub
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card bg="light" className="text-light">
              <Card.Body>
                <Container>
                  <Row>
                    <Col className="text-center">
                      <a
                        className="nav-menu"
                        href="https://www.facebook.com/skp.sunny"
                        target="_blank"
                      >
                        {" "}
                        <Image src={Facebook} rounded />
                      </a>
                    </Col>
                  </Row>
                </Container>
                <Card.Text>
                  <a
                    className="nav-menu"
                    href="https://www.facebook.com/skp.sunny"
                    target="_blank"
                  >
                    Facebook
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </Card.Body>
        <Card.Footer>
          <Card.Text>
            If you wanna get in touch, talk to me about a project collaboration
            or just say hi, send an email to{" "}
            <em>
              {" "}
              <strong>contact@sunnyskp.ca</strong>
            </em>{" "}
            and ~let's talk.
          </Card.Text>
        </Card.Footer>
      </Card>
    </Layout>
  )
}
export default Contact
