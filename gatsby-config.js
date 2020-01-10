/* eslint-disable global-require */
module.exports = {
  siteMetadata: {
    title: 'Portfolio app',
    description: '',
    author: '@gatsbyjs',
    siteUrl: 'https://speedandfunction.com/portfolio',
  },
  plugins: [
    'gatsby-plugin-favicon',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        sitemap: null,
        host: null,
        policy: [{userAgent: '*', disallow: ['/']}],
      },
    },
    {
      options: {
        color: process.env.scrollIndicatorColor,
      },
      resolve: 'gatsby-plugin-scroll-indicator',
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
        spreadsheetId: '1zRJ6GXTuITju7J5xflPHj9rxpDsPWReOBJk7pYTMm9I',
        worksheetTitle: 'Content from Nick',
        credentials: JSON.parse(process.env.GATSBY_CREDENTIALS),
      },
    },
    {
      resolve: 'gatsby-theme-material-ui',
      options: {
        stylesProvider: {
          injectFirst: true,
        },
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: 'Roboto',
                variants: ['100', '300', '400', '500', '700'],
              },
              {
                family: 'Roboto Condensed',
                variants: ['700'],
              },
              {
                family: 'Open Sans Condensed',
                variants: ['300'],
              },
            ],
          },
        },
      },
    },
    'gatsby-transformer-sharp',
    {
      options: {
        defaultQuality: 75,
        stripMetadata: true,
        useMozJpeg: false,
      },
      resolve: 'gatsby-plugin-sharp',
    },
    {
      resolve: 'gatsby-plugin-remote-images',
      options: {
        nodeType: 'googleSheetContentFromNickRow',
        imagePath: 'image',
        name: 'localImage',
      },
    },
    {
      options: {
        trackingId: process.env.googleAnalyticsTrackingId,
      },
      resolve: 'gatsby-plugin-google-analytics',
    },
  ],
};
