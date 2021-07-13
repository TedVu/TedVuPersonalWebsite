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

  const headElement = document.getElementsByTagName("head")
  const content =
    '<script id="mcjs">!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/174f06fd7e13abc797cb6971c/a89900e0cf1b9600bff312807.js");</script>' +
    headElement[0].innerHTML
  document.getElementsByTagName("head")[0].innerHTML = content
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
            Scientists discover the world that exists Engineers create the world
            that never was.
          </blockquote>
          <div className={indexStyle.cite}>
            <cite>Theodore Von Karman</cite>
          </div>
        </div>
      </LightSpeed>
    </Layout>
  )
}

export default indexPage
