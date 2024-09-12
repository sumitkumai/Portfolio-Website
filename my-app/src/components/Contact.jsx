import React, { useState } from 'react'
import toast from "react-hot-toast"
import {motion} from 'framer-motion'

const Contact = () => {

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [message,setMessage] = useState("")

  const submitHandler = (e)=>{
    e.preventDefault();
    toast.success("Message Sent");
    setName('');
    setEmail('');
    setMessage('');
  }

  const animation={
    form:{
      initial: {
        x:"-100%",
        opacity:0
      },
      whileInView : {
        x:"0%",
        opacity:1
      },
      transition:{
        delay:0.2
      }
    },

    button:{
      initial: {
        y:"-100%",
        opacity:0
      },
      whileInView : {
        y:"0%",
        opacity:1
      },
      transition:{
        delay:0.4
      }
    }
  }

  return (
    <div id='contact'>
      <section>
        <motion.form onSubmit={submitHandler} {...animation.form} id='form'>
          <h2>Contact Me</h2>
          <input type="text" placeholder='Your Name' required value={name} onChange={(e)=>setName(e.target.value)}/>
          <input type="email" placeholder='Your Email' required value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <input type="text" placeholder='Your Message' required value={message} onChange={(e)=>setMessage(e.target.value)}/>

          <motion.button {...animation.button} type='submmit'>Send</motion.button>
        </motion.form>
      </section>
    </div>
  )
}

export default Contact
