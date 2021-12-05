import React from 'react';
import PageTitle from './PageTitle';

const About = props => {
  return (
    <section id="about">
      <h2>About me: I'm John Pirog and I love writing code!</h2>
      <div>
        <img id="aboutlive" src="liveforthecode.jpg" />
        <div className="proficiency">
          <img src="apirest.png"></img>
          <img src="axios.png"></img>
          <img src="babel.png"></img>
          <img src="css.png"></img>
          <img src="express.png"></img>
          <img src="git.png"></img>
          <img src="html.png"></img>
          <img src="javascript.png"></img>
          <img src="json.png"></img>
          <img src="node.png"></img>
          <img src="postgres.png"></img>
          <img src="react.png"></img>
          <img src="redux.png"></img>
          <img src="sequelize.png"></img>
          <img src="webpack.png"></img>
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
        in languages like Perl, Python, SQL Windows, Microsoft products, and now 
        the latest web technologies. I've always kept efficiency, 
        performance, and memory considerations in mind when developing. 
      </p>
    </section>
  )
}

export default About;