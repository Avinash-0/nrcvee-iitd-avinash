import React from 'react';
import Publication_content from '../publications_components/publication_content'
import Navbar from '../components/navbar'
import NRCVEE from '../components/nrcvee_title'
import Footer from '../components/footer'
const publications = () => {
  return (
    <>
     <Navbar/> 
     <NRCVEE/>
     <hr className='firsthr'/>
     <Publication_content/>
     <Footer/>  
    </>
  );
}

export default publications;
