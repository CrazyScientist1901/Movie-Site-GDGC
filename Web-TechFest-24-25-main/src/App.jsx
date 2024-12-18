import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

export default function App() {
  return (
    <BrowserRouter>
       <Navbar/>
       <Hero/>
    </BrowserRouter>
  )
}
