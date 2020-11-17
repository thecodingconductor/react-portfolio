import React, { Fragment, useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProjectContext from '../../context/projects/projectContext';
import marsRoverHome from '../images/marsRoverHome.png';
import orchesNationHome from '../images/orchesNationHome.png';
import concertBuilderHome from '../images/concertbuilderhome.png';

const ProjectsShowcase = () => {

    const projectContext = useContext(ProjectContext);
    const { openConcertBuilder, openOrchesNation, openMarsRover } = projectContext;



    return (
        <Fragment>
            <Link to="/projects">
                <Container className="project-container" onClick={() => openConcertBuilder()}>
                    <h1 className="project-showcase-title">Concert Builder</h1>
                    <img src={concertBuilderHome} alt="Mars Rover Home" className="mars-rover-photo" />
                </Container>
            </Link>


            <Link to="/projects">
                <Container className="project-container" onClick={() => openOrchesNation()}>
                    <h1 className="project-showcase-title">OrchesNation</h1>
                    <img src={orchesNationHome} alt="Mars Rover Home" className="mars-rover-photo" />
                </Container>
            </Link>

            <Link to='/projects'>
                <Container className="project-container" onClick={() => openMarsRover()}>
                    <h1 className="project-showcase-title">Mars Rover</h1>
                    <img src={marsRoverHome} alt="Mars Rover Home" className="mars-rover-photo" />
                </Container>
            </Link>

        </Fragment>
    )
}

export default ProjectsShowcase;