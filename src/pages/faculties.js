import React from 'react';
import Navbar from '../components/navbar'
import NRCVEE from '../components/nrcvee_title'
import Faculties from '../faculties_components/faculties_data'
import Footer from '../components/footer'

const faculties = () => {
  return (
    <>
     <Navbar/> 
     <NRCVEE/>
     <hr className='firsthr'/>
     <Faculties/>
     <Footer/> 
    </>
  );
}

export default faculties;
