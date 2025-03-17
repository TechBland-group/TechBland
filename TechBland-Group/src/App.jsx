import { useState } from 'react'
import './App.css'
import Home from './Components/Home.jsx'
import Nav from './Components/Nav.jsx'

function App() {

  return (
  <div className='body'>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
    <link href="https://fonts.googleapis.com/css2?family=Tektur:wght@400..900&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
    <Home/>
    <Nav/>
    <div className="wave">
   </div>
   </div>
  )
}

export default App
