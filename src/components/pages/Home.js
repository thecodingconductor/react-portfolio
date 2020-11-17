import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import ProjectsShowcase from '../projects/ProjectsShowcase';
import tristan from '../images/Tristan_Rais_Sherman_0036_web_DO_NOT_PRINT.jpg'



const Home = () => {
    return (
        <Container className="website-title-container">
            <h1 className="website-title">
                Tristan is a front-end developer and musician.
            </h1>
            <img src={tristan} alt="Tristan Headshot" className="tristan-headshot" />
            <Container className="projects-showcase-container">
                <ProjectsShowcase />
            </Container>
        </Container>
    )
}

export default Home;
