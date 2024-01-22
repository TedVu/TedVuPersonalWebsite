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
              Hi, my name is Ted (or Tuan in Vietnamese), I'm just a guy who is still figuring out life and enjoy the
              process while doing that :). I believe life should be interesting,
              filled with excitement, but also challenging enough to grow myself
              and become useful. Finally, I hope this blog will be a place for
              you to have different perspective about many things, that's my
              ultimate goal for the audience of this blog.
              <br />
            </div>
          </div>
        </Rotate>
      </Layout>
    </div>
  )
}

export default aboutPage
