import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Sponsor from './Components/Sponsor'
import ListProperty from './Components/ListProperty'
import WhyChoose from './Components/WhyChoose'
import OurCostmer from './Components/OurCostmer'
import ContactSection from './Components/ContactSection'
import Footer from './Components/Footer'




function App() {
 

  return (
    <>
      <Navbar />
      <Hero />
      <Sponsor />
      <ListProperty />
      <WhyChoose />
      <OurCostmer />
      <ContactSection />
      <Footer />
    </>
  )
}

export default App
