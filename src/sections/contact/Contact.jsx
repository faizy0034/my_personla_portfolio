import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phone = '2347070670152'; // 🔁 Replace with YOUR WhatsApp number
    const url = `https://wa.me/${phone}?text=Hello%20Faizy,%0AMy%20name%20is%20${form.name}%0A${form.message}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="btn primary">Send via WhatsApp</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
