
# TODO

- [x] Import Tachyons.io
- [x] Custom webfont (Inter UI)
- [ ] PurgeCSS
- [ ] Critical path CSS
- [ ] Google Analytics
- [ ] `fontfaceobserver` for fontface loading and FOUT handling
- [ ] Syntax highlighting
- [ ] ImageOptim?
- [ ] Next/Prev page
- [ ] Load comment for Disqus commenting
- [ ] Use CloudFlare CDN?
- [ ] Sitemap
- [ ] fontfaceobserver/webfontloader

##### Optimizations
- [ ] Import font with `typefaces`

## References
##### Import CSS
- https://codeburst.io/4-four-ways-to-style-react-components-ac6f323da822
##### Webfont optimizations
- https://github.com/smartive/smartive.ch/blob/master/src/layouts/index.js
- https://github.com/greglobinski/gatsby-starter-mini-catalog/blob/master/src/layouts/index.js
- https://github.com/KyleAMathews/typefaces/issues/31
## gatsby-starter-hello-world
Starter with the bare essentials needed for a [Gatsby](https://www.gatsbyjs.org/) site

Install this starter (assuming Gatsby is installed) by running from your CLI:
```
gatsby new gatsby-site https://github.com/gatsbyjs/gatsby-starter-hello-world
```

## Running in development
`gatsby develop`

#### Snippets for the future
```
// purgecss -c purgecss.config.js -o ./src/pages && gatsby develop

module.exports = {
  content: ['./public/**/*.html', './src/**/*.js'],
  css: ['./src/index.css'],
  extractors: [
    {
      extractor: class {
        static extract(content) {
          return content.match(/[A-z0-9-:\/]+/g)
        }
      },
      extensions: ['html', 'js'],
    },
  ],
}
```
