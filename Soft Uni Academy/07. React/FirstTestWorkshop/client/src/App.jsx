import { useState } from 'react'
import './App.css'
import MainModule from './modules/Main'
import HeaderModule from './modules/Header'
import FooterModule from './modules/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeaderModule/>
      <MainModule/>
      <FooterModule/>
      
    </>
  )
}

export default App
