import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import ProjectContext from '../../context/projects/projectContext';
import { Container, Button } from 'react-bootstrap';
import orchesNationHome from '../images/orchesNationHome.png';
import orgContacts from '../images/orgContacts.png';
import marsRoverHome from '../images/marsRoverHome.png';

const OrchesNation = () => {

    const projectContext = useContext(ProjectContext);
    const { orchesNation, marsRover, concertBuilder, openMarsRover } = projectContext;
    return (
        <Fragment>
            {orchesNation ?
                <Fragment>
                    <Container className="project-top-container" fluid>
                        <h1>OrchesNation</h1>
                        <p>Full MERN Stack Application CRM for the Orchestra Industry</p>
                        <div className="d-flex flex-column align-items-center justify-content-between button-container">

                            <a href="https://limitless-journey-04009.herokuapp.com/">
                                <Button className="visit-site-button">Visit Site</Button>
                            </a>
                            <a href="https://github.com/thecodingconductor/peopleBook">
                                <Button className="visit-code-button">Visit Code</Button>
                            </a>

                        </div>

                    </Container>
                    <Container className="project-middle-container" fluid>
                        <img src={orchesNationHome} alt="Mars Rover Home" className="project-image-main" />
                        <div className="image-spacer"></div>
                        <h2 className="Key Feature">Key Features</h2>
                        <p className="feature">React Hooks</p>
                        <p className="feature">ExpressJS, MongoDB</p>
                        <p className="feature">REST API's</p>
                        <img src={orgContacts} alt="Mars Rover Favorites" className="project-image-bottom" />

                    </Container>
                    <Container className="project-bottom-container" fluid>
                        <h2>Next Project</h2>
                        <h4>Mars Rover</h4>
                        <Link to='/projects'>
                            <Container className="project-container" onClick={() => openMarsRover()}>

                                <img src={marsRoverHome} alt="Mars Rover Home" className="mars-rover-photo" />
                            </Container>
                        </Link>

                    </Container>
                </Fragment>



                : ''}
        </Fragment>
    )
}

export default OrchesNation;