import React from "react"

import Layout from '../components/layout/Layout'
import Content from '../components/Content'



export default function Home({location}) {
  console.log(location)
  return (<Layout initialData={location?.state?.hello}>
    <pre>{JSON.stringify(location, null,2 )}</pre>
    <Content/>

  </Layout>)
}
