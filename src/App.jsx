import React from 'react'
import Header from './components/header/Header'
import NavBar from './components/nav bar/NavBar'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Banner from './components/about/Banner'
const App = () => {
  return (
    <>
        <Header />
        <NavBar />
        <Banner />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
    </>
  )
}

export default App
