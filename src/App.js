
import './App.css';
import Inicio from './components/Inicio';
import About from './components/About';
import Skills from './components/Skills';
import {useRef} from 'react'
import Scrolltop from './components/Scrolltop';
import Projetos from './components/Projetos';

function App() {
  const inicio = useRef(null)
  const about = useRef(null)
  const skills = useRef(null)
  const portfolio = useRef(null)

  const scrolltoarea = (elementref) => {
    window.scrollTo({
      top : elementref.current.offsetTop,
      behavior: 'smooth'
    })

  }




  return (
    <div className="App">
      <div className='primeira-pagina'>
        <Scrolltop/>
        <div>
        <header className='header-container'>
        
            <h1>Portfolio</h1>
            <div className='button-container'>
                <button onClick={() => (scrolltoarea(inicio))} >Inicio</button>
                <button onClick={() => (scrolltoarea(about))} >Sobre mim </button>
                <button onClick={() => (scrolltoarea(portfolio))} > Projetos </button>
                <button onClick={() => (scrolltoarea(skills))} >Habilidades</button>
            </div>
        </header>
        </div>
        <div ref={inicio}>
        <Inicio/>
        </div>
      </div>
      <div ref={about}>
        <About/>
      </div>
      <div ref={portfolio}>
        <Projetos/>
      </div>
      <div ref={skills}>
        <Skills/>
      </div>
    </div>
  );
}

export default App;
