import React, { Fragment, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProjectContext from '../../context/projects/projectContext';
import { Container, Button } from 'react-bootstrap';
import orchesNationHome from '../images/orchesNationHome.png';
import orgContacts from '../images/orgContacts.png';
import marsRoverHome from '../images/mars-home.png';
import NavContext from '../../context/nav/navContext'

const OrchesNation = () => {

    const projectContext = useContext(ProjectContext);
    const { orchesNation, openMarsRover } = projectContext;

    const navContext = useContext(NavContext);
    const {hideModalFunc} = navContext


    useEffect(() => {
        window.scrollTo(0, 0)
        hideModalFunc();
        // eslint-disable-next-line
    }, [])

    return (
       
                <Fragment>
                    <Container className="project-top-container" fluid>
                        <div className="inner">
                            <div className="text-container">
                                <h1>OrchesNation</h1>
                                <p className="orchesnation-subtitle-small">Web application to assist orchestral professionals organize their contact lists, and view organizations' personnel.</p>
                                <p>Full Stack Application built with React, Node.js, Express, MongoDB, and REST API's.</p>
                            </div>
                            <div className="d-flex flex-column align-items-center justify-content-between button-container">

                                <a href="https://www.orchesnation.com/login" target="_blank" rel="noreferrer">
                                    <Button className="visit-site-button">Visit Site</Button>
                                </a>
                                <a href="https://github.com/thecodingconductor/peopleBook" target="_blank" rel="noreferrer">
                                    <Button className="visit-code-button">Visit Code</Button>
                                </a>

                            </div>
                        </div>


                    </Container>
                    <Container className="project-middle-container" fluid>
                        <div className="inner-middle">
                            <img src={orchesNationHome} alt="Mars Rover Home" className="project-image-main orchesnation-image-main" />
                            <div className="image-spacer orchesnation-spacer"></div>
                            <h2 className="Key Feature">Key Features</h2>
                            <p className="feature">React Hooks</p>
                            <p className="feature">ExpressJS, MongoDB</p>
                            <p className="feature">REST API's</p>
                            <img src={orgContacts} alt="Mars Rover Favorites" className="project-image-bottom orchesnation-image-bottom" />
                        </div>



                    </Container>
                    <Container className="project-bottom-container" fluid>
                        <div className="inner-bottom">
                            <h2>Next Project</h2>
                            <h4>Mars Rover</h4>
                            <Link to='/projects/marsrover'>
                                <Container className="project-container">

                                    <img src={marsRoverHome} alt="Mars Rover Home" className="mars-rover-photo" />
                                </Container>
                            </Link>
                        </div>



                    </Container>
                </Fragment>



    )
}

export default OrchesNation;