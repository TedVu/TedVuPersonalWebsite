import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import top100Styles from "./top100.module.scss"

const Top100Page = () => {
  return (
    <div>
      <Layout>
        <Head title="Top 100" />
        <h1 className={top100Styles.title}>My Top 💯 </h1>
        <div className={top100Styles.content}>
          <h3>Here is the top 100 things I want to do in my life. </h3>
          <h4>
            Have any suggestion ? Just send me an{" "}
            <a href="mailto: tedvu184@gmail.com">email</a>
          </h4>
          <ol>
            <li>Visit my family in Seattle 😎</li>
            <li>
              Visit San Francisco and take a picture at the Golden Gate bridge
            </li>
            <li>
              Drink a beer while wearing cowboy hat at a Texas bar (please don't
              judge 🤠😅 )
            </li>
            <li>
              Attend a broadway theatre show (perharps the Hamilton show) in New
              York
            </li>
            <li>Visit NASA, SpaceX HQ and watch a rocket launch 🚀</li>
            <li>Raise a sloth pet</li>
            <li>Attend a grandslam tennis match </li>
          </ol>
        </div>
      </Layout>
    </div>
  )
}

export default Top100Page
