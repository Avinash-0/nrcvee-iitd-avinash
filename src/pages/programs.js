import React from 'react';
import Navbar from '../components/navbar'
import NRCVEE from '../components/nrcvee_title'
import Phd from '../program_components/phd'
import Footer from '../components/footer'

const programs = () => {
  return (
    <>
     <Navbar/> 
     <NRCVEE/>
     <hr className='firsthr'/>
     <Phd/>
     <Footer/>   
    </>
  );
}

export default programs;
