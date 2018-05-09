
# TODO

- [x] Import Tachyons.io
- [x] Custom webfont (Inter UI)
- [x] PurgeCSS ([doesn't seem to work(https://github.com/taylorbryant/gatsby-starter-tailwind/blob/master/package.json#L20)
- [ ] PWA
- [ ] Critical path CSS
- [ ] Google Analytics
- [ ] Syntax highlighting
- [ ] ImageOptim?
- [ ] Next/Prev page
- [ ] Load comment for Disqus commenting
- [ ] Use CloudFlare CDN?
- [ ] Sitemap
- [ ] `fontfaceobserver` for fontface loading and FOUT handling

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

##### PurgeCSS
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

##### Font-face
```
@font-face {
  font-family: "Inter UI";
  font-style: normal;
  font-weight: 400;
  src: url("../fonts/Inter-UI-Regular.woff2") format("woff2"),
    url("../fonts/Inter-UI-Regular.woff") format("woff");
}
@font-face {
  font-family: "Inter UI";
  font-style: italic;
  font-weight: 400;
  src: url("../fonts/Inter-UI-Italic.woff2") format("woff2"),
    url("../fonts/Inter-UI-Italic.woff") format("woff");
}

@font-face {
  font-family: "Inter UI";
  font-style: normal;
  font-weight: 500;
  src: url("../fonts/Inter-UI-Medium.woff2") format("woff2"),
    url("../fonts/Inter-UI-Medium.woff") format("woff");
}
@font-face {
  font-family: "Inter UI";
  font-style: italic;
  font-weight: 500;
  src: url("../fonts/Inter-UI-MediumItalic.woff2") format("woff2"),
    url("../fonts/Inter-UI-MediumItalic.woff") format("woff");
}

@font-face {
  font-family: "Inter UI";
  font-style: normal;
  font-weight: 700;
  src: url("../fonts/Inter-UI-Bold.woff2") format("woff2"),
    url("../fonts/Inter-UI-Bold.woff") format("woff");
}
@font-face {
  font-family: "Inter UI";
  font-style: italic;
  font-weight: 700;
  src: url("../fonts/Inter-UI-BoldItalic.woff2") format("woff2"),
    url("../fonts/Inter-UI-BoldItalic.woff") format("woff");
}

@font-face {
  font-family: "Inter UI";
  font-style: normal;
  font-weight: 900;
  src: url("../fonts/Inter-UI-Black.woff2") format("woff2"),
    url("../fonts/Inter-UI-Black.woff") format("woff");
}
@font-face {
  font-family: "Inter UI";
  font-style: italic;
  font-weight: 900;
  src: url("../fonts/Inter-UI-BlackItalic.woff2") format("woff2"),
    url("../fonts/Inter-UI-BlackItalic.woff") format("woff");
}

body {
  font-family: "Inter UI", sans-serif;
}
```
