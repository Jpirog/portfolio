import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';
import PageTitle from './PageTitle';

const Project = ( {project} ) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  }
  
  const handleCloseModal = () => {
    setShowModal(false);
  }
  
  const toggleModal = () => {
    setShowModal(!showModal);
  }

  return (
    <div className="project">
      <p>{project.name}</p>
      <img src={project.image} />
      <p className="projdesc">{project.description}</p>
      <hr />
      <ul>
        { project.technologies.map((tech,i) => <li key={i}>{ tech }</li>) }
      </ul>
      <hr />
      <ul>
        <li id="video" onClick={handleOpenModal}>Video
        </li>
        <ReactModal 
          isOpen={showModal}
          closeTimeoutMS={1000}
          contentLabel="minimal"
          onRequestClose={() => toggleModal()}
          // onRequestClose={handleCloseModal}
          shouldCloseOnOverlayClick={ true }
          shouldCloseOnEsc={ true }
          shouldReturnFocusAfterClose={ true }
          preventScroll={ true }
          style={{
            overlay: {
              position: 'fixed',
              top: 210,
              left: 210,
              right: 210,
              bottom: 210,
              backgroundColor: 'rgba(255, 255, 255, 0.75)'
            },
            content: {
              position: 'absolute',
              top: '40px',
              left: '40px',
              right: '40px',
              bottom: '40px',
              border: '1px solid #ccc',
              background: '#fff',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '4px',
              outline: 'none',
              padding: '20px'
            }
          }}
        >
          <button onClick={handleCloseModal}>X</button>
          <div>
            <iframe width="560" height="315" src={project.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" allowFullScreen></iframe>
          </div>
        </ReactModal>
        <li><a href={project.site} target="_blank">Site</a></li>
        <li><a href={project.github} target="_blank" >GitHub</a></li>
      </ul>
    </div>
  )
}
// <a href="https://www.youtube.com/embed/2WUD5zVybYY" target="_blank">Video</a>

const projectData = [
  { name: "Grace Coffee",
    image: "gracecoffee1.jpg",
    description: "As part of Fullstack Academy's \"Grace Shopper\" senior phase eCommerce project, our team wrote a site to sell gourmet coffee. The team worked extremely well together. My areas of focus were the database, numerous APIs, Redux thunks, and some of the front-end components.",
    technologies: ["React", "Redux", "Router", "Node", "Express", "Postgres", "Sequelize"],
    video: "https://www.youtube.com/embed/2WUD5zVybYY?&autoplay=1",
    github: "https://github.com/Team-2-Grace-Shopper/team-2-grace-shopper",
    site: "https://fsa-team2-coffee.herokuapp.com/home",
    id: 1,
  },
  { name: "CoPilot",
    image: "copilot.jpg",
    description: "Our senior phase capstone project was a site where a group of people can co-plan a trip. This will ease the planning when a group of friends or a families are going somewhere together. While I again focused on the database, numerous APIs, and Redux thunks, i also wrote some of the front-end components.",
    technologies: ["React", "Redux", "Router", "Node", "Express", "Postgres", "Sequelize"],
    video: "https://www.youtube.com/embed/qcl9iqdCT8A",
    github: "https://github.com/Jpirog/CoPilot",
    site: "https://copilot-2014.herokuapp.com/aboutus",
    id: 2,
  },
];

const Projects = props => {
  return (
    <section id="projects">
      <PageTitle headingText="Projects" />
      <div id="projcontainer">
        { projectData.map(curr => <Project project={ curr } key={curr.id}/>)
        }
      </div>
    </section>
  )
}

export default Projects;

// { project.technologies.map((tech,i) => <li>{tech}{i !== project.technologies.length-1 ? '/' : ''}</li>) }
