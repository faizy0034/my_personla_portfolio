import FAIZY from '../../assets/faizytech.png.jpg'
import './header.css'
import data from './data'
const Header = () => {
  return (
    <header id='header'>
     <div className="container header__container">
      <div className="header__profile">
        <img src={FAIZY} alt="hearder portrait" />
      </div>
      <h3>Faizy Tech</h3>
      <p>
        you are a click away from building your dream website or wb app. send me 
        the details of your project for a modern, mobile responsive, highly
        performant website today!
      </p>
      <div className="header__cta">
        <a href="#contact" className='btn primary'>Let's Talk</a>
        <a href="#portfolio" className='btn light'>My Work</a>
      </div>
      <div className="header__socials">
        {
          data.map(item => <a key={item.id} href={item.link} target='_blank' rel='noopenner noreferrer'>{item.icon}</a>)
        }
      </div>
      </div>  
    </header>
  )
}

export default Header
