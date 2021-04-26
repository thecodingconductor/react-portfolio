import React, { Fragment, useContext } from 'react';
import NavContext from '../../context/nav/navContext';
import ProjectContext from '../../context/projects/projectContext';
import { Link } from 'react-router-dom';


const NavModal = ({ open }) => {

    const navContext = useContext(NavContext);
    const projectContext = useContext(ProjectContext);
    const { openConcertBuilder, openOrchesNation, openMarsRover } = projectContext;
    const { showModalFunc, hideModalFunc, showModal } = navContext;



    // const onClick = e => {
    //     hideModalFunc();
    //     if (e.target.textContent === 'Concert Builder') {
    //         openConcertBuilder();
    //     } else if (e.target.textContent === 'OrchesNation') {
    //         openOrchesNation();
    //     } else if (e.target.textContent === 'Mars Rover') {
    //         openMarsRover();
    //     }

    // }


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
        <Fragment>

            <div className="position-absolute nav-modal-container" >
                <div className="d-flex flex-column align-items-center nav-modal-links-container">
                    {links}
                </div>
            </div>

        </Fragment>
    )
}

export default NavModal;