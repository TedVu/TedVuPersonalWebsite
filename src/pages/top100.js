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
              Here is the list of top 100 things I want to do in my life. Last
              updated: 13-06-2024.{" "}
            </h3>
            <h4>
              Have any suggestion ? Just send me an{" "}
              <a href="mailto: tedvu184@gmail.com">email.</a>
            </h4>
            <ol>
              <li>Visit my family in Seattle 😎</li>
              <li>
                Visit San Francisco and take a picture at the Golden Gate
                bridge.
              </li>
              <li>
                Drink a beer while wearing cowboy hat at a Texas bar (please
                don't judge 🤠😅 ).
              </li>
              <li>
                Attend a broadway theatre show (perharps the Hamilton show) in
                New York.
              </li>
              <li>Visit NASA, SpaceX HQ and watch a rocket launch 🚀</li>
              <li>Raise a sloth pet.</li>
              <li>
                <a
                  href=""
                  onClick={event => {
                    event.preventDefault()
                    document.getElementById("myModal").style.display = "block"
                  }}
                  className={top100Styles.itemFinish}
                >
                  Attend a grandslam tennis match.{" "}
                </a>
                <div id="myModal" className={top100Styles.modal}>
                  <div className={top100Styles.modalContent}>
                    <span
                      id="closeBtn"
                      className={top100Styles.close}
                      onClick={() => {
                        document.getElementById("myModal").style.display =
                          "none"
                      }}
                    >
                      &times;
                    </span>
                    <img src="./tedausopen.jpg" alt="ausOpen2021" />
                  </div>
                </div>
              </li>
              <li>Publish a library/framework/package.</li>
              <li>Attend an outdoor music show of Coldplay. </li>
              <li>
                Count down for new year and watch firework at Times Square.
              </li>
              <li>
                Eat pizza at New York (I know NY appears a lot, but isn't Big
                Apple is one of the coolest place on Earth 😅 ?).
              </li>
              <li>
                Participate in a marathon and complete it (FYI: I did join many
                marathons like in my high school or Color Me Run but I just
                walked more than half of the race) and this is the{" "}
                <a
                  href="https://www.strava.com/athletes/88737048"
                  target="_blank"
                >
                  training progress{" "}
                </a>{" "}
                so far.
              </li>
              <li>Eat Pho at a restaurant in California.</li>
              <li>Attend a boxing match. </li>
              <li>Be financial independent.</li>
              <li>Learn to drive a helicopter.</li>
              <li>Learn snow skiing.</li>
              <li>Learn scuba diving.</li>
              <li>
                Dress as{" "}
                <a
                  href="https://lotr.fandom.com/wiki/Aragorn_II_Elessar"
                  target="_blank"
                >
                  Aragorn
                </a>{" "}
                in a Halloween party.
              </li>
              <li>
                {" "}
                <a>
                  Attend{" "}
                  <a
                    href="https://www.youtube.com/watch?v=9rhadTURsrw"
                    target="_blank"
                  >
                    Super Bowl Halftime show.
                  </a>
                </a>
              </li>
              <li>
                Learn to play a musical instrument (maybe ukulele or guitar).
              </li>
              <li>Visit Canada and watch a hockey match.</li>
              <li>Take a picture at Hollywood boulevard.</li>
              <li>Watch a live NBA game.</li>
              <li>Participate in a swimming contest.</li>
              <li>Watch an Aussie football match at MCG stadium.</li>
              <li>
                {" "}
                <a
                  href="https://www.dropbox.com/s/hymgi576h18fmsc/pass.jpg?dl=0"
                  target="_blank"
                  className={top100Styles.itemFinish}
                >
                  Learn to drive a car.
                </a>
              </li>
              <li>Take a picture with Novak Djokovic.</li>
              <li>Climb a mountain.</li>
              <li>Maintain a Github repo with at least 1k stars.</li>
              <li>Travel to at least 10 countries.</li>
              <li>
                Perform a song at a wedding.(maybe{" "}
                <a
                  href="https://www.youtube.com/watch?v=iACXwsP56a0"
                  target="_blank"
                >
                  this song
                </a>
                )
              </li>
              <li>
                <a
                  href="https://www.dropbox.com/s/34z31dm3n5v2f3e/vietnammatch.jpg?dl=0"
                  target="_blank"
                  className={top100Styles.itemFinish}
                >
                  Watch a live soccer match from Vietnamese team.{" "}
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="https://www.dropbox.com/s/kytio962j41tjkc/nye21.jpg?dl=0"
                  target="_blank"
                  className={top100Styles.itemFinish}
                >
                  Watch firework at Sydney Opera house.
                </a>
              </li>

              <li>Enjoy a ride in a hot air balloon.</li>
              <li>Watch a live concert from One Republic.</li>
              <li>
                {" "}
                <a
                  href="https://www.dropbox.com/s/j3hksz416ccpgn2/TedVuCPRFirstAid.pdf?dl=0"
                  target="_blank"
                  className={top100Styles.itemFinish}
                >
                  Obtaining a CPR and First aid training certificate.
                </a>
              </li>
              <li>Present at a public conference.</li>
              <li>Build an app with at least 1000 users.</li>
              <li>Travel to all 7 continents.</li>
              <li>
                Be proficient in at least 5 languages (and yes not programming
                languages :) ).
              </li>
              <li>Eating 'bun' on a boat in the south west of Vietnam. </li>
              <li>Being proficient in cooking.</li>
              <li>Attend a Google/Apple/Microsoft tech announcement events.</li>
            </ol>
          </div>
        </Roll>
      </Layout>
    </div>
  )
}

export default Top100Page
