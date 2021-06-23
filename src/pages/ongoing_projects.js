import React from 'react';
import Navbar from '../components/navbar'
import NRCVEE from '../components/nrcvee_title'
import Component1 from '../ongoing_projects_components/component1'
import Footer from '../components/footer'


const ongoing_projects = () => {
  return (
    <>
     <Navbar/> 
     <NRCVEE/>
     <hr className='firsthr'/>
     <Component1/>
     <Footer/>  
    </>
  );
}

export default ongoing_projects;
