import React from 'react'
import Layout from '../components/layout'

import Head from '../components/head'
import indexStyle from './index.module.scss'
const indexPage = () => {

  return (
    <Layout>
      <Head title="Home" />
      <div className={indexStyle.introduction}>
       <h2>Welcome to Ted Vu Personal Website</h2>
       <div>This is where I write my personal thoughts about engineering, tech, life.</div>
       <div><br/>Have a look around !</div>
      </div>
    </Layout>

  )

}


export default indexPage