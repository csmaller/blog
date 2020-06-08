import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Corey Smaller"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `coreysmaller`, `corey smaller`, `rage against the supremes`]}
        />
       
        <h1>
          Hey people welcome to my Site!
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
       
        <Link to="/blog/">
          <Button marginTop="35px">Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
