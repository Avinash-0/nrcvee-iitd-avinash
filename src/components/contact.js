import React from 'react';
import Contact_logo from '../images/contact-icon-png-4050.png'
import './contact.css'

const contact = () => {
  return (
    <div className=' contact_infornmation'>
        <div className='contact_image'>
            <img src={Contact_logo}
                height='90px'
                width='90px'/>
        </div>
       
        {/* <div > */}
            <h2 className='contact_title'>Contact Info.</h2>
        {/* </div> */}
        <div className='contact_subinfo'>   
            <h3 className='xyz'>NRCVEE Office:</h3>
            <h4>Block-V Room No. 401</h4>
            <h4>IIT Delhi</h4>
            <h4>Working Hours: 9.00 a.m – 5.30 pm</h4>
            <h4>Phone: +91 11 26596585,</h4>
            <h4 className ='phone_2'>    +91 11 26596595 </h4>
            <h3 className='xyz'>Head of Department:</h3>
            <h4>E-mail: hodnrcvee@admin.iitd.ac.in</h4>
            <h3 className='xyz'>Admin Assistant</h3>
            <h4>Ms. Niraj Kumari</h4>
            <h4>E-mail: niraj185.cstaff@iitd.ac.in</h4>


        
        </div>
    </div>

  );
}

export default contact;
