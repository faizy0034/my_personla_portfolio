import './testimonials.css'
import testimonials from './data'

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="container">
        <h2 className="section-title">Testimonials</h2>
        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <div key={index} className="testimonial-card">
              <img src={item.image} alt={item.name} className="testimonial-img" />
              <p className="testimonial-message">"{item.message}"</p>
              <h4>{item.name}</h4>
              <small>{item.role}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
