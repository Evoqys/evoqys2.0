/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO:React.FC<any> = ({ description, lang, meta, title }) =>  {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  console.log(site);


  const metaDescription = description || site.siteMetadata.description

  return (
      <Helmet title={title}>
        <meta name="description" content={metaDescription} />
        {/*<meta name="image" content={seo.image} />*/}
        {/*{seo.url && <meta property="og:url" content={seo.url} />}*/}
        {/*{(article ? true : null) && <meta property="og:type" content="article" />}*/}
        {/*{seo.title && <meta property="og:title" content={seo.title} />}*/}
        {/*{seo.description && (*/}you
        {/*    <meta property="og:description" content={seo.description} />*/}
        {/*)}*/}
        {/*{seo.image && <meta property="og:image" content={seo.image} />}*/}
        {/*<meta name="twitter:card" content="summary_large_image" />*/}
        {/*{twitterUsername && (*/}
        {/*    <meta name="twitter:creator" content={twitterUsername} />*/}
        {/*)}*/}
        {/*{seo.title && <meta name="twitter:title" content={seo.title} />}*/}
        {/*{seo.description && (*/}
        {/*    <meta name="twitter:description" content={seo.description} />*/}
        {/*)}*/}
        {/*{seo.image && <meta name="twitter:image" content={seo.image} />}*/}
      </Helmet>
  )
}

export default SEO
