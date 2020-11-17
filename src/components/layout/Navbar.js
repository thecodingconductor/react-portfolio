import React, { Fragment, useContext, useState } from 'react';
import { Navbar as ReactNavbar } from 'react-bootstrap';
import PropTypes from 'prop-types';
import NavContext from '../../context/nav/navContext';
import NavModal from './NavModal';


const Navbar = ({ title, icon }) => {

    const navContext = useContext(NavContext);
    const { showModal, showModalFunc, hideModalFunc } = navContext;

    const onClick = () => {
        if (showModal === false) {
            showModalFunc();
        } else {
            hideModalFunc();
        }
    }

    return (
        <Fragment>
            <ReactNavbar className="d-flex align-items-center justify-content-center navbar-main">
                <i className="fas fa-bars fa-2x mobile-menu-icon" onClick={onClick}></i>
            </ReactNavbar>
            { showModal === true && <NavModal />}
        </Fragment>

    )
}

export default Navbar;