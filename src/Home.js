import React from 'react';
import Contact from './contact';
import Projects from './projects';
import About from './about';
import Nav from './nav';

const HomeTop = () => {
  return (
    <div id="herocontainer">
      <img id="homehero" src="/liveforthecode.jpeg"/>
      <div id="herotop">
        <p>Hello, I'm John Pirog</p>
        <p>&nbsp;&nbsp;&nbsp;Full Stack Developer</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;And I love to write code!</p>
      </div>
    </div>
  )
}

const HomeBottom = () => {
  return (
    <div className="container">
    <p>Some text</p>
    </div>
  )
}

const Home = () => {
  return (
    <div>
      <HomeTop />
      <HomeBottom />
      <Nav />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home;
