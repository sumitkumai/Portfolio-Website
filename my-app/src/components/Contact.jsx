import React, { useState } from 'react'
import toast from "react-hot-toast"
import {motion} from 'framer-motion'
import emailjs from "emailjs-com";

const Contact = () => {

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [message,setMessage] = useState("")

  const submitHandler = (e) => {
    e.preventDefault();
  
    const templateParams = {
      name: name,
      email: email,
      message: message,
    };
  
    emailjs
      .send(
        "service_wkdpvrs",
        "template_lab9bt7",
        templateParams,
        "gr-C4wwc_EL_MpIPX"
      )
      .then(
        () => {
          toast.success("Thank you for reaching out! I have received your message and will respond to you shortly.",{duration:4000,position:'bottom-center'});
          setName('');
          setEmail('');
          setMessage('');
        },
        () => {
          toast.error("Failed to send your message. Please try again.",{duration:4000,position:'bottom-center'});
        }
      );
  };

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
