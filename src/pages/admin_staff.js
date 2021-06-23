import React from 'react';
import Navbar from '../components/navbar'
import NRCVEE from '../components/nrcvee_title'
import Admin from '../admin_staff_components/admin_details'
import Footer from '../components/footer'


const admin_staff = () => {
  return (
    <div>
      <Navbar/> 
      <NRCVEE/> 
      <hr className='firsthr'/> 
      <Admin/>
      <Footer/>  

    </div>
  );
}

export default admin_staff;
