import React, { Fragment, useContext } from 'react';
import ProjectContext from '../../context/projects/projectContext';

const OrchesNation = () => {

    const projectContext = useContext(ProjectContext);
    const { orchesNation, marsRover, concertBuilder } = projectContext;
    return (
        <div>
            {orchesNation ? <h1>OrchesNation</h1> : ''}
        </div>
    )
}

export default OrchesNation;