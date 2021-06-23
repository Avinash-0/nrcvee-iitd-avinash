import React from 'react';
import Navbar from '../components/navbar'
import NRCVEE from '../components/nrcvee_title'
import About from '../about_components/about_content'
import Footer from '../components/footer'


const about = () => {
  return (
    <>
     <Navbar/> 
     <NRCVEE/>
     <hr className='firsthr'/>
     <About/>
     <Footer/>
    </>
  );
}

export default about;
