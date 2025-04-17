import React from 'react'
import heroimg from "./assets/hero.png"
import Cards from './components/card'

const Herosection = () => {
  return (
  <>

  <div className="herosection d-flex align-items-center justify-content-between flex-column text-center p-5 gap-4">
   <div className="divup pt-4">
    <h1 className='display-5'>Khanmigo is your always-available <br />
    study buddy.</h1>
   </div>
   
    <img className='img-fluid w-100' src={heroimg} alt="hero" />

    <div className='d-flex justify-content-start justify-content-lg-center gap-3 text-left align-items-center flex-wrap'>
    <Cards heading="For teachers" tagline="Knock something off your to-do list in minutes." btnText = "Sign up for free" />
    <Cards heading="For districts" tagline="Expert-led AI adoption for your schools" btnText = "Contact Us" />
    <Cards heading="For writing" tagline="Writing Coach is the only AI for writing instruction " btnText = "Sign up for free" />
    </div>
 
  </div>
  </>
  )
}

export default Herosection