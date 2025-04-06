import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Titel from './Components/Titel/Titel'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contcant/Contact'
import Footer from './Components/Footer/Footer'
import Videoplayer from './Components/VideoPlayer/Videoplayer'


const App = () => {

const [playState, setPlayState] = useState(false);

  return (
   
    <div>
      <Navbar/>
      <Hero/>
    <div className='container'>
      <Titel supTitel='OUR PROGRAM'  titel='Waht We Offer'/>
    <Programs/>
    <About setPlayState={setPlayState}/>
    
    <Titel supTitel='Gallery'  titel='Campus Photos'/>
    <Campus/>
    <Titel supTitel='TESTIMONIALS'  titel='What Student Says'/>
    <Testimonials/>
    <Titel supTitel='Contact Us'  titel='Get In Touch'/>
    <Contact/>
    <Footer/>
    </div>
  <Videoplayer playState={playState} setPlayState={setPlayState}/>

    </div>
    
  )
}

export default App
