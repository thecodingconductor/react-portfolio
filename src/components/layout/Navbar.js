import React, { Fragment, useContext, useState } from 'react';
import { useParams } from 'react-router';
import { Link, useLocation } from 'react-router-dom';
import { Navbar as ReactNavbar } from 'react-bootstrap';
import PropTypes from 'prop-types';
import NavContext from '../../context/nav/navContext';
import NavModal from './NavModal';
import NavHover from './NavHover';
import { Container } from 'react-bootstrap';
import useWindowDimensions from '../../hooks/useWindowDimensions';


const Navbar = ({ title, icon }) => {

    const navContext = useContext(NavContext);
    const { showModal, showModalFunc, hideModalFunc, showDropDownFunc, hideDropDownFunc, showDropDown } = navContext;
    const { height, width } = useWindowDimensions();
    const { pathname } = useLocation();


    console.log(`height - ${height}, width - ${width}`);

    const onClick = () => {
        if (showModal === false) {
            showModalFunc();
        } else {
            hideModalFunc();
        }
    }

    return (
        <Fragment>
            <ReactNavbar className={`d-flex align-items-center justify-content-center navbar-main ${pathname === '/projects' && 'projects-page-nav'}`}>
                <i className="fas fa-bars fa-2x mobile-menu-icon" onClick={onClick}></i>
                <Container>
                    <div className={`d-flex justify-content-between align-items-center nav-bar-large `}>
                        <div className="icon-left">
                            <Link to="/"></Link>
                        </div>
                        <div className="links-right">
                            <ul className="d-flex align-items-center justify-content-between nav-link-list">
                                <li className="hover-nav-container" onMouseEnter={showDropDownFunc} onMouseLeave={hideDropDownFunc}>
                                    <a href="">Projects</a>
                                    <NavHover active={showDropDown} />
                                </li>
                                <li>

                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>

            </ReactNavbar>
            { showModal === true && <NavModal />}
        </Fragment>

    )
}

export default Navbar;