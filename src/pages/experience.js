import React from "React"
import ABCMovies from "../images/ABCMovielogo.png"
import WOW from "../images/wow-logo.png"
import PL from "../images/s-logo-card.png"
import Layout from "../components/Layout"
import "bootstrap/dist/css/bootstrap.css"

const Experience = () => {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="card-deck">
            <div className="card">
              <img
                rounded
                className="card-img rounded-top"
                src={WOW}
                alt="Card img cap"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text text-justify">
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
                <p className="card-text text-justify">
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
                src={PL}
                alt="Card img cap"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text text-justify">
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
    </Layout>
  )
}
export default Experience
