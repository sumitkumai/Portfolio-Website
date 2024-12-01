import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight ,BsChevronDown} from "react-icons/bs";
import me from "../assets/logo.png";
import resume from '../assets/Resume.pdf'

const Home = () => {
  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
    img: {
      initial: {
        x: "+100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
  };

  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I am <br /> Sumit Kumai
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A Java Programmer","A Full Stack Web Developer"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href={resume} target="_blank">Resume</a>
            <a href="#projects">
              Projects
              <BsArrowUpRight />
            </a>
          </div>

          <p>Contact : <a href="mailto:kumaisumit688@gmail.com">kumaisumit688@gmail.com</a></p>

        </div>
      </section>

      <section>
            <motion.img {...animations.img} src={me} alt="sumit" />
      </section>

      <a href="#projects"><BsChevronDown/></a>
    </div>
  );
};

export default Home;
