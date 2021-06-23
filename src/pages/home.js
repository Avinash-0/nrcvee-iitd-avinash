import React from 'react';
import Navbar from '../components/navbar'
import NRCVEE from '../components/nrcvee_title'
import DemoCarousel from '../components/slideshow'
import Vision from '../components/vision'
import News from '../components/news'
import Footer from '../components/footer'
import Contact from '../components/contact'
import "./home.css"
const home = () => {
  return (
    <>
     <Navbar/> 
     <NRCVEE/>
     <hr className='firsthr'/>
     <DemoCarousel/>
     <Vision/>
     <div className="news-contact">
     <News/>
     <Contact/>
     </div>
     <Footer/>
     
    </>
  );
}

export default home;
