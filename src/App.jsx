import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eye from './components/Eye'
import Featured from './components/Featured'
import LocomotiveScroll from 'locomotive-scroll';
import Cluch from './components/Cluch'
import Footer from './components/Footer'

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='main w-full h-auto  bg-zinc-900'>
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <Eye/>
      <Featured/>
      <Cluch/>
      <Footer/>
    </div>
  )
}

export default App