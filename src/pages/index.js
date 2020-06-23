import React from 'react'
import Layout from '../components/layout'

import { Link } from 'gatsby'
import Head from '../components/head'
const indexPage = () => {

  return (
    <Layout>
      <Head title="Home"/>
      <h1>Hello,</h1>
      <h2>I'm Ted A Software Engineer living in the Bay.</h2>
      <p>Need a developer ? <Link to="/contact">Contact me.</Link></p>
    </Layout>
  )

}


export default indexPage