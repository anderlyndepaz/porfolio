import React from 'react';
// import './Footer.css'; // Archivo CSS para estilos personalizados

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Anderlyn. Todos los derechos reservados.</p>
        <div className="footer-links">
        <a href="https://github.com/anderlyndepaz" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/anderlyn-de-paz/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="#contact">Contacto</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
