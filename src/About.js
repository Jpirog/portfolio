import React from 'react';
import PageTitle from './PageTitle';

const About = props => {
  return (
    <section id="about">
      <h2>About me: I'm John Pirog and I love writing code!</h2>
      <div>
        <img id="aboutlive" src="liveforthecode.jpg" alt="John Pirog - full stack develper"/>
        <div className="proficiency">
          <img src="apirest.png" alt="REST API"></img>
          <img src="axios.png" alt="axios"></img>
          <img src="babel.png" alt="Babel"></img>
          <img src="css.png" alt="CSS"></img>
          <img src="express.png" alt="Express"></img>
          <img src="git.png" alt="Git"></img>
          <img src="html.png" alt="HTML"></img>
          <img src="javascript.png" alt="Javascript"></img>
          <img src="json.png" alt="JSON"></img>
          <img src="node.png" alt="Node"></img>
          <img src="postgres.png" alt="Postgres"></img>
          <img src="react.png" alt="ReactJS React"></img>
          <img src="redux.png" alt="Redux"></img>
          <img src="sequelize.png" alt="Sequelize"></img>
          <img src="sql-server.png" alt="SQL"></img>
          <img src="webpack.png" alt="Webpack"></img>
          <img src="oracle.png" alt="Oracle"></img>
          <img src="b2b.png" alt="Oracle"></img>
          <img src="b2c.png" alt="Oracle"></img>
          <img src="technology.png" alt="Oracle"></img>
          <ul>
            <li>ERP - Oracle eBusiness Suite</li>
            <li>eCommerce - B2B and B2C</li>
            <li>Solutions architecture</li>
            <li>Business relationship management</li>
          </ul>
        </div>
      </div>
      <p id="abouttext">Over the years, I've developed software in many languages and platforms. 
        From mainframes to Unix to Windows to the web, I've programmed
        in languages like Python, SQL Windows, Microsoft products, and now 
        Javascript, React, and the latest web technologies. The most important thing when developing
        is to ensure the produce meets what the business users need for the company to thrive. 
      </p>
    </section>
  )
}

export default About;