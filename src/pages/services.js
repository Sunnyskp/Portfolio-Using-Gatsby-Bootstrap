import React from "react"
import SEO from "../images/seo.jpg"
import WD from "../images/web-design.jpg"
import WDM from "../images/web-development.jpg"
import EC from "../images/ecommerce.jpg"
import UI from "../images/UI.jpg"
import Layout from "../components/Layout"
import "bootstrap/dist/css/bootstrap.css"
const Services = () => {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="card-deck">
            <div className="card">
              <img
                rounded
                className="card-img rounded-top"
                src={WD}
                alt="Card img cap"
              />
              <div className="card-body">
                <h5 className="card-title">Web Design</h5>
                <p className="card-text text-justify">
                  A website should be designed for the people who will use it,
                  so that's exactly what I do. User focused design should be the
                  primary goal of any website.
                </p>
              </div>
            </div>
            <div className="card">
              <img
                rounded
                className="card-img rounded-top"
                src={WDM}
                alt="Card img cap"
              />
              <div className="card-body">
                <h5 className="card-title">Web Development</h5>
                <p className="card-text text-justify">
                  Every website should be built with two primary goals: Firstly,
                  it needs to work across all devices. Secondly, it needs to be
                  fast as possible.
                </p>
              </div>
            </div>
            <div className="card">
              <img
                rounded
                className="card-img rounded-top"
                src={EC}
                alt="Card img cap"
              />
              <div className="card-body">
                <h5 className="card-title">eCommerce</h5>
                <p className="card-text text-justify">
                  Creating a good online store can be hard. Over the years I've
                  learned the best ways to design stores that sell products and
                  provide real value to customers.
                </p>
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
                src={UI}
                alt="Card img cap"
              />
              <div className="card-body">
                <h5 className="card-title">Application UI</h5>
                <p className="card-text text-justify">
                  The user interface of an application, whether it's mobile or
                  desktop, can make or break a business. Getting the interface
                  right and most importantly of all, making it easy to navigate,
                  are the keys to a successful app.
                </p>
              </div>
            </div>
            <div className="card">
              <img
                rounded
                className="card-img rounded-top"
                src={SEO}
                alt="Card img cap"
              />
              <div className="card-body">
                <h5 className="card-title">SEO (Search Engine Optimisation)</h5>
                <p className="card-text text-justify">
                  SEO is the practice of improving and promoting a website in
                  order to increase the number of visitors it receives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Services
