import React from 'react';
import './navbar.css'
const navbar = () => {
  return (
<div className="navbar" >
  <a id="home" href="/">Home</a>
  <a href="/about">About</a>
  <div className="dropdown">
    <button className="dropbtn">People
      <i className="fa fa-caret-down"></i>
    </button>
    <div className="dropdown-content">
      <a href="/people/faculties">Faculties</a>
      <a href="/people/postdoc">PostDoc Fellows</a>
      <a href="/people/scholars">Research Scholars</a>
      <a href="/people/administrative_staffs">Administrative Staff</a>
    </div>
  </div> 
  <div className="dropdown">
    <button className="dropbtn">Academics
      <i className="fa fa-caret-down"></i>
    </button>
    <div className="dropdown-content">
      <a href="/academics/courses">Courses </a>
      <a href="/academics/programs">Programs</a>
    </div>
  </div> 

  <div className="dropdown">
    <button className="dropbtn">Research
      <i className="fa fa-caret-down"></i>
    </button>
    <div className="dropdown-content">
      <a href="/research/focus_area">Focus Areas</a>
      <a href="/research/ongoing_project">Ongoing Projects</a>
      <a href="/research/publication">Publications</a>
      <a href="/research/mini_projects">Minor projects</a>
    </div>
  </div>

  
  <div className="dropdown">
    <button className="dropbtn">Events 
      <i className="fa fa-caret-down"></i>
    </button>
    <div className="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div> 
  <div className="dropdown">
    <button className="dropbtn">Resources
      <i className="fa fa-caret-down"></i>
    </button>
    <div className="dropdown-content">
      <a href="#">Video Lectures</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div> 
  
  <a id="IITD_home" href="https://home.iitd.ac.in/">IITD Home</a>
 {/* <div className = "searchbar" >
    <input type="text" placeholder="Search"/> 
    
 </div> */}

</div>
    
  );
}

export default navbar;
