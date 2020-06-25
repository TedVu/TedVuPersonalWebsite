import React from 'react'
import Layout from '../components/layout'

import Head from '../components/head'
import aboutStyles from './about.module.scss'



const aboutPage = () => {
    return (
        <div>
            <Layout>
                <Head title="About" />
                <h1 className={aboutStyles.title}>About Me</h1>
                <div className={aboutStyles.aboutMe}>
                    <img className={aboutStyles.img} src="grayLinkedInAva2020.jpg" alt="tedvu" width="200" height="250" />
                  <div className={aboutStyles.content}> Hi there, my name is Ted, I'm a third year Software Engineering student at RMIT Melbourne. This is my <a href="https://www.dropbox.com/s/nyt0hmi0cajen2n/Ted_CV_2020.pdf?dl=0" target="_blank">journey </a>so far.
                  <br/><br/>
                  I really like exploring Software Engineering area with the focus on: Building large scale software and Algorithms. 
                  <br/><br/>
                  My spirit animal is the Sloth (I mean who doesn't like the Sloth) :)
                  </div>
                </div>
            </Layout>
        </div >
    )
}

export default aboutPage