import React from "react"
import { Card } from "react-bootstrap"
import DuraUSA from "../images/df.com.png"
import DuraCanada from "../images/df.ca.png"
import ArgUSA from "../images/arg.com.png"
import ArgCanada from "../images/arg.ca.png"
import OptiCanada from "../images/opti.ca.png"
import OptiUSA from "../images/opti.com.png"
import ABCMovies from "../images/ABCMovielogo.png"
import WOW from "../images/wow-logo.png"
import RDF from "../images/Newfb-logo.png"
import PL from "../images/s-logo-card.png"
import LEA from "../images/LEA.png"
import Layout from "../components/Layout"

import "bootstrap/dist/css/bootstrap.css"
import "../css/portfolio-style.css"

const Portfolio = () => {
  return (
    <Layout>
      <Card
        style={{
          textShadow: "0.02em 0.02em 0.1em #000",
          backgroundColor: "#F2F2F2",
        }}
        className="rounded text-light text-left"
      >
        <Card.Body>
          <h4 className="text-dark">
            <b>Projects Developed By Me</b>
          </h4>
        </Card.Body>
      </Card>

      <div className="container">
        <div className="row">
          <div className="card-deck">
            <div className="card">
              <img rounded className="card-img" src={WOW} alt="Card img cap" />
              <div className="card-body">
                <h5 className="card-title">World of Wonders(WOW)</h5>
                <p className="card-text text-justify">
                  WOW is a travel website that allows people to book rooms
                  around the world. It is developed using languages and
                  frameworks like NodeJS, Express, MongoDB,
                  Express-HandleBars...etc.
                </p>
              </div>
              <div className="card-footer">
                <a
                  href="https://www.wow.sunnyskp.ca"
                  className="stretched-link"
                  target="_blank"
                >
                  <em>Go to World of Wonders (WOW)</em>
                </a>
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
                <h5 className="card-title">ABCMovies</h5>
                <p className="card-text text-justify">
                  ABC Movies is a simple REST API movie website that provides
                  capsule information about 100s of movies across north America.
                  All movies data and information are fetched from the free
                  TheMovieDB’s Now Playing API.
                </p>
              </div>
              <div className="card-footer">
                <a
                  href="https://www.abcmovies.sunnyskp.ca"
                  className="stretched-link"
                  target="_blank"
                >
                  <em>Go to ABCMovies</em>
                </a>
              </div>
            </div>
            <div className="card">
              <img
                rounded
                className="card-img rounded-top"
                src={PL}
                alt="Card img cap"
              />
              <div className="card-body">
                <h5 className="card-title">My Portfolio</h5>
                <p className="card-text text-justify">
                  This is my portfolio website and this website is developed
                  using frameworks such as React, GatsbyJS, Bootstrap,
                  React-Bootstrap ...etc.
                </p>
              </div>
              <div className="card-footer">
                <a
                  href="https://www.sunnyskp.ca"
                  className="stretched-link"
                  target="_blank"
                >
                  <em>Go to My Portfolio</em>
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
                src={RDF}
                alt="Card img cap"
              />
              <div className="card-body">
                <h5 className="card-title">Redesigned - Facebook</h5>
                <p className="card-text text-justify">
                  This was my humble attempt to redesign facebook layout to make
                  use of the visible window of a screen completely.
                </p>
              </div>
              <div className="card-footer">
                <a
                  href="https://www.redesignfacebook.sunnyskp.ca"
                  className="stretched-link"
                  target="_blank"
                >
                  <em>Go to Redesigned-Facebook</em>
                </a>
              </div>
            </div>
            <div className="card">
              <img
                rounded
                className="card-img rounded-top"
                src={LEA}
                alt="Card img cap"
              />
              <div className="card-body">
                <h5 className="card-title">Label Expert Academy(LEA)</h5>
                <p className="card-text text-justify">
                  LEA aim to provide all the necessary information and material
                  descriptions for label print media solutions of various sizes,
                  shapes and material types. Its developed using only HTML and
                  CSS styling.
                </p>
              </div>
              <div className="card-footer">
                <a
                  href="https://www.labelexpertacademy.sunnyskp.ca"
                  className="stretched-link"
                  target="_blank"
                >
                  <em>Go to Label Expert Academy (LEA)</em>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Card
          style={{
            textShadow: "0.02em 0.02em 0.1em #000",
            backgroundColor: "#F2F2F2",
          }}
          className="rounded text-light text-left"
        >
          <Card.Body>
            <h4 className="text-dark">
              <b>Projects Managed By Me</b>
            </h4>
          </Card.Body>
        </Card>

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
                  <p className="card-text text-justify">
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
                  <p className="card-text text-justify">
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
                  <p className="card-text text-justify">
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
                  <p className="card-text text-justify">
                    DuraFast Label Company was established in 2012, as a
                    division of Sector Nine Distribution Limited. Recognizing
                    the advanced capabilities of modern high speed and high
                    resolution color label printers, we realized that
                    traditional label stock doesn't always measure up. Cheap
                    labels often smudge, fade, or deteriorate over time.
                    DuraFast labels are designed specifically for these
                    printers, ensuring that your color label printer's output is
                    placed on a worthy durable, colorfast label.
                  </p>
                </div>
                <div className="card-footer">
                  <a
                    href="https://www.durafastlabel.com"
                    className="stretched-link"
                    target="_blank"
                  >
                    <em>Go to Durafastlabel.com</em>
                  </a>
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
                  <p className="card-text text-justify">
                    Argon Technology products help save your business time and
                    money by ensuring the integrity of the client booting
                    process, day in and day out. As the installed base of
                    networked PCs continues to grow, network booting solutions
                    are essential to maintaining the integrity of corporate
                    information infrastructures. Network booting is also an
                    increasingly important element of any total desktop
                    management solution.
                  </p>
                </div>
                <div className="card-footer">
                  <a
                    href="https://www.argonstore.com"
                    className="stretched-link"
                    target="_blank"
                  >
                    <em>Go to Argonstore.com</em>
                  </a>
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
                  <p className="card-text text-justify">
                    Optimedia Labs is a leading retailer of Primera color label
                    printers and Bravo-series CD DVD printers and disc
                    publishers in North America. We also supply a large range of
                    printable tags, inks cartridges and blank labels. The
                    Primera LX400 and LX900 color label printers are one of the
                    most popular label printers when printing your own
                    restaurant table top menus, food labels (wine labels, tea
                    labels, coffee labels, candle labels, candy labels), name
                    badges and price tags.
                  </p>
                </div>
                <div className="card-footer">
                  <a
                    href="https://www.optimedialabs.com"
                    className="stretched-link"
                    target="_blank"
                  >
                    <em>Go to Optimedialabs.com</em>
                  </a>
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
