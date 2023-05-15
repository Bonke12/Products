import React from 'react'
import Header from './Components/Header'
import Home from './Pages/Home'
import Slide from './Components/Slide'
import Cards from './Components/Cards'
import About from './Pages/About'

function App() {
  return (
    <div>
      <Slide/>
      <Home/>
      <Header/>
      <Cards/>
      <About/>
    </div>
  )
}

export default App
