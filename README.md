
# TODO

- [x] Import Tachyons.io
- [x] Custom webfont (Inter UI)
- [x] `fontfaceobserver` for fontface loading and FOUT handling
- [x] `fonts-loaded` cookies for returning visit
- [x] Favicon
- [ ] Syntax highlighting
- [ ] PWA
- [ ] SEO Schema JSONLD
- [ ] Efficient and smart `<head>` with Helmet
- [ ] Next/Prev page
- [ ] Sitemap
- [ ] Google Analytics
- [ ] Pagination([Reference](https://github.com/pixelstew/gatsby-paginate))
- [ ] Cache JS files (will available on Gatsby v2)
### Maybe
- [ ] Load comment for Disqus commenting
- [ ] Use CloudFlare CDN?
- [ ] ImageOptim?
- [ ] PurgeCSS ([doesn't seem to work](https://github.com/taylorbryant/gatsby-starter-tailwind/blob/master/package.json#L20))

## References
##### Import CSS
- https://codeburst.io/4-four-ways-to-style-react-components-ac6f323da822
##### Webfont optimizations
- https://github.com/smartive/smartive.ch/blob/master/src/layouts/index.js
- https://github.com/greglobinski/gatsby-starter-mini-catalog/blob/master/src/layouts/index.js
- https://github.com/KyleAMathews/typefaces/issues/31

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
