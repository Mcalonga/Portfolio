import {useState} from 'react'
import './Skills.css'
import { DiReact,DiJavascript1,DiCss3 } from "react-icons/di"

const Skills = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);
  const [isHovering3, setIsHovering3] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };


  const handleMouseOver2 = () => {
    setIsHovering2(true);
  };

  const handleMouseOut2 = () => {
    setIsHovering2(false);
  };
  

  const handleMouseOver3 = () => {
    setIsHovering3(true);
  };

  const handleMouseOut3 = () => {
    setIsHovering3(false);
  };
    
  return (
    <div className='first-cont'>
    <h1 className='hab1'>HABILIDADES</h1>
    <div className='skills-container'>
        <div className='skills-buttons'>
            <button onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}> <DiReact size={70} /></button>
            <button onMouseOver={handleMouseOver2} onMouseOut={handleMouseOut2}> <DiJavascript1 size={70} /> </button>
            <button onMouseOver={handleMouseOver3} onMouseOut={handleMouseOut3}> <DiCss3 size={70} /> </button>
        </div>
        <div className='text-container'>
          
         {isHovering && <h2>Possuo 2 meses de conhecimento no framework React</h2> }
         {isHovering2 && <h2>Possuo 3 meses de conhecimento em Javascript</h2>}
         {isHovering3 && <h2>Possuo 3 meses de conhecimento em CSS</h2>}
         
        </div>
        <h3>contanto: mattradianz@gmail.com</h3>
    </div>
    </div>
  )
}

export default Skills