import React from 'react';
import './rfocus_details.css'
import '../about_components/about_content.css'
import Dummy_img from '../images/Screen Shot 2021-06-19 at 5.18.52 AM.png'

const rfocus_detais = () => {
  return (
    
    <div className='rfocus_content_overall' >
        <p class="whichpage">@Focus_Area</p>
        <div className='subcontent_odd' > 
         <h2 >
            Mental and Physical Wellbeing 
         </h2>
         <hr/>
            <p >
                Mental and physical wellbeing is being examined using objective, third-person investigation of mind-body techniques for physical and mental health. The mind-body techniques that are investigated include Mindfulness, Yoga, Tai-Chi, Qi-Gong, Ayurveda, Naturopathy, Nutrition and others. Multidisciplinary investigation methodologies from diverse areas including Contemplative Neuroscience, Indian Psychology, Positive Psychology, Cognitive Sciences, Yogic Sciences, Ayurveda, Mindfulness, modern medicine is being explored. Modern measurement tools and technologies such as fMRI, EEG, Eye tracker and GSR as well as insights from first person observations especially valuable for such investigations are being employed.
            </p>
        </div>  
        
        <img className='odd_image' src ={Dummy_img}/>
        <img className='even_image' src ={Dummy_img}/>
        <div className='subcontent_even' >
            <h2 className='even_heading' >
                Service, Leadership and Sustainability 
            </h2>
                <hr/>
                <p >
                    Service, Leadership and Sustainability includes research pursuits, particularly those involving global social and environmental issues, as a medium for the development of inner qualities such as equanimity, forbearance and peace. The investigations focus on the impact of attitude towards the work on the state of the mind, exploring techniques for stress-free productivity, creativity and immersive life-long learning will be the focus of this area. The chosen activities are of immediate societal importance, including those of IIT-Delhi community, national as well as international issues, with opportunities for immersive learning. However, the focus will be on maintaining awareness of the interaction between the external events and circumstances and the internal state of the mind.
                </p>        
        </div>  
        
        <div className='subcontent_odd'>
            <h2>
                Music and Arts 
             </h2>
             <hr/>
                <p >
                    Music and Arts is explored as a medium for inner development and promotion of inner peace and outer harmony. Many cultures view music and arts as a medium of self-expression. Some Indian schools view classical music and classical art forms as an end in itself. At NRCVEE, music, dance-forms and arts are viewed as tools for inner development and cultivation of positive qualities such as self-awareness, emotional balance, devotion, universal human values, inner peace and outer harmony. Music and Arts is especially relevant for engineering students, especially when they are used as a medium to connect to deeper aspects of the self and provide access to parts of the personality that the rational thinking mind cannot access. The education of arts and music will target different areas of the brain, which are untouched by conventional engineering education. These art forms are likely to nurture creativity, compassion, emotional resilience, design thinking which the conventional intellectual teaching may not be able to accomplish. Such attributes are indispensable in engineering education which students can apply in their jobs and lives.
                </p>
        </div> 
         
        <img className='odd_image' src ={Dummy_img}/> 
        <img className='even_image' src ={Dummy_img}/>
        
        <div className='subcontent_even'>
            
            <h2 className='even_heading' >
                Value Education and Technology 
            </h2>
              <hr/>
            <p>
                Under this research area the impact of technology on society and values is being studied. Tools and technologies are being explored for creating newer learning models, student-centric self-paced learning, flipped classrooms, and mindfulness in education. Further, the impact of use/overuse of technology on psychology, impact of technology on society, engineering pedagogy while incorporating elements of self-awareness, mindfulness and values should also form a core of investigations.
            </p>
        </div>
        
    </div>    
         
           
  );
}  

export default rfocus_detais;
