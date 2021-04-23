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
              fluid(maxWidth: 4160, grayscale: true) {
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
        <StyledFullScreenWrapper id="site">
            <BackgroundImage
                Tag="section"
                className={className}
                fluid={imageData}
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
  min-height: 100%;
  overflow-x: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  //justify-content: center;
  position: static !important;
  padding: 0 !important;
`

export default StyledFullBackground

