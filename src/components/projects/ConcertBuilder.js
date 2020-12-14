import React, { Fragment, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProjectContext from '../../context/projects/projectContext';
import { Container, Button } from 'react-bootstrap';
import concertBuilderHome from '../images/concertbuilderhome.png';
import concertBuilderPage from '../images/concert-builder-new.png';
import orchesNationHome from '../images/orchesNationHome.png';

const ConcertBuilder = () => {

    const projectContext = useContext(ProjectContext);
    const { concertBuilder, openOrchesNation } = projectContext;

    {
        useEffect(() => {

            window.scrollTo(0, 0);
            // eslint-disable-next-line
        }, []);
    }

    return (
        <Fragment>
            {concertBuilder ?
                <Fragment>
                    <Container className="project-top-container" fluid>
                        <div className="inner">
                            <div className="text-container">
                                <h1>Concert Builder</h1>
                                <p>Full-stack application designed to assist orchestra conductors to research, develop, and plan concerts.</p>
                                <p>Built with Vanilla Javascript, CSS, and HTML. Flask backend with REST API's.</p>
                            </div>

                            <div className="d-flex flex-column align-items-center justify-content-between button-container">

                                <a href="https://www.concertbuilder.com" target="_blank">
                                    <Button className="visit-site-button">Visit Site</Button>
                                </a>
                                <a href="https://github.com/thecodingconductor/concert-builder-rebuild" target="_blank">
                                    <Button className="visit-code-button">Visit Code</Button>
                                </a>

                            </div>
                        </div>


                    </Container>
                    <Container className="project-middle-container" fluid>
                        <div className="inner-middle">
                            <img src={concertBuilderHome} alt="Mars Rover Home" className="project-image-main concert-builder-image-main" />
                            <div className="image-spacer concertbuilder-image-spacer"></div>
                            <h2 className="Key Feature">Key Features</h2>
                            <p className="feature">Vanilla Javascript</p>
                            <p className="feature">CSS, HTML</p>
                            <p className="feature">Flask</p>
                            <img src={concertBuilderPage} alt="Mars Rover Favorites" className="project-image-bottom concert-builder-image-bottom" />
                        </div>


                    </Container>
                    <Container className="project-bottom-container" fluid>
                        <div className="inner-bottom">
                            <h2>Next Project</h2>
                            <h4>OrchesNation</h4>
                            <Link to="/projects">
                                <Container className="project-container" onClick={() => openOrchesNation()}>

                                    <img src={orchesNationHome} alt="Mars Rover Home" className="mars-rover-photo" />
                                </Container>
                            </Link>
                        </div>

                    </Container>
                </Fragment>



                : ''}
        </Fragment>
    )
}

export default ConcertBuilder;