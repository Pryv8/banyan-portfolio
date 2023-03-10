import React from 'react'
import Header from './components/header/Header'
import NavBar from './components/nav bar/NavBar'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
const App = () => {
  return (
    <>
        <Header />
        <NavBar />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        {/* <Testimonials /> */}
        <Contact />
        <Footer />
    </>
  )
}

export default App
