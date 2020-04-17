import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import PostLink from "../components/postLink"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1
      style={{
        fontSize: "1.6rem",
        color: "#708090",
      }}
    >
      Hi shoppers
    </h1>
    <p>Welcome to International Shopper</p>
    <p>Browse the articles below to find what you are looking for</p>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}

    <PostLink
      title="Article One"
      description="Post preview for article one, this is what article one is all about. Click here to read the full article and learn all about the topic"
      link="/article-one/"
    />

    <PostLink
      title="Article Two"
      description="Post preview for article Two, this is what article two is all about. Click here to read the full article and learn all about the topic"
      link="/article-two/"
    />

    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
