import React from 'react';
import Srclogo from '../images/iitlogo-11.jpg'
import './nrcvee_title.css'

const nrcvee_title = () => {
  return (
<div  className='nrctitle' >
<img src={ Srclogo}/>
<div>
<h1><b>National Resource Centre for Value Education in Engineering</b></h1>
<h3>Indian Institute Of Technology, Delhi</h3>
</div>

</div>

  );
}

export default nrcvee_title;
