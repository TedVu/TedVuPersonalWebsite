import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import top100Styles from './top100.module.scss'

const contactPage = () => {
    return (
        <div>
            <Layout>
                <Head title="Top 100" />
                <h1 className={top100Styles.title}>My Top 100  </h1>
                <div className={top100Styles.content}>
                    <h3>This is the top 100 things I want to do in my life</h3>
                    <ol>
                        <li>Visit my family in Seattle</li>
                        <li>Visit Sanfrancisco and take a picture at the Golden Gate bridge</li>
                    </ol>
                </div>
            </Layout>
        </div>
    )
}

export default contactPage