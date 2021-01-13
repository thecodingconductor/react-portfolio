import React, { Fragment, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar as ReactNavbar } from 'react-bootstrap';

import NavContext from '../../context/nav/navContext';
import NavModal from './NavModal';
import NavHover from './NavHover';
import { Container } from 'react-bootstrap';



const Navbar = ({ title, icon }) => {

    const navContext = useContext(NavContext);
    const { showModal, showModalFunc, hideModalFunc, showDropDownFunc, hideDropDownFunc } = navContext;
    // const { height, width } = useWindowDimensions();
    const { pathname } = useLocation();




    const onClick = () => {

        if (showModal === false) {
            showModalFunc();
        } else {
            hideModalFunc();
        }
    }

    const openHome = () => {
        window.location = '/';
    }

    return (
        <Fragment>
            <ReactNavbar className={`d-flex align-items-center justify-content-center navbar-main ${pathname === '/projects' && 'projects-page-nav'}`}>


                <i className="fas fa-bars fa-2x mobile-menu-icon" onClick={onClick} ></i>
                <Container className="large-nav-container">
                    <div className={`d-flex justify-content-between align-items-center nav-bar-large`}>
                        <div className="icon-left" onClick={openHome}>
                            <p>T</p>
                        </div>
                        <div className="links-right">
                            <ul className="d-flex align-items-center justify-content-between nav-link-list">
                                <li className="hover-nav-container" onMouseEnter={showDropDownFunc} onMouseLeave={hideDropDownFunc}>
                                    <NavHover />
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <a href="mailto: tristan.raissherman@gmail.com">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>



            </ReactNavbar>
            { showModal === true &&
                <NavModal />
            }

        </Fragment>

    )
}

export default Navbar;