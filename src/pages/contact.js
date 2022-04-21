import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import contactStyles from "./contact.module.scss"
import Fade from "react-reveal/Fade"

const ContactPage = () => {
  return (
    <div>
      <Layout>
        <Head title="Contact" />
        <h1 className={contactStyles.title}>Get in touch </h1>
        <Fade right>
          <div className={contactStyles.content}>
            <p>
              I'm best contacted via email at{" "}
              <a href="mailto: tedvu184@gmail.com">tedvu184@gmail.com</a>. If we
              have met face-to-face, don't hesitate to DM me on any social channel, otherwise please
              contact me via email first.
            </p>
            <p>
              If you find my blog useful and interesting consider{" "}
              <a
                href="https://mailchi.mp/2f7424675562/tedvublogsubscription"
                target="_blank"
              >
                subscribing{" "}
              </a>{" "}
              for the latest blog posts.
            </p>

            <p>I'm also available on other channels:</p>
            <ul>
              <li>
                <a
                  href="https://github.com/Ted-Vu"
                  target="_blank"
                  className={contactStyles.linkItem}
                >
                  <i class="fa fa-github"></i> Github{" "}
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/ted-vu-24777b18b/"
                  target="_blank"
                  className={contactStyles.linkItem}
                >
                  <i class="fa fa-linkedin-square"></i> LinkedIn{" "}
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/tedvu184/"
                  target="_blank"
                  className={contactStyles.linkItem}
                >
                  <i class="fa fa-instagram"></i> Instagram{" "}
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  className={contactStyles.linkItem}
                >
                  <i class="fa fa-facebook-official"></i> Facebook{" "}
                </a>
              </li>
            </ul>
          </div>
        </Fade>
      </Layout>
    </div>
  )
}

export default ContactPage
