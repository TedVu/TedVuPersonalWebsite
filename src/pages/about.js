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
              src="https://tedvublogimages.s3.us-west-1.amazonaws.com/profilepics.jpg"
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
              I'm a software engineer with a strong belief in "learning how
              things work before building it". In any team, I'm striving to
              deliver the best possible solution under the time and cost
              constraints and enjoy the process of overcoming the challenges
              with the team.
              <br />
            </div>
          </div>
        </Rotate>
      </Layout>
    </div>
  )
}

export default aboutPage
