import React from 'react'
import './foot.css'
import { MdEmail } from "react-icons/md";
import {BsTelephone} from "react-icons/bs"
import {FiFacebook} from "react-icons/fi"
import {FiTwitter} from "react-icons/fi"
import {CiYoutube} from "react-icons/ci"
import {CiLinkedin} from "react-icons/ci"
import {FaInstagram} from "react-icons/fa"


const foot = () => {
  return (
    
   
     
    <nav>
        
    <div className='nav-log-container'> 
        <logo className="logo">OPENAUTO</logo>
        <div className='details'>
      <p className='space'> <BsTelephone /> +769 586 4558</p>
        <p>  <MdEmail/> service@openauto.in</p>
      </div>
        <p className='para'>open auto @ allrights reserved</p>
        <div className='details'>
      <p className='pr-space'>Privacy policy</p>
      <p className='pr-space'>Terms of use</p>
      <p>Cookie policy</p>
    </div>
    <div className='icons'>
        <FiFacebook className='icon-space'/>
         <FiTwitter className='icon-space'/>
         <CiYoutube className='icon-space'/>
         <CiLinkedin className='icon-space'/>
         <FaInstagram className='icon-space'/>
        </div>

    </div>
    
    <div className='navbar-links-container'>
      
      <a href ="#@"> <BsTelephone/> +769 586 4558</a>
        <a href ="#@"> <MdEmail/> service@openauto.ca</a>
      <p className='para1'>open auto @ allrights reserved</p>
        
        <div className='icons'>
        <FiFacebook className='facebook'/>
         <FiTwitter className='twitter'/>
         <CiYoutube className='youtube'/>
         <CiLinkedin className='linkedin'/>
         <FaInstagram className='instagram'/>
        </div>

    </div>
</nav>

  )
}

export default foot