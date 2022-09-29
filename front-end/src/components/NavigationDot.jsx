import React from 'react'
import { items } from './Navbar/Navbar'
const NavigationDot = ({active}) => {
  return (
    <div className='app__navigation'>
    {items.map((item ,index) => (
               
                  <a href={`#${item}`}
                  key={item+index} 
                  className = 'app__navigation-dot'
                  style={active === item ?{backgroundColor:'#313BAC'}:{}}
                  >
                   
                  </a>
              
              ))}
    
    
    </div>
  )
}

export default NavigationDot