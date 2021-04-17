import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { StyledFullScreenWrapper } from './SharedStyledComponents'

/**
 * In this functional component a fullscreen <BackgroundImage />  is created.
 * @param className   string    className(s) from styled-components.
 * @param children    nodes     Child-components.
 * @return {*}
 * @constructor
 */
const FullBackground = ({ imgName, className, children }) => {
    const data = useStaticQuery(
    graphql`
      query {
        allImageSharp {
          edges {
            node {
              fluid(maxWidth: 4160) {
                ...GatsbyImageSharpFluid
                originalName
              }
            }
          }
        }
      }
    `)

    // Single Image Data
    const imageData = data.allImageSharp.edges.find(
        edge => edge.node.fluid.originalName === imgName
    ).node.fluid

    return (
        <StyledFullScreenWrapper>
            <BackgroundImage
                Tag="section"
                className={className}
                fluid={imageData}
                backgroundColor={`#040e18`}                
                id="fullscreenbg"
                role="img"
                aria-label="Fullscreen Background"
                preserveStackingContext={true}
            >
                {children}
            </BackgroundImage>
        </StyledFullScreenWrapper>
    )
}

const StyledFullBackground = styled(FullBackground)`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default StyledFullBackground

