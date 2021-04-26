import React, { Fragment, useContext, useEffect } from 'react';
import ConcertBuilder from '../projects/ConcertBuilder';
import MarsRover from '../projects/MarsRover';
import OrchesNation from '../projects/OrchesNation';
import ProjectContext from '../../context/projects/projectContext';
// import ProjectContainer from '../projects/ProjectContainer';


const Projects = () => {

    const projectContext = useContext(ProjectContext);
    const { orchesNation, marsRover, concertBuilder } = projectContext;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])



    return (
        <Fragment>
            <OrchesNation />
            <MarsRover />
            <ConcertBuilder />
            {/* <ProjectContainer projectName={orchesNation ? orchesNation : marsRover} /> */}
        </Fragment>
    )



}

export default Projects;
