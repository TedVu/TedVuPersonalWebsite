import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import contactStyles from './contact.module.scss'

const ContactPage = () => {
    return (
        <div>
            <Layout>
                <Head title="Contact" />
                <h1 className={contactStyles.title}>Contact </h1>
                <div className={contactStyles.content}>
                    <p>I'm best contacted via email at <a href="mailto: tedvu184@gmail.com">tedvu184@gmail.com</a></p>
                    <p>If you are around Melbourne, don't hesitate to set up a meeting with me for any interesting conversation and project collaboration</p>
                    <p>I'm also available on other channels:</p>
                    <ul>
                        <li><a href="https://github.com/Ted-Vu" target="_blank">Github</a></li>
                        <li><a  href="https://www.linkedin.com/in/ted-vu-24777b18b/" target="_blank">LinkedIn</a></li>
                        <li><a href="https://www.instagram.com/tedvu184/" target="_blank">Instagram</a></li>
                        <li><a  href="https://www.facebook.com/" target="_blank">Facebook</a></li>
                    </ul>
                </div>
            </Layout>
        </div>
    )
}

export default ContactPage