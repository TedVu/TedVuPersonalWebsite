import React from 'react'
import Layout from '../component/layout'

import { Link } from 'gatsby'
import Head from '../component/head'



const aboutPage = () => {
    return (
        <div>
            <Layout>
                <Head title="About" />
                <h1>This is about page</h1>
                <h2>Content will show up later on</h2>
                <p>Go to <Link to="/contact">contact</Link></p>
            </Layout>
        </div>
    )
}

export default aboutPage