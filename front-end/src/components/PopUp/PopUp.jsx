import React,{useState} from 'react'
import { AiOutlineClose ,AiOutlineArrowRight ,AiOutlineArrowLeft ,AiFillEye, AiFillGithub} from 'react-icons/ai';
import { urlFor} from '../../client';
import {motion} from 'framer-motion'

const PopUp = ({ PopUp, Data}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return ( 

    <div className="app__work-content ">
    <div className="icon">
      <AiOutlineClose onClick={()=> {PopUp(false)
         document.querySelector('.overlay').style.display = 'none'} 

}/>
    </div> 
    <div className="app__pupup">
     
  <img src={urlFor(Data.images[currentIndex])} alt="" />

<div className="app__popupimage-icon">
<AiOutlineArrowLeft onClick={()=> currentIndex <= 0 ? currentIndex : setCurrentIndex(currentIndex - 1)}/>
<AiOutlineArrowRight onClick={()=> currentIndex >= Data.images.length - 1 ? currentIndex : setCurrentIndex(currentIndex + 1)} />
</div>
    </div>
    <div className="description">
      <h4 className="bold-text">Project description</h4>

    

      <p className="p-text" style={{ marginTop: 10 }}>{Data.description}</p>

    </div>

<div className="app__pop-footer">
  <h4 className="bold-text">{Data.titel}</h4>
 
<div className="app__pop-left">
<a href={Data.projectLink} target="_blank" rel="noreferrer">
<motion.div

  className="app__flex"
>
  <AiFillEye />
</motion.div>
</a>
 <a href={Data.codeLink} target="_blank" rel="noreferrer">

<motion.div
  transition={{ duration: 0.5 }}
  className="app__flex"
>
  <AiFillGithub/>
</motion.div>
</a>

</div>

</div>

    


      {/* <div className="app__work-tag app__flex">
      {
        work.tags[0]?<p className="p-text">{work.tags[0]}</p>:<p className="p-text">All</p>
      } */}
        
      {/* </div> */}
    </div>
    

 
 
  )
}

export default PopUp