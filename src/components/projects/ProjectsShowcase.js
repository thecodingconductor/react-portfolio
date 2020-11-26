import React, { Fragment, useEffect, useContext, useState, useRef } from 'react';
import { Container } from 'react-bootstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import ProjectContext from '../../context/projects/projectContext';
import marsRoverHome from '../images/marsRoverHome.png';
import orchesNationHome from '../images/orchesNationHome.png';
import concertBuilderHome from '../images/concertbuilderhome.png';
import ConcertBuilderShowcase from './ConcertBuilderShowcase';
import OrchesNationShowcase from './OrchesNationShowcase';
import MarsRoverShowcase from './MarsRoverShowcase';

const ProjectsShowcase = () => {

    const projectContext = useContext(ProjectContext);
    const { openConcertBuilder, openOrchesNation, openMarsRover } = projectContext;

    // const [isVisible, setVisible] = useState(false);
    // const domRef = useRef();

    // useEffect(() => {
    //     const observer = new IntersectionObserver(entries => {
    //         entries.forEach(entry => {
    //             setVisible(entry.isIntersecting)
    //         });
    //     });
    //     observer.observe(domRef.current);
    //     // eslint-disable-next-line
    // }, []);


    return (
        <Fragment>

            <div>
                <ConcertBuilderShowcase />
                {/* <OrchesNationShowcase />
                <MarsRoverShowcase /> */}
            </div>

        </Fragment>
    )
}

export default ProjectsShowcase;