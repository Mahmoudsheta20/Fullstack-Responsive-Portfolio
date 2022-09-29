import React from 'react'
import {SocialMedia, NavigationDot} from '../components'

const AppWrap = (Component, idName , classNames) => ({theme}) =>{
  return (
    <div id={theme === 'dark' ?'dark':idName} className={`app__container ${classNames}`}>
<SocialMedia/>
<div className="app__wrapper app__flex">
<Component/>
<div className="copyright">
          <p className=" logo">@2022 <span className='logo'>Sheta</span> </p>
          <p className="p-text">All rights reserved</p>
        </div>

</div>
<NavigationDot active={idName} />    
    </div>
  )
}

export default AppWrap