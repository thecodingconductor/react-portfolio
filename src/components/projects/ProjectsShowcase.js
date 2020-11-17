import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import marsRoverHome from '../images/marsRoverHome.png';

const ProjectsShowcase = () => {
    return (
        <Fragment>
            <Container className="project-container">
                <h1 className="project-showcase-title">Concert Builder</h1>
                <img src={marsRoverHome} alt="Mars Rover Home" className="mars-rover-photo" />
            </Container>
            <Container className="project-container">
                <h1 className="project-showcase-title">OrchesNation</h1>
                <img src={marsRoverHome} alt="Mars Rover Home" className="mars-rover-photo" />
            </Container>
            <Container className="project-container">
                <h1 className="project-showcase-title">Mars Rover</h1>
                <img src={marsRoverHome} alt="Mars Rover Home" className="mars-rover-photo" />
            </Container>
        </Fragment>
    )
}

export default ProjectsShowcase;