import React from 'react';
import PageTitle from './PageTitle';

const About = props => {
  return (
    <section>
      <PageTitle headingText="About" />
      <div id="about">
        <h3>I'm John Pirog and I really do love writing code!</h3>
        <p>Over the years, I've developed software in many languages and platforms. From mainframes to Unix to Windows to the web, I've programmed in languages like Perl, Python, SQL Windows, and Microsoft products. I've always kept efficiency, performance, memory considerations in mind when developing. Now I am concentrating on the newer Web components as well as full stack development.</p>
        <div id="proficiencies">
          <div className="proficiency">
            <p>Areas I'm proficient in</p>
            <ul>
              <li>Javascript</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>JSX</li>
              <li>React + Redux + Router</li>
              <li>PostgreSQL</li>
              <li>Sequelize, SQL, databases</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
          <div className="proficiency">
            <p>Areas i'm Learning
            </p>
            <ul>
            <li>Bootstrap</li>
            <li>MongoDB</li>
            <li>Python</li>
            </ul>
          </div>
          <div className="proficiency">
            <p>Other areas of expertise
            </p>
            <ul>
            <li>ERP - Oracle eBusiness Suite</li>
            <li>eCommerce - B2B and B2C</li>
            <li>Business relationships</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

  )
}

export default About;