import React from "react"
import { Card } from "react-bootstrap"
import DuraUSA from "../images/df.com.png"
import DuraCanada from "../images/df.ca.png"
import ArgUSA from "../images/arg.com.png"
import ArgCanada from "../images/arg.ca.png"
import OptiCanada from "../images/opti.ca.png"
import OptiUSA from "../images/opti.com.png"
import ABCMovies from "../images/ABCMovielogo.png"
import Layout from "../components/Layout"
import Nav from "react-bootstrap/Nav"

import "bootstrap/dist/css/bootstrap.css"
import "../css/portfolio-style.css"

const Portfolio = () => {
  return (
    <Layout>
      <div>
        <Card bg="dark" text="white">
          <Card.Body>
            <h1>Websites managed by me</h1>
          </Card.Body>
        </Card>

        <br />
        <div className="container">
          <div className="row">
            <div className="card-deck">
              <div className="card">
                <img
                  rounded
                  className="card-img rounded-top"
                  src={DuraCanada}
                  alt="Card img cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Durafastlabel.ca</h5>
                  <p className="card-text">
                    DuraFast specializes in serving the "do-it-yourself" label
                    printing market both for industrial and product label
                    printing. Recognizing the advanced capabilities of modern
                    high speed and high resolutions color label printers, we
                    realized that traditional label stock doesn't always measure
                    up.
                  </p>
                </div>
                <div className="card-footer">
                  <a
                    href="https://www.durafastlabel.ca"
                    className="stretched-link"
                    target="_blank"
                  >
                    <em>Go to Durafastlabel.ca</em>
                  </a>
                </div>
              </div>
              <div className="card">
                <img
                  rounded
                  className="card-img rounded-top"
                  src={ArgCanada}
                  alt="Card img cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Argonstore.ca</h5>
                  <p className="card-text">
                    At our one-stop store, you will find high-performance label
                    printing solutions that can contribute to your item packing,
                    increase productivity, and save you both time and money.We
                    are ready to supply you with top-notch commercial and
                    industrial label printers in Canada and beyond.
                  </p>
                </div>
                <div className="card-footer">
                  <a
                    href="https://www.argonstore.ca"
                    className="stretched-link"
                    target="_blank"
                  >
                    <em>Go to Argonstore.ca</em>
                  </a>
                </div>
              </div>
              <div className="card">
                <img
                  rounded
                  className="card-img rounded-top"
                  src={OptiCanada}
                  alt="Card img cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Optimedialabs.ca</h5>
                  <p className="card-text">
                    Optimedia Labs opens the door to a myriad of new
                    opportunities for business owners, manufacturers, and
                    retailers. We know how to highlight your brand identity and
                    erect a commercial bridge between customers and your
                    company. At our store, you have a chance to buy colour label
                    printers from manufacturers that have already made names for
                    themselves in the industry.
                  </p>
                </div>
                <div className="card-footer">
                  <a
                    href="https://www.optimedialabs.ca"
                    className="stretched-link"
                    target="_blank"
                  >
                    <em>Go to Optimedialabs.ca</em>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="card-deck">
              <div className="card">
                <img
                  rounded
                  className="card-img rounded-top"
                  src={DuraUSA}
                  alt="Card img cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Durafastlabel.com</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
              <div className="card">
                <img
                  rounded
                  className="card-img rounded-top"
                  src={ArgUSA}
                  alt="Card img cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Argonstore.com</h5>
                  <p className="card-text">
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
              <div className="card">
                <img
                  rounded
                  className="card-img rounded-top"
                  src={OptiUSA}
                  alt="Card img cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Optimedialabs.com</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Nav className="Navbar Navbar-dark bg-dark">
          <span className="Navbar-brand text-centered mb-0 h1">
            My Projects
          </span>
        </Nav>
        <div className="container">
          <div className="row">
            <div className="card-deck">
              <div className="card">
                <img
                  rounded
                  className="card-img rounded-top"
                  src={ABCMovies}
                  alt="Card img cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
              <div className="card">
                <img
                  rounded
                  className="card-img rounded-top"
                  src={ABCMovies}
                  alt="Card img cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
              <div className="card">
                <img
                  rounded
                  className="card-img rounded-top"
                  src={ABCMovies}
                  alt="Card img cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="card-deck">
              <div className="card">
                <img
                  rounded
                  className="card-img rounded-top"
                  src={ABCMovies}
                  alt="Card img cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
              <div className="card">
                <img
                  rounded
                  className="card-img rounded-top"
                  src={ABCMovies}
                  alt="Card img cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
              <div className="card">
                <img
                  rounded
                  className="card-img rounded-top"
                  src={ABCMovies}
                  alt="Card img cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Portfolio
