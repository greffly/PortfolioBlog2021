import React from "react"
import Layout from "../components/Layout"

const Contact = () => (
  <Layout>
    <section className="contact" role="listbox">
      <h1>Get in Touch</h1>
      <p className="contactBlurb">
        Check out my work and experience below, and feel free to reach out so we
        can chat more (maybe over a beer).
      </p>
      <ul className="contactInfo">
        <li>
          <a>
            <img src="images/maillogo.png" alt="Email" className="icon" />
          </a>
        </li>
        <li>
          <a href="https://github.com/greffly" target="_blank" rel="noreferrer">
            <img src="./images/githublogo.png" alt="GitHub" className="icon" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/thecaitcode"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/images/twitterlogo.png" alt="Twitter" className="icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/caitlyngreffly/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="images/linkedinlogo.png"
              alt="Linkedin"
              className="icon"
            />
          </a>
        </li>
      </ul>
      <section className="displayInfo" role="contentinfo"></section>
    </section>
  </Layout>
)

export default Contact
