import { useState } from 'react'
import './App.css'
import HeaderModule from './modules/Header'
import FooterModule from './modules/Footer'
import MainModule from './modules/Main'

function App() {

  return (
    <>
      <body>
        <HeaderModule />

        {/* <!-- Main component  --> */}
        <MainModule />
        {/* <!-- Footer component  --> */}

        <FooterModule />
      </body>
    </>
  )
}

export default App
