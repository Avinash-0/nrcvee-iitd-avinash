import React from 'react';
import Navbar from '../components/navbar'
import NRCVEE from '../components/nrcvee_title'
import Post_doct from '../post_doc_components/post_doc_details'
import Footer from '../components/footer'
const Post_doc = () => {
  return (
    <>
     <Navbar/> 
     <NRCVEE/>
     <hr className='firsthr'/> 
     <Post_doct/>
     <Footer/> 
    </>
  );
}

export default Post_doc;
