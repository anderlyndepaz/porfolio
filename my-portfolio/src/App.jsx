import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './sections/Home';
// import About from './sections/About';
// import Projects from './sections/Projects';
import Contact from './sections/Contact';
import './styles/globals.scss';
import './styles/components.scss';

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="home">
          <Home />
        </section>
        {/* <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>*/}
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer /> 
    </div>
  );
}

export default App;
