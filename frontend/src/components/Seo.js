import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

export default function Seo({ children, location, description, title, image }) {
    const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          twitter
          image
        }
      }
    }
  `);
    return (
        <Helmet titleTemplate={`%s | ${site.siteMetadata.title}`}>
            <html lang="en" />
            <title>{title}</title>
            {/* Meta Tags */}
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta charSet="utf-8" />
            <meta name="description" content={site.siteMetadata.description} />
            {/* Open Graph */}
            {location && <meta property="og:url" content={location.href} />}
            <meta property="og:title" content={site.siteMetadata.title} key="ogtitle" />
            <meta
                propery="og:site_name"
                content={site.siteMetadata.title}
                key="ogsitename"
            />
            <meta property="og:image" content={site.siteMetadata.image} />
            <meta property="og:description" content={site.siteMetadata.description} key="ogdesc" />
            {children}
        </Helmet>
    );
}