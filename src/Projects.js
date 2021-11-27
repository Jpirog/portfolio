import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';

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
        { project.technologies.map((tech,i) => <li>{tech}{i !== project.technologies.length-1 ? ' / ' : ''}</li>) }
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
        <li><a href={project.github} target="_blank">GitHub</a></li>
      </ul>
    </div>
  )
}
// <a href="https://www.youtube.com/embed/2WUD5zVybYY" target="_blank">Video</a>

const projectData = [
  { name: "Grace Coffee",
    image: "gracecoffee1.jpg",
    description: "As part of Fullstack Academy's \"Grace Shopper\" senior phase eCommerce project, our team wrote a site to sell gourmet coffee. The team worked extremely well together. My area of focus was the database, numerous APIs, Redux thunks, and some of the front-end components.",
    technologies: ["React", "Redux", "Router", "Node", "Express", "Postgres", "Sequelize"],
    video: "https://www.youtube.com/embed/2WUD5zVybYY?&autoplay=1",
    github: "https://github.com/Team-2-Grace-Shopper/team-2-grace-shopper",
    site: "https://fsa-team2-coffee.herokuapp.com/home",
  },
  { name: "Grace Coffee",
    image: "gracecoffee1.jpg",
    description: "As part of Fullstack Academy's \"Grace Shopper\" senior phase eCommerce project, our team wrote a site to sell gourmet coffee. The team worked extremely well together. My area of focus was the database, numerous APIs, Redux thunks, and some of the front-end components.",
    technologies: ["React", "Redux", "Router", "Node", "Express", "Postgres", "Sequelize"],
    video: "https://www.youtube.com/embed/2WUD5zVybYY?&autoplay=1",
    github: "https://github.com/Team-2-Grace-Shopper/team-2-grace-shopper",
    site: "https://fsa-team2-coffee.herokuapp.com/home",
  },
];

const Projects = props => {
  return (
  <div id="projcontainer">
    { projectData.map(curr => <Project project={ curr } />)

    }
  </div>
  )
}

export default Projects;