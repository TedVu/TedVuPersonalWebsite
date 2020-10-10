import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import top100Styles from "./top100.module.scss"
import Roll from "react-reveal/Roll"

const Top100Page = () => {
  return (
    <div>
      <Layout>
        <Head title="Top 100" />
        <h1 className={top100Styles.title}>My Top 💯 </h1>
        <Roll bottom>
          <div className={top100Styles.content}>
            <h3>
              Here is the list of top 100 things I want to do in my life.{" "}
            </h3>
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
                Drink a beer while wearing cowboy hat at a Texas bar (please
                don't judge 🤠😅 )
              </li>
              <li>
                Attend a broadway theatre show (perharps the Hamilton show) in
                New York
              </li>
              <li>Visit NASA, SpaceX HQ and watch a rocket launch 🚀</li>
              <li>Raise a sloth pet</li>
              <li>Attend a grandslam tennis match </li>
              <li>Publish a library/framework/package</li>
              <li>Attend an outdoor music show of Coldplay </li>
              <li>
                Count down for new year and watch firework at Times Square
              </li>
              <li>
                Eat pizza at New York (I know NY appears a lot, but isn't Big
                Apple is one of the coolest place on Earth 😅 ?)
              </li>
              <li>
                Participate in a marathon and actually run (FYI: I did join many
                marathons like in my high school or Color Me Run but I just walk
                more than half of the race)
              </li>
              <li>Eat Pho at a restaurant in California</li>
            </ol>
          </div>
        </Roll>
      </Layout>
    </div>
  )
}

export default Top100Page
