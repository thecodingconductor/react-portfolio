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

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                setVisible(entry.isIntersecting)
            });
        });
        // console.log(domRef.current);
        observer.observe(marsRoverRef.current);
        // eslint-disable-next-line
    }, []);


    return (
        <Fragment>
            <Link to='/projects'>
                <Container className={`project-container fade-in-section ${isVisible ? 'is-visible' : ''}`} onClick={() => openMarsRover()} ref={marsRoverRef}>
                    <h1 className="project-showcase-title">Mars Rover</h1>
                    <img src={marsRoverHome} alt="Mars Rover Home" className="mars-rover-photo" />
                </Container>
            </Link>



        </Fragment>
    )
}

export default MarsRoverShowcase;