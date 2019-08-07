import React from "React"
import { Card, CardDeck, Container, Row, Col, Image } from "react-bootstrap"
import LinkedIn from "../images/Linkedin.svg"
import Facebook from "../images/Facebook.svg"
import GitHub from "../images/Github.svg"
import Layout from "../components/Layout"

const Contact = () => {
  return (
    <Layout>
      <Card
        border="primary"
        style={{
          background: "none",
        }}
        className="text-center text-white"
      >
        <Card.Header
          style={{
            textShadow:
              "1px 1px 2px rgb(0, 0, 0), 0 0 1em rgb(0, 22, 218), 0 0 0.2em rgb(0, 0, 110)",
          }}
          className="text-center text-light"
        >
          <h4>
            <b> Have a question or want to work together?</b>
          </h4>
        </Card.Header>
        <Card.Body>
          <CardDeck>
            <Card style={{ backgroundColor: "#FFFFFF75" }} border="primary">
              <Card.Body>
                <Container>
                  <Row>
                    <Col className="text-center">
                      <a
                        className="nav-menu"
                        target="_blank"
                        href="https://www.linkedin.com/in/sunnyskp"
                      >
                        <Image
                          src={LinkedIn}
                          style={{
                            width: "12em",
                            padding: "0.25em",
                          }}
                          rounded
                        />
                      </a>
                    </Col>
                  </Row>
                </Container>
                <Card.Text className="text-light">
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
            <Card style={{ backgroundColor: "#FFFFFF75" }} border="primary">
              <Card.Body>
                <Container>
                  <Row>
                    <Col className="text-center">
                      <a
                        className="nav-menu"
                        href="https://github.com/Sunnyskp"
                        target="_blank"
                      >
                        <Image
                          style={{
                            width: "12em",
                            padding: "0.25em",
                          }}
                          src={GitHub}
                          rounded
                        />
                      </a>
                    </Col>
                  </Row>
                </Container>
                <Card.Text className="text-light">
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
            <Card style={{ backgroundColor: "#FFFFFF75" }} border="primary">
              <Card.Body>
                <Container>
                  <Row>
                    <Col className="text-center">
                      <a
                        className="nav-menu"
                        href="https://www.facebook.com/skp.sunny"
                        target="_blank"
                      >
                        <Image
                          style={{
                            width: "12em",
                            padding: "0.25em",
                          }}
                          src={Facebook}
                          rounded
                        />
                      </a>
                    </Col>
                  </Row>
                </Container>
                <Card.Text className="text-light">
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
          <Card.Text
            style={{
              textShadow:
                "1px 1px 2px rgb(0, 0, 0), 0 0 1em rgb(0, 22, 218), 0 0 0.2em rgb(0, 0, 110)",
            }}
            className="text-light"
          >
            <h5>
              If you wanna get in touch, talk to me about a project
              collaboration or just say hi, send an email to{" "}
              <em>contact@sunnyskp.ca</em>, call me at
              <em> +1 (437) 772 3637</em> and ~let's talk.
            </h5>
          </Card.Text>
        </Card.Footer>
      </Card>
    </Layout>
  )
}
export default Contact
