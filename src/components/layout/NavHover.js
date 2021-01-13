import React, { useContext } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
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
                <Dropdown.Item href="/projects" onClick={openConcertBuilder}>
                    Concert Builder
                </Dropdown.Item>
                <Dropdown.Item href="/projects" onClick={openOrchesNation}>
                    OrchesNation
                </Dropdown.Item>
                <Dropdown.Item href="/projects" onClick={openMarsRover}>
                    Mars Rover 
                </Dropdown.Item>

            </Dropdown.Menu>

        </Dropdown>

    )
}

export default NavHover;
