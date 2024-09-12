import React from 'react'
import {AiOutlineMenu} from "react-icons/ai"
const Header = ({menuOpen,setMenuOpen}) => {
  return (
    <>
    <nav>
        <NavContent setMenuOpen={setMenuOpen}/>
    </nav>
    <button className='navBtn' onClick={()=>setMenuOpen(!menuOpen)}><AiOutlineMenu/></button>
    </>
  )
}

export const HeaderPhone=({menuOpen,setMenuOpen})=>{
  return(
    <div className={`navPhone ${menuOpen?"navPhoneComes":""}`}>
      <NavContent setMenuOpen={setMenuOpen}/>
    </div>
  )
}  

const NavContent = ({setMenuOpen})=>(
    <>
    <h2>Sumit Kumai</h2>
    <div>
      {/* eslint-disable-next-line */}
      <a onClick={()=>setMenuOpen(false)} href="#">Home</a>
      <a onClick={()=>setMenuOpen(false)} href="#projects">Projects</a>
      <a onClick={()=>setMenuOpen(false)} href="#contact">Contact</a>
    </div>
    <a href="mailto:kumaisumit688@gamil..com">
        <button>Email</button>
    </a>
    </>
);

export default Header
