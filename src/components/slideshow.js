// import React from 'react'
// import SimpleImageSlider from "react-simple-image-slider";
import './slideshow.css'
// // import Pramit from '../images/pramit.jpg'
// // import Image3 from '../images/IMG_0762.jpg'
// // import Image2 from '../images/IMG_0505.jpg'
// // import Image4 from '../images/IMG_0413.jpg'
 
// const images = 
// [
//     { url: "./IMG_0413.jpg"},
//     { url: "./IMG_0413.jpg"},
//     { url: "./IMG_0413.jpg"},
   
//   ];
  


// const Slideshow = () => {
  
//   return (

//     <div className = 'sliderdiv' >
    
//       <SimpleImageSlider
//         width={1220}
//         height={500}
//         images={images}
//         showNavs
//         showBullets
//         onStartSlide
        
//       />
//     </div>
    
  
//   );
// }
// export  default Slideshow;
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image from "./lotus.jpg"
import image2 from "./running.png"
import image3 from "./yoga.png"
import image4 from "./IMG_0762.jpg"
import image5 from "./experiment3.png"
 

class DemoCarousel extends Component {
    render() {
        return (
          <div className='slider'>
            <Carousel  width="100%" showThumbs={false} showStatus={false} autoPlay={true} emulateTouch ={true}>
                <div>
                    <img src={image} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={image2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={image3} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={image4} />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src={image5} />
                    <p className="legend">legend 5</p>
                </div>
            </Carousel>
            </div>  
        );
        } 
};

export default DemoCarousel;