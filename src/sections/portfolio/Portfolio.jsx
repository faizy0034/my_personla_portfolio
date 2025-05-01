import './portfolio.css'
import data from './data'
import Card from '../../components/Card'
import { FaSquareGithub } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";



const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>My Portfolio</h2>
      <p>some of my recent work</p>
      <div className="container portfolio__container">
        {
          data.map(item => (
            <Card key={item.id} className="portfolio light">
              <div className="portfolio__sub-container">
              <img className="portfolio__img" src={item.img} alt="" />
              <div className="portfolio__details">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
                <div className="take_a_look">
                  <a href="https://livedemo.com" target='_blank' rel='noopenner noreferrer' className='btn primary'><FaPlay /> Live Demo</a>
                  <a href="https://github.com/faizy0034/" target='_blank' rel='noopenner noreferrer' className='btn light'><FaSquareGithub /> Github</a>
                </div>
                </div>
              </div>
            </Card>
          ))
        }
       
      </div>
    </section>
  )
}

export default Portfolio
