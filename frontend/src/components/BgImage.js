import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ children }) => {
    const data = useStaticQuery(
        graphql`
      query {
        desktop: file(relativePath: { eq: "band-pic.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
    )

    // Set ImageData.
    const imageData = data.desktop.childImageSharp.fluid

    const className = ''

    return (
        <BackgroundImage
            Tag="section"
            className={className}
            fluid={imageData}
            backgroundColor={`#040e18`}
        >
            {children}
        </BackgroundImage>
    )
}

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100vw;
  height: 100vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

`

export default StyledBackgroundSection