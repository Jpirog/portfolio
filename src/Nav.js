import React from 'react'
import { Link } from 'react-router-dom';

const Nav = props => {
  return (
  <section id="nav">
    <ul id="navitems">
      <li><a href="#herocontainer">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </section>
  )
}

export default Nav;