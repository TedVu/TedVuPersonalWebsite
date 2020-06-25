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
                    <img className={aboutStyles.img} src="./grayLinkedInAva2020.jpg" alt="tedvu" height="300" width="250"/>
                  <div className={aboutStyles.content}> Hi there, my name is Ted, I'm a third year Software Engineering student at RMIT Melbourne. Here is my <a href="https://www.dropbox.com/s/nyt0hmi0cajen2n/Ted_CV_2020.pdf?dl=0" target="_blank">journey </a>so far and I enjoy every minute of it.
                  <br/><br/>
                  I really like exploring Software Engineering area with the focus on: Building Large Scale Software System and Algorithms. 
                  <br/><br/>
                  My spirit animal is the <a href="https://www.youtube.com/watch?v=80a7f6iKet4" target="_blank">Sloth</a> (I mean who doesn't like the Sloth) and my guilty pleasure is watching HIMYM marathon rerun :)
                  </div>
                </div>
            </Layout>
        </div >
    )
}

export default aboutPage