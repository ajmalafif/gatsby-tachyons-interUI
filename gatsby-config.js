module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/favicon.png',
        injectHTML: true,
        icons: {
          android: false,
          appleIcon: true,
          appleStartup: false,
          coast: true,
          favicons: true,
          firefox: false,
          twitter: false,
          yandex: false,
          windows: true
        }
      }
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          '/static/*': [
            'Cache-Control: public, max-age=16070400'
          ]
        }
      }
    }
  ]
}
