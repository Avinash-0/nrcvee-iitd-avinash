import React from 'react';
import Navbar from '../components/navbar'
import NRCVEE from '../components/nrcvee_title'
import Mini_project_component1 from '../completed_mini_projets_components/mini_project_component1'
import Footer from '../components/footer'


const completed_mini_projects = () => {
  return (
    <>
     <Navbar/> 
     <NRCVEE/>
     <hr className='firsthr'/>
     <Mini_project_component1/>
     <Footer/> 
    </>
  );
}

export default completed_mini_projects;
