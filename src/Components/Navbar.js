import React from 'react'
import { MdEmail } from "react-icons/md";
import {BsTelephone} from "react-icons/bs"

const Navebar = () => {
  return (
    <nav>
        <div className='nav-log-container'> 
            <logo className="logo">OPENAUTO</logo>
        </div>
        <div className='navbar-links-container'>
            <a className='phone ' href ="#@"> <BsTelephone/> +769 586 4558</a>
            <a className='service' href ="#@"> <MdEmail/> service@openauto.ca</a>
            <button className="primay-button">download the mobile app</button>

        </div>
    </nav>
  )
}

export default Navebar