import React, { Fragment, useEffect, useContext, useState, useRef } from 'react';
import { Container } from 'react-bootstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import ProjectContext from '../../context/projects/projectContext';
import marsRoverHome from '../images/marsRoverHome.png';
import orchesNationHome from '../images/orchesNationHome.png';
import concertBuilderHome from '../images/concertbuilderhome.png';

const ConcertBuilderShowcase = () => {

    const projectContext = useContext(ProjectContext);
    const { openConcertBuilder } = projectContext;

    const [isVisible, setVisible] = useState(false);
    const concertBuilderRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                setVisible(entry.isIntersecting)
            });
        });
        // console.log(domRef.current);
        if (concertBuilderRef.current) {
            observer.observe(concertBuilderRef.current);
        }

        // eslint-disable-next-line
    }, []);


    return (
        <Fragment>
            <Link to="/projects">
                <Container className={`project-container fade-in-section ${isVisible ? 'is-visible' : ''}`} onClick={() => openConcertBuilder()} ref={concertBuilderRef}>
                    <h1 className="project-showcase-title">Concert Builder</h1>
                    <img src={concertBuilderHome} alt="Mars Rover Home" className="mars-rover-photo" />
                </Container>
            </Link>



        </Fragment>
    )
}

export default ConcertBuilderShowcase;