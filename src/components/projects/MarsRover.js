import React, { Fragment, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProjectContext from '../../context/projects/projectContext';
import { Container, Button } from 'react-bootstrap';
import marsRoverHome from '../images/mars-home.png';
import marsRoverFavorites from '../images/mars-faves.png';
import concertBuilderHome from '../images/concertbuilderhome.png';

const MarsRover = () => {

    const projectContext = useContext(ProjectContext);
    const { orchesNation, marsRover, concertBuilder, openConcertBuilder } = projectContext;

    useEffect(() => {
        window.scrollTo(0, 0)
        // eslint-disable-next-line
    }, [])

    return (
        <Fragment>
            {marsRover ?
                <Fragment>
                    <Container className="project-top-container" fluid>
                        <div className="inner">
                            <div className="text-container">
                                <h1>Mars Rover</h1>
                                <p>Front-end web application for viewing photos from the Mars Rovers</p>
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
                            <img src={marsRoverHome} alt="Mars Rover Home" className="project-image-main" />
                            <div className="image-spacer"></div>
                            <h2 className="Key Feature">Key Features</h2>
                            <p className="feature">React Hooks</p>
                            <p className="feature">CSS</p>
                            <p className="feature">HTML</p>
                            <img src={marsRoverFavorites} alt="Mars Rover Favorites" className="project-image-bottom" />
                        </div>
                    </Container>


                    <Container className="project-bottom-container" fluid>
                        <div className="inner-bottom">
                            <h2>Next Project</h2>
                            <h4>Concert Builder</h4>
                            <Link to="/projects">
                                <Container className="project-container" onClick={() => openConcertBuilder()}>

                                    <img src={concertBuilderHome} alt="Mars Rover Home" className="mars-rover-photo" />
                                </Container>
                            </Link>
                        </div>

                    </Container>
                </Fragment>



                : ''}
        </Fragment>
    )
}

export default MarsRover;