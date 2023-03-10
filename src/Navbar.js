import React, { useEffect, useState } from 'react'
import './Nav.css'

const Navbar = () => {
    const [show,handleShow] = useState(false);
    const transitionNavbar =() =>{
        if(window.screenY>100){
            handleShow(true)
        }
        else{
            handleShow(false)
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll",transitionNavbar);
        return ()=>window.removeEventListener("scroll",transitionNavbar);
    },[]
    )
  return (
    <div className={`nav ${show && "nav_black"}`}>
    <div className='nav_content'>
    <img className='img_logo' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"  alt=''/>
    <img className='img_avathar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt='' />
    </div>
    </div>
    
  )
}

export default Navbar