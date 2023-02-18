import React from "react"
import Layout from "../components/layout"

import Head from "../components/head"
import aboutStyles from "./about.module.scss"
import Rotate from "react-reveal/Rotate"

const aboutPage = () => {
  return (
    <div>
      <Layout>
        <Head title="About" />
        <h1 className={aboutStyles.title}>About Me</h1>
        <Rotate bottom left>
          <div className={aboutStyles.aboutMe}>
            <img
              className={aboutStyles.img}
              src="https://tedvublogimages.s3.us-west-1.amazonaws.com/LinkedInAva2020.jpg"
              alt="tedvu"
              height="300"
              width="250"
            />
            <div className={aboutStyles.content}>
              {" "}
              Hi there, my name is Ted, I'm a Software Engineer based in
              Melbourne. Here is my{" "}
              <a
                href="https://www.dropbox.com/s/4gc5brx43n992mb/TedVuResume2023.pdf?dl=0"
                target="_blank"
                className={aboutStyles.links}
              >
                journey{" "}
              </a>
              so far and I enjoy every minute of it.
              <br />
              <br />
              I love exploring Software Engineering field, all the work that I
              have done reflects my passion for Software Engineering field which
              I believe it's about learning how things really work and applying
              that knowledge to create products that end users love.
              <br />
            </div>
          </div>
        </Rotate>
      </Layout>
    </div>
  )
}

export default aboutPage
