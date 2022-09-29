import React from 'react'
import './Navbar.scss'
import { HiOutlineSun , HiOutlineMoon,} from 'react-icons/hi'
import {motion} from 'framer-motion'
import{IoBriefcaseOutline,IoLayersOutline,IoHomeOutline,IoPersonOutline,IoMailOpenOutline,IoPeopleOutline} from 'react-icons/io5' 
export const items = ['home', 'about',  'work', 'skills','testimonial','contact']
const Navbar = ({theme, setTheme}) => {
const switchTheme = ()=>{
  const newTheme = theme === 'light' ?'dark':'light'
  setTheme(newTheme)
}
  return (
    <>
      <nav className="app__navbar">
      <div className="app__navbar-logo">
      <h2 className="head-text">Sheta</h2>
      </div>
      <ul className="app__navbar-links">
        {items.map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
<div className="app__navbar-theme" onClick={switchTheme}>
   {theme === 'dark' ? <HiOutlineSun/> :<HiOutlineMoon/> }   
</div>


  
    </nav>


    <nav>
      <div className="app__navbar-menu">

          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            {/* <ul>
              {items.map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul> */}

            <ul>

     <li><a href="#home"> <IoHomeOutline/> </a></li>
       <li><a href="#about"> <IoPersonOutline/> </a></li>
 <li><a href="#work"> <IoBriefcaseOutline/> </a></li>
   <li><a href="#skills"> <IoLayersOutline/> </a></li>
   <li><a href="#testimonial"> <IoPeopleOutline/> </a></li>
              <li><a href="#contact"><IoMailOpenOutline/> </a></li>
  
              
         
             
             
           
               
            </ul>
          </motion.div>
      </div>
    </nav>
    </>

  )
}

export default Navbar