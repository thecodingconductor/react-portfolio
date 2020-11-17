import React, { Fragment, useContext } from 'react';
import NavContext from '../../context/nav/navContext';
import { Link } from 'react-router-dom';


const NavModal = () => {

    const navContext = useContext(NavContext);

    const links = (
        <Fragment>
            <Link to="/projects">Concert Builder</Link>
            <Link to="/projects">OrchesNation</Link>
            <Link to="/projects">Mars Rover</Link>
            <Link to="/about">About</Link>
        </Fragment>
    )


    return (
        <Fragment>
            <div className="position-absolute nav-modal-container">
                <div className="d-flex flex-column align-items-center nav-modal-links-container">
                    {links}
                </div>
            </div>
        </Fragment>
    )
}

export default NavModal;