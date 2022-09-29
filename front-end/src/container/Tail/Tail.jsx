import React from 'react'
import {items} from '../../components/Navbar/Navbar'
import './Tail.scss'
const Tail = () => {
  return (
    <div className='app__tail app__flex'>
 <h2 className="head-text">Sheta</h2>

 <ul className="app__navbar-links">
        {items.map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="copyright">
          <p className="p-text">@2022 SHETA</p>
          <p className="p-text">All rights reserved</p>
        </div>
    </div>
  )
}

export default Tail