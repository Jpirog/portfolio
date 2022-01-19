import React from 'react';

const About = props => {
  return (
    <section id="about">
      <p id="abouttext">Over the years, I've developed software in many languages and platforms. 
      From mainframes to Unix to Windows to the web, I've programmed
      in languages like Python, SQL Windows, Microsoft products, and now 
      Javascript, React, and the latest web technologies. The most important thing with software
      is to ensure the product meets what the business users need for the company to thrive.
      </p>
      <div>
        <figure>
          <img id="aboutlive" src="/images/liveforthecode.jpg" alt="John Pirog - full stack develper"/>
          <figcaption>Oracle OpenWorld - Featured speaker for Oracle CPQ</figcaption>
        </figure>
        <div className="proficiency">
          <img src="/images/apirest.png" alt="REST API"></img>
          <img src="/images/axios.png" alt="axios"></img>
          <img src="/images/babel.png" alt="Babel"></img>
          <img src="/images/css.png" alt="CSS"></img>
          <img src="/images/express.png" alt="Express"></img>
          <img src="/images/git.png" alt="Git"></img>
          <img src="/images/html.png" alt="HTML"></img>
          <img src="/images/javascript.png" alt="Javascript"></img>
          <img src="/images/json.png" alt="JSON"></img>
          <img src="/images/node.png" alt="Node"></img>
          <img src="/images/postgres.png" alt="Postgres"></img>
          <img src="/images/react.png" alt="ReactJS React"></img>
          <img src="/images/redux.png" alt="Redux"></img>
          <img src="/images/sequelize.png" alt="Sequelize"></img>
          <img src="/images/sql-server.png" alt="SQL"></img>
          <img src="/images/webpack.png" alt="Webpack"></img>
          <img src="/images/oracle.png" alt="Oracle"></img>
          <img src="/images/b2b.png" alt="Oracle"></img>
          <img src="/images/b2c.png" alt="Oracle"></img>
          <img src="/images/technology.png" alt="Oracle"></img>
          <ul id="othertech">
            <li>ERP - Oracle eBusiness Suite</li>
            <li>eCommerce - B2B and B2C</li>
            <li>Solutions architecture</li>
            <li>Business relationship management</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About;

// <img id="aboutlive" src="/images/liveforthecode.jpg" alt="John Pirog - full stack develper"/>
