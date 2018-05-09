import React from "react"
import Helmet from "react-helmet";

import '../fonts/Inter-UI-Regular.woff2'
import '../fonts/Inter-UI-Regular.woff'
import '../css/font-face.css'
import '../css/main.css'

const TemplateWrapper = () => (
  <Helmet
    title="Gatsby Tachyons InterUI"
    meta={[
      { name: "description", content: "Attempting Gatsby Tachyons InterUI with PWA support" },
    ]}
  >
    <html lang="en" />
  </Helmet>
);

export default TemplateWrapper;

// export default () =>
//   <div className="pa4 link dim">
//     <p className="headline gray f2">Hello world!</p>
//   </div>
