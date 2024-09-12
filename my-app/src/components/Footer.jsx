import React from 'react'
import {AiFillInstagram,AiFillFacebook,AiFillLinkedin,AiFillTwitterSquare}  from "react-icons/ai"
const Footer = () => {
  return (
    <footer>
        <h2>Follow Me :</h2>
        <div>
        <a href="https://www.instagram.com/_sumit_688" target='blank'><AiFillInstagram/></a>
        <a href="https://www.linkedin.com/in/sumit-kumai/" target='blank'><AiFillLinkedin/></a>
        <a href="https://www.facebook.com/profile.php?id=100070315405528" target='blank'><AiFillFacebook/></a>
        <a href="https://twitter.com/sumit_kumai" target='blank'><AiFillTwitterSquare/></a>
        </div>
    </footer>
  )
}

export default Footer
