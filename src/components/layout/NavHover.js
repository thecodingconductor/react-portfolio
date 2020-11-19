import React, { Fragment, useContext } from 'react';
import { Container, Dropdown, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavContext from '../../context/nav/navContext';

const NavHover = ({ active, show }) => {

    const navContext = useContext(NavContext);
    const { showDropDownFunc, hideDropDownFunc, showDropDown } = navContext;


    return (
        <Fragment>
            <NavDropdown className="bootstrap-nav-drop-container">
                <NavDropdown.Item>Test1</NavDropdown.Item>
                <NavDropdown.Item>Test1</NavDropdown.Item>
                <NavDropdown.Item>Test1</NavDropdown.Item>
                <NavDropdown.Item>Test1</NavDropdown.Item>
            </NavDropdown>
        </Fragment>
    )
}

export default NavHover;
