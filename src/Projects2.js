import React from 'react';

const Project2 = ( {project} ) => {

  return (
    <div className="project" style={{backgroundColor: project.color} }>
      <h1>{ project.name }</h1>
      <div className="projectsides">
        <div className="projectleft">
          <iframe src={ project.video } title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" allowFullScreen></iframe>
        </div>
        <div className="projectright">
          <h3>Major Technologies</h3>
          <div className="projectlogos">
          { project.tech.map(c => 
            <img className="projectlogo" src={c[0]} alt={c[1]}></img>          
          )}
          </div>
        </div>            
      </div>
      <ul className="projectlinks">
        <li><a href={project.site} target="_blank">Explore Site</a></li>
        <li><a href={project.github} target="_blank" >GitHub</a></li>
      </ul>
      <div className="projecttext"><p>{ project.description }</p></div>
    </div>
  )
}

const projectData = [
  { name: "Grace Coffee",
    color: 'lightblue',
    image: "gracecoffee1.jpg",
    description: "As part of Fullstack Academy's \"Grace Shopper\" senior phase eCommerce project, our team wrote a site to sell gourmet coffee. The team worked extremely well together. My areas of focus were the database, numerous APIs, Redux thunks, and some of the front-end components.",
    technologies: ["React", "Redux", "Router", "Node", "Express", "Postgres", "Sequelize"],
    video: "https://www.youtube.com/embed/2WUD5zVybYY?",
    github: "https://github.com/Team-2-Grace-Shopper/team-2-grace-shopper",
    site: "https://fsa-team2-coffee.herokuapp.com/home",
    id: 1,
    tech:[
      ["/images/apirest.png", "REST API"],
      ["/images/axios.png", "axios"],
      ["/images/css.png", "CSS"],
      ["/images/git.png", "Git"],
      ["/images/html.png", "HTML"],
      ["/images/javascript.png", "Javascript"],
      ["/images/node.png", "Node"],
      ["/images/postgres.png", "Postgres"],
      ["/images/react.png","ReactJS React"],
      ["/images/redux.png", "Redux"],
      ["/images/sequelize.png","Sequelize"],
    ]
  },
  { name: "CoPilot",
    color: 'gray',
    image: "copilot.jpg",
    description: "Our senior phase capstone project was a site where a group of people can co-plan a trip. This will ease the planning when a group of friends or a families are going somewhere together. While I again focused on the database, numerous APIs, and Redux thunks, i also wrote some of the front-end components.",
    technologies: ["React", "Redux", "Router", "Node", "Express", "Postgres", "Sequelize"],
    video: "https://www.youtube.com/embed/qcl9iqdCT8A",
    github: "https://github.com/Jpirog/CoPilot",
    site: "https://copilot-2014.herokuapp.com/aboutus",
    id: 2,
    tech:[
      ["/images/apirest.png", "REST API"],
      ["/images/axios.png", "axios"],
      ["/images/css.png", "CSS"],
      ["/images/git.png", "Git"],
      ["/images/html.png", "HTML"],
      ["/images/javascript.png", "Javascript"],
      ["/images/node.png", "Node"],
      ["/images/postgres.png", "Postgres"],
      ["/images/react.png","ReactJS React"],
      ["/images/redux.png", "Redux"],
      ["/images/sequelize.png","Sequelize"],
    ]

  },
];

const Projects2 = props => {
  return (
    <section id="projects">
      <div id="projcontainer">
        { projectData.map(curr => <Project2 project={ curr } key={curr.id}/>)
        }
      </div>
    </section>
  )
}

export default Projects2;
