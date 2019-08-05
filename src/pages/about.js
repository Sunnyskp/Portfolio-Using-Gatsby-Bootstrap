import React from "React"
import { Card, CardDeck, Container } from "react-bootstrap"
import Layout from "../components/Layout"
import BG from "../images/problem-solved.png"

const About = () => {
  return (
    <Layout>
      <Card>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </Layout>
  )
}
export default About
