import React,{useState} from 'react'
import {Link,NavLink} from 'react-router-dom'
import {FaBars,FaTimes} from 'react-icons/fa'
import {GrCloudComputer} from 'react-icons/gr'
import './Nav.css'

function Nav() {
    const [click,setclick]=useState(false)
   const clickevent=()=>{
        setclick(!click)
    }
    const seepage=()=>{
        setclick(false)
    }
    return (
        <>
          <nav className='navigation-bar' id={click ? 'nav-down-space' : ''}>
              <div className='navigation-bar-container'>
                  
                    <Link to='/' className='navbar-logo' > <GrCloudComputer className='navbar-logo-icon' /> IT WORLD </Link>
                    <div className='menubar-icon' onClick={clickevent}>
                       {click ? <FaTimes/> : <FaBars/>}
                    </div>
                    <ul className={click ? 'menu-items active':'menu-items'}>
                        <li onClick={seepage}><NavLink exact activeStyle={{color:"gray"}} to='/' className='menu-items-name'>Home</NavLink></li> 
                        <li onClick={seepage}><NavLink exact activeStyle={{color:"gray"}} to='/service' className='menu-items-name'>Services</NavLink></li>
                        <li onClick={seepage}><NavLink exact activeStyle={{color:"gray"}} to='/product' className='menu-items-name'>Products</NavLink></li>
                        <li onClick={seepage}><NavLink exact activeStyle={{color:"gray"}} to='/contact' className='menu-items-name'>Contact</NavLink></li>
                    </ul>
               </div> 
           </nav>  
        </>
    )
}

export default Nav
