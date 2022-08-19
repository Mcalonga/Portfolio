import './Projetos.css'
import Underconstruct from './under-construction-icon.png'

const projetos = () => {
  return (
    <div className='proj-container'>
      <h1>Projetos</h1>
      <div className='cards'>
        <div className='card1'>
          <div className='image-container'>
            <img src={Underconstruct} alt="" />
          </div>
          <div className='information'>
            <h3> Coming soon.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis orci eu sem finibus hendrerit. Phasellus vel orci vehicula, porta eros id, gravida massa.</p>
          </div>
        </div>
        <div className='card1'>
          <div className='image-container'>
            <img src={Underconstruct} alt="" />
          </div>
          <div className='information'>
            <h3> Coming soon.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis orci eu sem finibus hendrerit. Phasellus vel orci vehicula, porta eros id, gravida massa.</p>
          </div>
        </div>
        <div className='card1'>
          <div className='image-container'>
            <img src={Underconstruct} alt="" />
          </div>
          <div className='information'>
            <h3> Coming soon.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis orci eu sem finibus hendrerit. Phasellus vel orci vehicula, porta eros id, gravida massa.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default projetos