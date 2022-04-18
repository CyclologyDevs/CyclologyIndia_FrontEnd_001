import React from 'react'

import Header from '../Components/Header'
import Slick from '../Components/Slick'
import About from '../Components/About'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import Carousel from '../Components/Carousel'

import '../CSS_Style/Home.css'
import '../CSS_Style/slick.css'


function Home() {

    return (
        <div>
            <Header />
            <Slick />
            <Carousel />
            <About />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home