import React from 'react';
import Navbar from '../components/navbar'
import NRCVEE from '../components/nrcvee_title'
import Courses_details from '../courses_components/courses_details'
import Footer from '../components/footer'

const courses = () => {
  return (
    <>
    <Navbar/> 
     <NRCVEE/>
     <hr className='firsthr'/>
     <Courses_details/>
     <Footer/>  
    </>
  );
}

export default courses;
