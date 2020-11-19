import React, { Fragment, useContext } from 'react';
import { Container, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavContext from '../../context/nav/navContext';
import ProjectContext from '../../context/projects/projectContext';

const NavHover = () => {

    const navContext = useContext(NavContext);
    const projectContext = useContext(ProjectContext);
    const { showDropDownFunc, hideDropDownFunc, showDropDown } = navContext;
    const { openConcertBuilder, openOrchesNation, openMarsRover } = projectContext;

    return (

        <Dropdown className="d-inline-block bootstrap-nav-drop-container"
            onMouseOver={showDropDownFunc}
            onMouseLeave={hideDropDownFunc}
            show={showDropDown}

        >
            <Dropdown.Toggle className="projects-drop-down-button">
                Projects
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item>
                    <Link to="/projects" onClick={openConcertBuilder}>Concert Builder</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                    <Link to="/projects" onClick={openOrchesNation}>OrchesNation</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                    <Link to="/projects" onClick={openMarsRover}>Mars Rover</Link>
                </Dropdown.Item>

            </Dropdown.Menu>

        </Dropdown>

    )
}

export default NavHover;
