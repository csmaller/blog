import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

export default function IndexPage(props) {

  const siteTitle = "Jackalope Adventures"

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title="Home"
        keywords={[`jackalope adventures`, `jackalope`, `backcountry skiing`, `utah ski touring`]}
      />

      <h1>
        Welcome!
      </h1>

    </Layout>
  );

}