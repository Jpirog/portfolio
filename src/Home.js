import React from 'react';
import Contact from './Contact';
import Projects from './Projects';
import About from './About';
import Nav from './Nav';
import Footer from './Footer';

const HomeTop = () => {
  return (
    <section id="herocontainer">
      <img id="homehero" src="/homeimg1.jpeg"/>
      <div id="herotop">
        <p>Hello, I'm John Pirog</p>
        <p>&nbsp;&nbsp;&nbsp;Full Stack web developer<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and software engineer</p>
        <p>Let's collaborate...</p>
      </div>
    </section>
  )
}

const HomeBottom = () => {
  return (
    <div className="container">
    <p style={{"display":"none"}}>place holder for home - bottom if needed</p>
    </div>
  )
}

const Home = () => {
  return (
    <div>
      <HomeTop />
      <Nav />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home;
