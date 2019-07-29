import React from "React"
import { Card } from "react-bootstrap"
import Layout from "../components/Layout"

const About = () => {
  return (
    <Layout>
      <Card border="primary">
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Primary Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </Layout>
  )
}
export default About
