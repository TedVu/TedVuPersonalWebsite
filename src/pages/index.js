import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import indexStyle from "./index.module.scss"
import LightSpeed from "react-reveal/LightSpeed"

const indexPage = () => {
  function handleClick(e) {
    e.preventDefault()
    document.getElementById("welcome-panel").style.display = "none"
  }

  return (
    <Layout>
      <Head title="Home"></Head>
      <LightSpeed left>
        <div id="welcome-panel" className={indexStyle.introduction}>
          <h2>
            Welcome to Ted Vu Personal Website
            <button className={indexStyle.closeButton} onClick={handleClick}>
              CLOSE
            </button>
          </h2>
          <div>
            This is where I write my personal thoughts about engineering, tech,
            life and so much more.
          </div>
          <blockquote>
            The fear of death follows from the fear of life. A man who lives
            fully is prepared to die at any time.
          </blockquote>
          <div className={indexStyle.cite}>
            <cite>Mark Twain</cite>
          </div>
        </div>
      </LightSpeed>
    </Layout>
  )
}

export default indexPage
