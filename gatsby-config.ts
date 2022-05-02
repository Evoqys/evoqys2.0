import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
    siteMetadata: {
        title: `Evoqys`,
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
    }]
};

export default config;
