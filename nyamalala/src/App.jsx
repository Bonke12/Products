import React from 'react'
import Header from './Components/Header'
import Home from './Pages/Home'
import Slide from './Components/Slide'
import Cards from './Components/Cards'
import About from './Pages/About'
import Contacts from './Pages/Contacts'


function App() {
  return (
    <div>
      <Slide/>
      <Home/>
      <Header/>
      <Cards/>
      <About/>
      <Contacts/>
    </div>
  )
}

export default App
