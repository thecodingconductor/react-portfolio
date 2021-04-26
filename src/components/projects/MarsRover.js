import React, { Fragment, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProjectContext from '../../context/projects/projectContext';
import { Container, Button } from 'react-bootstrap';
import marsRoverHome from '../images/mars-home.png';
import marsRoverFavorites from '../images/mars-faves.png';
import concertBuilderHome from '../images/concertbuilderhome.png';
import NavContext from '../../context/nav/navContext'

const MarsRover = () => {

    const projectContext = useContext(ProjectContext);
    const { marsRover, openConcertBuilder } = projectContext;

    const navContext = useContext(NavContext);
    const {hideModalFunc} = navContext

    useEffect(() => {
        window.scrollTo(0, 0)
        hideModalFunc();
        // eslint-disable-next-line
    }, [])

    const linkHandler = () => {
        window.location.href = '/projects/concertbuilder'
    }

    return (
       
                <Fragment>
                    <Container className="project-top-container" fluid>
                        <div className="inner">
                            <div className="text-container">
                                <h1>Mars Rover</h1>
                                <p>Front-end web application built with React and interacting with 3rd party NASA API's.</p>
                                <p>User can view randomly generated photos from the Mars Rovers and save favorites.</p>
                            </div>

                            <div className="d-flex flex-column align-items-center justify-content-between button-container">

                                <a href="http://www.marsroverphotos.com" target="_blank">
                                    <Button className="visit-site-button">Visit Site</Button>
                                </a>
                                <a href="https://github.com/thecodingconductor/react-mars-rover" target="_blank">
                                    <Button className="visit-code-button">Visit Code</Button>
                                </a>

                            </div>
                        </div>


                    </Container>
                    <Container className="project-middle-container" fluid>
                        <div className="inner-middle">
                            <img src={marsRoverHome} alt="Mars Rover Home" className="project-image-main marsrover-image-main" />
                            <div className="image-spacer"></div>
                            <h2 className="Key Feature">Key Features</h2>
                            <p className="feature">React Hooks</p>
                            <p className="feature">Sass</p>
                            <p className="feature">HTML</p>
                            <img src={marsRoverFavorites} alt="Mars Rover Favorites" className="project-image-bottom marsrover-image-bottom" />
                        </div>
                    </Container>


                    <Container className="project-bottom-container" fluid>
                        <div className="inner-bottom">
                            <h2>Next Project</h2>
                            <h4>Concert Builder</h4>
                            <Link to="/projects/concertbuilder">
                                <Container className="project-container">

                                    <img src={concertBuilderHome} alt="Concert Builder" className="mars-rover-photo" />
                                </Container>
                            </Link>
                        </div>

                    </Container>
                </Fragment>



        
    )
}

export default MarsRover;