import React from 'react';
import Contact from './contact';
import Projects from './projects';
import About from './about';
import Nav from './nav';
import Footer from './footer';

const HomeTop = () => {
  return (
    <section id="herocontainer">
      <img id="homehero" src="/liveforthecode.jpeg"/>
      <div id="herotop">
        <p>Hello, I'm John Pirog</p>
        <p>&nbsp;&nbsp;&nbsp;Full Stack Developer</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;And I love to write code...</p>
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
// <HomeBottom />
