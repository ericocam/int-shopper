import React from "react"
import { Link } from "gatsby"

import Image from "../components/image"

const PostLink = props => (
  <Link to={props.link} style={{ color: "#708090", textDecoration: "none" }}>
    <div
      style={{
        backgroundColor: "lightBlue",
        maxWidth: `500px`,
        marginBottom: `1.45rem`,
        padding: "10px",
      }}
    >
      <h4>{props.title}</h4>
      <p>{props.description}</p>
      {/* <Link to={props.link}>Go to article</Link> */}
    </div>
  </Link>
)

export default PostLink
