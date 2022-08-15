import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Cards from './components/Cards'
import Contact from './components/Contact'

const Main = () => {
  return (
    <div>
        <Hero/>
          <About/>
          <Cards/>
          <Contact/>   
    </div>
  )
}

export default Main