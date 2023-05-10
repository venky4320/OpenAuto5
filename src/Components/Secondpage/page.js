import React from 'react'
import image1 from '../../Components/images/image1.svg'
import './page.css'
const page = () => {
  return (
    <div>
    
    < div className='page-container'>
        <div>
       
        <img className='image2' src={image1} alt=''/>
       
        </div>
        <div className='page-container1'>
            <h2 className='heading2'>Focused on Time Saving</h2>
            <p className='paragraph2'>Lorem Ipsum is simply dummy text of the
                 pnting and typesetting industry. Lorem Ipsum 
                 has been the industry's standard dummy text ever 
                 since the 1500s, when an unknown printer took 
                 a galley of type and scrambled it to make a type 
                 specimen book. It has survived not only five centuries, 
                 but also the leap into electronic typesetting, remaining essentially unchanged. It was</p>
        <button className='button1'>Download the mobile app</button>

      
        </div>
  
     
    
  
    </div>
    <div className='page-container1'>
      <h1>Focused on Time Saving</h1>
      <p className='para-mb'>
      Lorem Ipsum is simply dummy text of the
                 pnting and typesetting industry. Lorem Ipsum 
                 has been the industry's standard dummy text ever 
                 since the 1500s, when an unknown printer took 
                 a galley of type and scrambled it to make a type 
                 specimen book. It has survived not only five centuries, 
                 but also the leap into electronic typesetting, remaining essentially unchanged. It was
      </p>
      <button className='button2'>Download the mobile app</button>
      <img className='image4' src={image1} alt=''/>
    </div>
    </div>
    

   
    
  )
}

export default page
