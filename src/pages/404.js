import React from 'react'
import { Link } from 'gatsby'

import Layout from '../component/layout'
import Head from '../component/head'


const NotFound = () => {
    return (
        <Layout>
            <Head title="Not Found" />
            <h1>Page not found</h1>
            <p><Link to="/"></Link></p>
        </Layout>
    )
}

export default NotFound