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
                    <img className={aboutStyles.img} src="LinkedInAva2020.jpg" alt="tedvu" width="200" height="200" />
                  <div className={aboutStyles.content}> Hi there, my name is Ted, I'm a third year Software Engineering student at RMIT Melbourne</div>
                </div>
            </Layout>
        </div >
    )
}

export default aboutPage