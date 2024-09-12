import React from 'react'
import {Carousel} from "react-responsive-carousel"
import data from "../assets/data.json"
import "react-responsive-carousel/lib/styles/carousel.min.css"
const Projects = () => {
  return (
    <div id='projects'>
      <h2>Projects</h2>
      <section>
        <article>
          <Carousel showArrows={true} showIndicators={false} showStatus={false} showThumbs={false} interval={2000} infiniteLoop={true} autoPlay={true}>
              {
                data.projects.map(i=>(
                  <div key={i.title} className='projectItem'>
                    <img src={i.imgsrc} alt={i.title} />
                    <aside>
                      <h3>{i.title}</h3>
                      <p>{i.discription}</p>
                      <a href={i.url} target='blank'>View Demo</a>
                    </aside>
                  </div>
                ))
              }
          </Carousel>
        </article>
      </section>
    </div>
  )
}

export default Projects
