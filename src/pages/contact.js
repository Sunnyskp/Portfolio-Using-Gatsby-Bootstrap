import React from "React"
import { Card, CardDeck, Container, Row, Col, Image } from "react-bootstrap"
import LinkedIn from "../images/Linkedin.svg"
import Facebook from "../images/Facebook.svg"
import GitHub from "../images/Github.svg"
import Layout from "../components/Layout"

const Contact = () => {
  return (
    <Layout>
      <br />
      <Card
        border="primary"
        style={{
          backgroundColor: "#f2f2f2",
        }}
        className="text-center text-dark"
      >
        <Card.Header className="text-center text-dark">
          <h4>
            <b> Have a question or want to work together?</b>
          </h4>
        </Card.Header>
        <Card.Body>
          <CardDeck>
            <Card className="text-dark" border="primary">
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
                            width: "13em",
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
                    className="nav-menu text-dark"
                    target="_blank"
                    href="https://www.linkedin.com/in/sunnyskp"
                  >
                    LinkedIn
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card border="primary">
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
                            width: "13em",
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
                    className="nav-menu text-dark"
                    href="https://github.com/Sunnyskp"
                    target="_blank"
                  >
                    GitHub
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="text-dark" border="primary">
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
                            width: "13em",
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
                    className="nav-menu text-dark"
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
          <Card.Text className="text-dark">
            <h5>
              If you wanna get in touch, talk to me about a project
              collaboration or just say hi, send an email to{" "}
              <em>skp2june@gmail.com</em>.
            </h5>
          </Card.Text>
        </Card.Footer>
      </Card>
    </Layout>
  )
}
export default Contact
