import React from 'react'
import Layout from '../components/layout'

import { Link } from 'gatsby'
import Head from '../components/head'



const aboutPage = () => {
    return (
        <div>
            <Layout>
                <Head title="About" />
                <h1>This is about page</h1>
                <h2>Content will show up later on</h2>
                <p>Go to <Link to="/top100">contact</Link></p>
            </Layout>
        </div>
    )
}

export default aboutPage