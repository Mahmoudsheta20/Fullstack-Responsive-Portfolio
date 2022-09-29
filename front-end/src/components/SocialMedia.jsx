import React from 'react'
import {BsTwitter, BsInstagram,    BsLinkedin} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
const SocialMedia = () => {
  return (
    <div className='app__social'>
   
   
   
    <a href='https://twitter.com/mahmoudsheta789' target="_blank" rel="noreferrer">
       <BsTwitter/>

    </a>
    <a href='https://www.linkedin.com/in/mahmoud-sheta-7430a7223/' target="_blank" rel="noreferrer">
         <BsInstagram/>  

    </a>
    <a href='https://www.facebook.com/mahmoud.sheta.7921/' target="_blank" rel="noreferrer">
          <FaFacebookF/>  

    </a>
    <a href='https://www.linkedin.com/in/mahmoud-sheta-7430a7223/' target="_blank" rel="noreferrer">
          <BsLinkedin />

    </a>
    
    </div>
  )
}

export default SocialMedia