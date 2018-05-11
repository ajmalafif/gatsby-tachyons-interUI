import React from 'react'
import Helmet from 'react-helmet'

import '../fonts/Inter-UI-Regular.woff2'
import '../fonts/Inter-UI-Regular.woff'
import '../css/font-face.css'
import '../css/main.css'

const isFontLoaded = '<!--#if expr="$HTTP_COOKIE=/fonts\-loaded\=true/" -->'
export default () => 
  <div className='pa4 link dim'>
    <a href="#" className='headline gray f2'>
      Home
  </a>
    <a href="/about" className='headline gray f2'>
      About
  </a>
    <Helmet>
      <html lang='en' className={isFontLoaded ? 'fonts-loaded' : null} />
    </Helmet>
  </div>
