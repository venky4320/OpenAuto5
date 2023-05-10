import React  from 'react'
import { useState } from "react";
import Axios from "axios";
import Navbar from '../Navbar'
import image2 from '../../Components/images/image2.png'
import './home.css'
import {FiFacebook} from "react-icons/fi"
import {FiTwitter} from "react-icons/fi"
import {CiYoutube} from "react-icons/ci"
import {CiLinkedin} from "react-icons/ci"
import {FaInstagram} from "react-icons/fa"
const Home = () => {

  const initialState = { name: "", email: "",success:"" };
  const [formVal, setForm] = useState(initialState);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value,success } = e.target;
    setForm({ ...formVal, [name]: value });
  };

  const register = (e) => {
    e.preventDefault();
   
    setFormErrors(validate(formVal));
    
    Axios.post("http://localhost:3009/register",{userName:formVal.name,userEmail : formVal.email})
    

  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "UserName is Required";
      errors.success=""
    }
    else if (!values.email) {
      errors.email = "Email is Required";
      errors.success=""
    } else if (!regex.test(values.email)) {
      errors.email = "This Email is not valid";
      errors.success=""
    }
    else{
      setForm({name : "",email : "",})
      errors.success="Data Saved successfully..."
    }

    return errors;
  };


  return (
    
    <div className ="home-container">
        <div >
          <h1 className='new-heading'>OPENAUTO</h1>
        </div>
        <div className='new-container'>
        <Navbar/>
        </div>
        
        <div className='container'>
        <div>
        <h1 className='heading'>Vehicle Maintenance  From The Comfort of Your Home</h1>
        <p className='paragraph'>Open Auto Soothes the hassle of maintaining your vehicle and helps you deal with unexpected repairs worry-free.</p>
        <form className="flex flex-col gap-2" onSubmit={register}>
            <input
              className="input1"
              type="text"
              name="name"
              value={formVal.name}
              placeholder="Enter Your Name"
              onChange={handleChange}
            />
            <p className="text-red">{formErrors.name}</p>
            <input
              className="input1"
             
              name="email"
              value={formVal.email}
              onChange={handleChange}
              placeholder="Enter Your Email"
            />
            <p className="text-red">{formErrors.email}</p>
            
            <button
              className="button"
              type="submit font-sans"
            >
              Submit
            </button>
            <p className="text-green">{formErrors.success}</p>
          </form>
        </div>
        
        <div><img className='image2' src={image2} alt=''/></div>
        <div ><img className='image3' src={image2} alt=''/></div>
        
      </div>
      <div className='image-lp-container'>
        <div>
          <img src="https://res.cloudinary.com/dh0odgkdj/image/upload/v1683538776/1651832889534_npezs8.jpg" alt="" className='icon-image' />  
        </div>
        <div className='icons'>
          <FiFacebook className='facebook'/>
          <FiTwitter className='twitter'/>
          <CiYoutube className='youtube'/>
          <CiLinkedin className='linkedin'/>
          <FaInstagram className='instagram'/>
          
        </div>
      </div>

      
    </div>
  )
}

export default Home
