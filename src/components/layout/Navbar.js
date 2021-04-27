import React, { Fragment, useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar as ReactNavbar } from 'react-bootstrap';
import { CSSTransition, TransitionGroup, Transition } from 'react-transition-group';
import NavContext from '../../context/nav/navContext';
import NavModal from './NavModal';
import NavHover from './NavHover';
import { Container } from 'react-bootstrap';




const Navbar = ({ title, icon }) => {

    const navContext = useContext(NavContext);
    const { showModal, showModalFunc, hideModalFunc, showDropDownFunc, hideDropDownFunc } = navContext;
    // const { height, width } = useWindowDimensions();
    const { pathname } = useLocation();

    // const [modalShow, setModalShow] = useState(false)


    const newPath = pathname.split('/')[1];

    const onClick = () => {

        // if(modalShow === false ) {
        //     setModalShow(true)
        //     console.log(modalShow)
        // } else {
        //     setModalShow(false)
        //     console.log(modalShow)
        // }

        if (showModal === false) {
            showModalFunc();
        } else {
            hideModalFunc();
        }
    }

    const openHome = () => {
        window.location = '/';
    }

    const defaultStyle = {
        transition: `opacity 300ms ease-in-out`,
        opacity: 0
    }

    const transitionStyles = {
        entering: {opacity: 1},
        entered: {opacity: 1},
        exiting: {opacity: 0},
        exited: {opacity: 0}
    };

    
    const links = (
        <Fragment>
            {window.location.pathname === '/' ? '' : <Link to='/' > Home</Link>}
            <Link to="/projects/concertbuilder" >Concert Builder</Link>
            <Link to="/projects/orchesnation" >OrchesNation</Link>
            <Link to="/projects/marsrover" >Mars Rover</Link>
            <Link to="/about">About</Link>
        </Fragment>
    )



    return (
        <Fragment>
            <ReactNavbar className={`d-flex align-items-center justify-content-center navbar-main ${newPath === 'projects' && 'projects-page-nav'}`}>


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
            {/* { showModal === true &&

            <CSSTransition in={modalShow} timeout={300} classNames="sample">
                <NavModal />
            </CSSTransition>
                
            } */}

            
            {/* <TransitionGroup>
                <CSSTransition in={modalShow}
                timeout={300}
                classNames="sample"
                > */}
                {/* <NavModal /> */}
                {/* <div>
                    Test
                </div>
                </CSSTransition>
                </TransitionGroup> */}
            {/* { showModal === true && (
                <Transition in={showModal} timeout={300}>
                    {state => (
                    <div style={{
                        ...defaultStyle,
                        ...transitionStyles[state]
                    }}>
                        I'm a fade transition.
                    </div>
                        <div className={`position-absolute nav-modal-container ${showModal ? 'show' : ''}`} style={{
                            ...defaultStyle,
                            ...transitionStyles[state]
                        }}>
                        <div className="d-flex flex-column align-items-center nav-modal-links-container">
                            {links}

                        </div>
                        
                </div>
                )}
            </Transition>
            )} */}



              <div className={`position-absolute nav-modal-container ${showModal ? 'show' : 'hide'}`} >
                    <div className="d-flex flex-column align-items-center nav-modal-links-container">
                            {links}

                    </div>
            </div>

            
           
                
            
            


        </Fragment>

    )
}

export default Navbar;