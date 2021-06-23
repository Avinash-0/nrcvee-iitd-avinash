import React from 'react';
import Navbar from '../components/navbar'
import NRCVEE from '../components/nrcvee_title'
import Rfocus_details from '../rfocus_components/rfocus_detais'
import Footer from '../components/footer'


const rfocus = () => {
  return (
    <>
     <Navbar/> 
     <NRCVEE/>
     <hr className='firsthr'/>
     <Rfocus_details/>
     <Footer/>  
    </>
  );
}

export default rfocus;
