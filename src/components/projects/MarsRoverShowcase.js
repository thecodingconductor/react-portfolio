import React, { Fragment, useEffect, useContext, useState, useRef } from 'react';
import { Container } from 'react-bootstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import ProjectContext from '../../context/projects/projectContext';
import marsRoverHome from '../images/mars-home.png';
import orchesNationHome from '../images/orchesNationHome.png';
import concertBuilderHome from '../images/concertbuilderhome.png';

const MarsRoverShowcase = () => {

    const projectContext = useContext(ProjectContext);
    const { openMarsRover } = projectContext;

    const [isVisible, setVisible] = useState(false);
    const marsRoverRef = useRef();

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            setVisible(entry.isIntersecting)
        });
    });

    useEffect(() => {


        observer.observe(marsRoverRef.current);

        return () => observer.disconnect();
        // eslint-disable-next-line
    }, []);


    return (
        <Fragment>
            <Link to='/projects/marsrover'>
                <Container className={`project-container fade-in-section ${isVisible ? 'is-visible' : ''}`} onClick={() => openMarsRover()} ref={marsRoverRef}>
                    <h1 className="project-showcase-title">Mars Rover</h1>
                    <h1 className="project-showcase-title project-showcase-description">User can view randomly generated photos from the Mars Rovers and save favorites.</h1>
                    <img src={marsRoverHome} alt="Mars Rover Home" className="mars-rover-photo" />
                </Container>
            </Link>



        </Fragment>
    )
}

export default MarsRoverShowcase;