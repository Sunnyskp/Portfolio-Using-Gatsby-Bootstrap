import React from "React"
import { Card, ListGroup } from "react-bootstrap"
import Layout from "../components/Layout"

const About = () => {
  return (
    <Layout>
      <Card>
        <Card.Body>
          <Card.Title>
            Full Stack Web-Developer | IT Administrator | E-commerce Business
            Development | Software Engineer
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Toronto, Canada Area
          </Card.Subtitle>
          <Card.Text>
            <h5>Skills</h5>
            <ListGroup>
              <ListGroup.Item>
                HTML5, CSS, Vanilla Java Script (ES6){" "}
              </ListGroup.Item>
              <ListGroup.Item>
                CSS Frameworks - Bootstrap, Bulma, SASS.
              </ListGroup.Item>
              <ListGroup.Item>
                Node JS, React, Gatsby, Express, Handlebars, Express-handlebars.{" "}
              </ListGroup.Item>
              <ListGroup.Item>
                MongoDB, API Consumption & Creation, GitHub, Bit-Bucket, Visual
                Studio Code, Atom
              </ListGroup.Item>
              <ListGroup.Item>
                Prototyping and Designing Using Adobe Creative suites products
                such as Photoshop, Illustrator, XD, AfterEffects, DreamWeaver.
              </ListGroup.Item>
            </ListGroup>
          </Card.Text>
          <Card.Text>
            <h5>Qualifications</h5>
            <ListGroup>
              <ListGroup.Item>
                Web Design & Development - Certificate of Achievement from
                Humber College Institute of Technology - Toronto ON - Canada
                (2019).
              </ListGroup.Item>
              <ListGroup.Item>
                Bachelor of Engineering, Computer Science from Manipal
                University Dubai Campus - United Arab Emirates (2010-2014).
              </ListGroup.Item>
              <ListGroup.Item>
                Management and Accounting from Madurai Kamaraj University Dubai
                - UAE (2009 - 2010).
              </ListGroup.Item>
              <ListGroup.Item>
                Higher Secondary / Secondary Education in ISC/ICSE - Central
                Syllabus from top ranked schools in Kerala - India (1997 -
                2009).
              </ListGroup.Item>
            </ListGroup>
          </Card.Text>
        </Card.Body>
      </Card>
    </Layout>
  )
}
export default About
