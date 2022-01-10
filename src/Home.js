import React from 'react';
import Contact from './Contact';
import Projects2 from './Projects2';
import About from './About';
import Nav from './Nav';
import Footer from './Footer';

const HomeTop = () => {
  return (
    <section id="herocontainer">
      <img id="homehero" src="/images/home-background.jpeg" alt="Background for John Pirog - full stack developer"/>
      <div id="herotop">
        <h1>John Pirog</h1>
        <p>&nbsp;&nbsp;&nbsp;Full Stack web developer<br />
        </p>
      </div>
    </section>
  )
}

const Home = () => {
  return (
    <div>
      <HomeTop />
      <Nav />
      <About />
      <Projects2 />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home;
