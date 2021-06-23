import React from 'react';
import './courses_details.css'
import '../about_components/about_content.css'
const courses_details = () => {
  return (
    <div className='courselist'>
    <p class="whichpage">@Courses</p>
    <h2>Courses Offered</h2>
    <ul>
                <li>
                    VEL 700 – Human Values and Technology
                </li>
                
                <li>VEL 710 – Traditional Knowledge Systems and Values</li>
                <li>VED 750 – Minor Project</li>
                <li>HUL 288 – Science and Humanism : Towards a Unified Worldview (With HuSS)</li>
                <li>RDL 340 – Technology and Community Development (With CRDT)</li>
                <li>VEV731 : Special Module on Inner Development- I  Inner​ ​Development​ ​for​ ​Health,​ ​happiness​ ​and​ ​success focusing​ ​on​ ​Ayurveda​ ​and​ ​Yoga by Sri Adinarayanan</li>
                <li>VEV 732—Special Module on Inner Development—II Decision making based on self‐discovery by Prof. Ramesh Bijlani</li>
                <li>VEV741 Special Module on Inner Development‐III   Introduction to Yogic Neuroscience by Sri Adinarayan and Rahul Garg</li>
                <li>VEV733 : Special Module on Leadership- I The Socratic Method by Dr. Kushal Shah for feedback</li>
                
    </ul>
            <h4>Note:</h4>
            <p className ='note'>These courses are at an introductory level pertaining to inner development of students. No specific skills or maturity levels are needed to attend these course. It was decided that the courses will be open to both UG and PG students and hence were given course numbers in the 700 range. For these courses to be more effective, the students should be encouraged to take these in their early stages of their IIT stay. For UG students, it was recommended that the minimum credit requirements for these course be relaxed to 50 credits so that the students in their second year may also be able to take these courses.</p>
      
    </div>
  );
}

export default courses_details;
