import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ArticleOne = () => (
  <Layout>
    <SEO
      title="Article one"
      description="Article one. This is a custom description for SEO and Open Graph purposes, rather than the default generated excerpt."
    />
    <h1>Hi from article one</h1>
    <p>
      Welcome to Article one{" "}
      <Link to="/article-two/">jump forward to article two</Link>
    </p>
    <h2>Header for the first paragraph</h2>
    <p>
      Fusce eu nisl orci. Donec efficitur tempor enim at faucibus. Fusce et
      ultrices tortor. Nulla dictum posuere semper. Maecenas ullamcorper eros in
      ipsum varius consequat. Quisque purus nunc, fermentum ac urna in, lacinia
      scelerisque diam. Nam nulla lectus, laoreet nec porta a, tempor sed dolor.
      Nulla eu auctor lorem. Sed molestie ipsum ut ligula luctus volutpat.
      Maecenas vel purus non justo posuere condimentum non fermentum orci.
    </p>
    <h2>Header for the Second paragraph</h2>
    <p>
      Fusce eu nisl orci. Donec efficitur tempor enim at faucibus. Fusce et
      ultrices tortor. Nulla dictum posuere semper. Maecenas ullamcorper eros in
      ipsum varius consequat. Quisque purus nunc, fermentum ac urna in, lacinia
      scelerisque diam. Nam nulla lectus, laoreet nec porta a, tempor sed dolor.
      Nulla eu auctor lorem. Sed molestie ipsum ut ligula luctus volutpat.
      Maecenas vel purus non justo posuere condimentum non fermentum orci.
    </p>
    <h2>Header for the Third paragraph</h2>
    <p>
      Fusce eu nisl orci. Donec efficitur tempor enim at faucibus. Fusce et
      ultrices tortor. Nulla dictum posuere semper. Maecenas ullamcorper eros in
      ipsum varius consequat. Quisque purus nunc, fermentum ac urna in, lacinia
      scelerisque diam. Nam nulla lectus, laoreet nec porta a, tempor sed dolor.
      Nulla eu auctor lorem. Sed molestie ipsum ut ligula luctus volutpat.
      Maecenas vel purus non justo posuere condimentum non fermentum orci.
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ArticleOne
