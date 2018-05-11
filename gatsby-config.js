module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/static/*": [
            "Cache-Control: public, max-age=16070400"
          ]
        }
      }
    }
  ]
};
