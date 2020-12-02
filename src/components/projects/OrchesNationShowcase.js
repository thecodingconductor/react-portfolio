import React, { Fragment, useEffect, useContext, useState, useRef } from 'react';
import { Container } from 'react-bootstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import ProjectContext from '../../context/projects/projectContext';
import marsRoverHome from '../images/marsRoverHome.png';
import orchesNationHome from '../images/orchesNationHome.png';
import concertBuilderHome from '../images/concertbuilderhome.png';

const OrchesNationShowcase = () => {

    const projectContext = useContext(ProjectContext);
    const { openOrchesNation } = projectContext;

    const [isVisible, setVisible] = useState(false);
    const orchesNationRef = useRef();


    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            setVisible(entry.isIntersecting)
        });
    });

    useEffect(() => {





        if (orchesNationRef.current) {
            observer.observe(orchesNationRef.current);
        }

        return () => observer.disconnect();

        // eslint-disable-next-line
    }, []);


    return (
        <Fragment>
            <Link to="/projects">
                <Container className={`project-container fade-in-section ${isVisible ? 'is-visible' : ''}`} onClick={() => openOrchesNation()} ref={orchesNationRef}>
                    <h1 className="project-showcase-title">OrchesNation</h1>
                    <img src={orchesNationHome} alt="Mars Rover Home" className="mars-rover-photo" />
                </Container>
            </Link>



        </Fragment>
    )
}

export default OrchesNationShowcase;