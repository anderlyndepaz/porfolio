import React from 'react';
// import './Contact.css'; // Archivo CSS para estilos personalizados

const Contact = () => {
  return (
    <section className="contact-container" id="contact">
      <h2 className="contact-title">Contacto</h2>
      <p className="contact-description">Si deseas trabajar conmigo o tienes alguna pregunta, ¡no dudes en ponerte en contacto!</p>

      <div className="contact-info">
        <p><strong>Correo electrónico:</strong> <a href="mailto:anderlyndepazhurtado@gmail.com">anderlyndepazhurtado@gmail.com</a></p>
        <p><strong>Teléfono:</strong> <a href="tel:+34662576966">+34 662 576 966</a></p>
      </div>

      <form className="contact-form">
        <h3>Envíame un mensaje</h3>
        <label htmlFor="name">Nombre</label>
        <input type="text" id="name" name="name" placeholder="Tu nombre" required />

        <label htmlFor="email">Correo electrónico</label>
        <input type="email" id="email" name="email" placeholder="Tu correo electrónico" required />

        <label htmlFor="message">Mensaje</label>
        <textarea id="message" name="message" placeholder="Tu mensaje" rows="4" required></textarea>

        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contact;