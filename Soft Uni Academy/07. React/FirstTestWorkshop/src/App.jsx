// import { useState } from 'react'
import './App.css'
import HeaderModule from './modules/Header'
import FooterModule from './modules/Footer'
import MainModule from './modules/Main'
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

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
