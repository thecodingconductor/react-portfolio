import React, { Fragment, useContext } from 'react';
import ProjectContext from '../../context/projects/projectContext';
import { Container, Button } from 'react-bootstrap';
import marsRoverHome from '../images/marsRoverHome.png';
import marsRoverFavorites from '../images/marsRoverFavorites.png';

const MarsRover = () => {

    const projectContext = useContext(ProjectContext);
    const { orchesNation, marsRover, concertBuilder } = projectContext;



    return (
        <Fragment>
            {marsRover ?
                <Fragment>
                    <Container className="project-top-container" fluid>
                        <h1>Mars Rover</h1>
                        <p>Front-end web application for viewing photos from the Mars Rovers</p>
                        <div className="d-flex flex-column align-items-center justify-content-between button-container">

                            <a href="http://www.marsroverphotos.com">
                                <Button className="visit-site-button">Visit Site</Button>
                            </a>
                            <a href="https://github.com/thecodingconductor/mars_rover_webpack">
                                <Button className="visit-code-button">Visit Code</Button>
                            </a>

                        </div>

                    </Container>
                    <Container className="project-middle-container" fluid>
                        <img src={marsRoverHome} alt="Mars Rover Home" className="project-image-main" />
                        <div className="image-spacer"></div>
                        <h2 className="Key Feature">Key Features</h2>
                        <p className="feature">Javascript</p>
                        <p className="feature">CSS</p>
                        <p className="feature">HTML</p>
                        <img src={marsRoverFavorites} alt="Mars Rover Favorites" className="project-image-bottom" />

                    </Container>
                    <Container className="project-bottom-container" fluid>
                        <h2>Next Project</h2>
                        <h4>Concert Builder</h4>

                    </Container>
                </Fragment>



                : ''}
        </Fragment>
    )
}

export default MarsRover;