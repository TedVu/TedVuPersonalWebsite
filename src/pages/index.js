import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import indexStyle from "./index.module.scss"
import LightSpeed from "react-reveal/LightSpeed"
import Bounce from "react-reveal/Bounce"

const indexPage = () => {
  function handleCloseBtnWelcomePanelClick(e) {
    e.preventDefault()
    document.getElementById("welcome-panel").style.display = "none"
  }

  function handleCloseBtnDialogPanelClick(e) {
    e.preventDefault()
    document.getElementById("dialog-panel").style.display = "none"
  }

  function handleSubscriptionBtnClick(e) {
    e.preventDefault()
    window.open(
      "https://mailchi.mp/2f7424675562/tedvublogsubscription",
      "_blank"
    )
  }

  return (
    <Layout>
      <Head title="Home"></Head>
      <Bounce top>
        <div id="dialog-panel" className={indexStyle.subscriptionDialog}>
          <h2>Welcome readers!</h2>
          <div className={indexStyle.dialogContent}>
            My name is Ted Vu and this is where I write my personal thoughts
            about engineering, tech, life and so much more. If you find my blog
            useful and interesting, consider subscribing for the latest blog
            posts.
          </div>{" "}
          <button
            className={indexStyle.closeButton}
            onClick={handleCloseBtnDialogPanelClick}
          >
            CLOSE
          </button>
          <button
            className={indexStyle.subscribeButton}
            onClick={handleSubscriptionBtnClick}
            type="button"
          >
            SUBSCRIBE
          </button>
        </div>
      </Bounce>
      <LightSpeed left>
        <div id="welcome-panel" className={indexStyle.introduction}>
          <h2>
            Welcome to Ted Vu Personal Website
            <button
              className={indexStyle.closeButton}
              onClick={handleCloseBtnWelcomePanelClick}
            >
              CLOSE
            </button>
          </h2>

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
