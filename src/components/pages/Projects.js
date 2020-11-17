import React, { Fragment, useContext, useEffect } from 'react';
import ConcertBuilder from '../projects/ConcertBuilder';
import MarsRover from '../projects/MarsRover';
import OrchesNation from '../projects/OrchesNation';
import ProjectContext from '../../context/projects/projectContext';


const Projects = () => {

    const projectContext = useContext(ProjectContext);
    const { orchesNation, marsRover, concertBuilder } = projectContext;



    return (
        <Fragment>
            <OrchesNation />
            <MarsRover />
            <ConcertBuilder />
        </Fragment>
    )



}

export default Projects;
