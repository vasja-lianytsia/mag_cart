// This is the homepage.

import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import ItemThumbnail from '../components/ItemThumbnail/ItemThumbnail';
import Layout from "../components/layout"
import SEO from "../components/seo"

const ThumbnailsWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    padding: 20px;
    margin-top: 70px;
    @media (max-width: 710px) {
      padding: 0px;
  }
`

class BlogIndex2 extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = 'product'
    const items = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Product" />
      <ThumbnailsWrapper>
        <div className="container">
            <div className="thumbnail-cont">
            {items.map(({ node }) => {
                const { title, image, price } = node.frontmatter
                return (
                  <ItemThumbnail
                    key={node.fields.slug}
                    link={node.fields.slug}
                    heading={title}
                    image={image.childImageSharp.fluid}
                    price={price}
                  />
                )
              })}
          </div>
        </div>
      </ThumbnailsWrapper>
        

      </Layout>
    )
  }
}

export default BlogIndex2

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            price
            image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
