import './App.scss'
import {About , Footer, Header,Testimonial,Work, Skills} from './container'
import {Navbar} from './components'
import Tail from './container/Tail/Tail'
import useLocalStorage from 'use-local-storage'

const  App = ()=> {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  
    return <div className = 'app' data-theme={theme}>
<div className="overlay"></div>

    
    <Navbar theme={theme} setTheme ={setTheme}/>
<Header theme={theme}/>

     <About/>
<Work />
<Skills/>
<Testimonial/>
<Footer/>
<Tail/>
     </div>
}

export default App