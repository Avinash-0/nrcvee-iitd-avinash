import React from 'react';
import Navbar from '../components/navbar'
import NRCVEE from '../components/nrcvee_title'
import Scholars from '../scholars_components/scholars_details'
import Footer from '../components/footer'

const scholars = () => {
  return (
    <>
     <Navbar/> 
     <NRCVEE/>
     <hr className='firsthr'/>
     <Scholars/>
     <Footer/>  
    </>
  );
}

export default scholars;
