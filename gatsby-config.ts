import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
    siteMetadata: {
        title: `Evoqys`,
        description: `A team who loves to code and produce high quality maintainable and scalable web and mobile apps.`,
        author: `@evoqys`,
        siteUrl: `https://www.evoqys.in`
    },
    plugins: ['gatsby-plugin-sass', {
        resolve: 'gatsby-plugin-google-analytics',
        options: {
            'trackingId': 'UA-171586266-1'
        }
    }, 'gatsby-plugin-image', 'gatsby-plugin-react-helmet', 'gatsby-plugin-sitemap', 'gatsby-plugin-sharp', 'gatsby-transformer-sharp', {
        resolve: 'gatsby-source-filesystem',
        options: {
            'name': 'images',
            'path': './src/images/'
        },
    },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                icon: 'src/images/fav.svg',
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
            },
        },
    ]
};

export default config;
