import React, { Fragment, useContext } from 'react';
import ProjectContext from '../../context/projects/projectContext';

const MarsRover = () => {

    const projectContext = useContext(ProjectContext);
    const { orchesNation, marsRover, concertBuilder } = projectContext;



    return (
        <Fragment>
            {marsRover ? <h1>Mars Rover</h1> : ''}
        </Fragment>
    )
}

export default MarsRover;