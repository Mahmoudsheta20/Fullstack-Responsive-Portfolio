import React,{useEffect, useState} from 'react'
import './Work.scss'
import {AiOutlineExclamation } from 'react-icons/ai';

import {motion} from 'framer-motion'
import { urlFor, client } from '../../client';
import {AppWrap ,MotionWrap} from '../../wrapper'
import PopUp from '../../components/PopUp/PopUp'

const items = ['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All']
const Work = () => {
const [activeFilter, setActiveFilter] = useState('All');
const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
const [works, setWorks] = useState([]);
const [filterWork, setFilterWork] = useState([]);
const [popUp, setpupUp] = useState(false);
const [popData, setpopData] = useState({titel:'',description:'', images:'', codeLink:'',projectLink:''});

useEffect(() => {
  const query = '*[_type == "works"]';

  client.fetch(query).then((data) => {
    setWorks(data);
    setFilterWork(data);
  });
}, []);
  const handelFillter = (item)=>{
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  }


  const handelpupUp = (work) =>{
   setpupUp(true)
   setpopData({titel: work?.title , description:work.description, images:work.projectimage, projectLink:work.projectLink, codeLink:work.codeLink})
   document.querySelector('.overlay').style.display = 'block'

    

  }

  return (
   <>
      
      <h2 className="head-text">My Creative <span>Portfolio</span> Section</h2>

<div className="app__work-filter">
{items.map((item, index)=>(
  <div 
  key={index}
  onClick={()=> handelFillter(item)}
  className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
  
  >
{item}

  </div>
))}
</div>
  

  <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork?.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div
              className="app__work-img app__flex"
            >
              <img src={urlFor(work?.imgUrl)} alt={work?.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
               
               
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                    onClick={()=> handelpupUp(work)}
                  >
                    <AiOutlineExclamation />
                    
                  </motion.div>
               
              </motion.div>



            </div>
          
          </div>
        ))}

      {popUp && <PopUp  PopUp = {setpupUp} Data = {popData} />} 
      </motion.div>
 </>
  )
}

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg',
);