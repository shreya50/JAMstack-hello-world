import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to my Gatsby site.</p>
    <p>See you in the hackathon!</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
