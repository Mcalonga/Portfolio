import {useState,useEffect} from 'react'
import {FaAngleDoubleUp} from 'react-icons/fa'

const Scrolltop = () => {
    const [showscroll, setshowscroll] = useState(false)

    useEffect(() => {
        if(window.screenY < 300) {
            setshowscroll(true)
        } else {
            setshowscroll(false)
        }
    },[])
    const scrollup = (elementref) => {
        window.scrollTo({
          top : 0,
          behavior: 'smooth'
        })
    
      }
    



  return (
    <div>
        { showscroll && <FaAngleDoubleUp className='but-top' size={30} onClick={scrollup}/>}
    </div>
  )
}

export default Scrolltop