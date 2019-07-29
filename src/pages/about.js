import React from "React"
import { Card } from "react-bootstrap"
import Layout from "../components/Layout"
import BG from "../images/problem-solved.png"

const About = () => {
  return (
    <Layout>
      <Card className="bg-dark text-white justify-content-between">
        <Card.Img src={BG} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>Designer + Developer = Problem Solver</Card.Title>
          <Card.Text className="bg-dark text-white text-right justify-content-right col-5">
            Over 7 Years of Experience with leading international organizations
            in the fields of Information Technology and Business Development.
            Came in the University Toppers List and received Academic Excellence
            Award from School of Engineering and Information Technology -
            Manipal University Dubai Campus. Achieved Scholarship in every
            semester and passed out with an overall CGPA of 9.3 out of 10 for
            Bachelor of Engineering, Computer Science. Honesty, Loyalty and
            Professionalism shown in all aspects of career. Strong Team Player,
            Focus on Team & Individual Results, and Excellent Interpersonal &
            Behavioral Skills.
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </Layout>
  )
}
export default About
