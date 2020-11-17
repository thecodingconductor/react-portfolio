import React, { Fragment, useContext } from 'react';
import ProjectContext from '../../context/projects/projectContext';

const ConcertBuilder = () => {

    const projectContext = useContext(ProjectContext);
    const { orchesNation, marsRover, concertBuilder } = projectContext;
    return (
        <div>
            {concertBuilder ? <h1>ConcertBuilder</h1> : ''}
        </div>
    )
}

export default ConcertBuilder;