import React, { Fragment, useContext } from 'react';
import NavContext from '../../context/nav/navContext';
import ProjectContext from '../../context/projects/projectContext';
import {CSSTransition, Transition} from 'react-transition-group'
import { Link } from 'react-router-dom';


const NavModal = ({ transitionState }) => {

    const navContext = useContext(NavContext);
    const projectContext = useContext(ProjectContext);
    const { openConcertBuilder, openOrchesNation, openMarsRover } = projectContext;
    const { showModalFunc, hideModalFunc, showModal } = navContext;



    const links = (
        <Fragment>
            <Link to='/' > Home</Link>
            <Link to="/projects/concertbuilder" >Concert Builder</Link>
            <Link to="/projects/orchesnation" >OrchesNation</Link>
            <Link to="/projects/marsrover" >Mars Rover</Link>
            <Link to="/about">About</Link>
        </Fragment>
    )


    return (
        
            // <CSSTransition in={showModal} timeout={300} classNames="sample">
                <div className={`position-absolute nav-modal-container sample-${transitionState}`} >
                    <div className="d-flex flex-column align-items-center nav-modal-links-container">
                        {links}
                    </div>
                </div>
            // </CSSTransition>
        
    )
}

export default NavModal;