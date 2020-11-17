import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import marsRoverHome from '../images/marsRoverHome.png';
import orchesNationHome from '../images/orchesNationHome.png';
import concertBuilderHome from '../images/concertbuilderhome.png';

const ProjectsShowcase = () => {
    return (
        <Fragment>
            <Container className="project-container">
                <h1 className="project-showcase-title">Concert Builder</h1>
                <img src={concertBuilderHome} alt="Mars Rover Home" className="mars-rover-photo" />
            </Container>
            <Container className="project-container">
                <h1 className="project-showcase-title">OrchesNation</h1>
                <img src={orchesNationHome} alt="Mars Rover Home" className="mars-rover-photo" />
            </Container>
            <Container className="project-container">
                <h1 className="project-showcase-title">Mars Rover</h1>
                <img src={marsRoverHome} alt="Mars Rover Home" className="mars-rover-photo" />
            </Container>
        </Fragment>
    )
}

export default ProjectsShowcase;