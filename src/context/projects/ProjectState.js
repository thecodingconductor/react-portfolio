import React, { useReducer } from 'react';
import ProjectContext from './projectContext';
import projectReducer from './projectReducer';
import {
    CONCERT_BUILDER,
    ORCHES_NATION,
    MARS_ROVER
} from '../types';


const ProjectState = props => {

    const initialState = {
        concertBuilder: false,
        orchesNation: false,
        marsRover: false
    };

    const [state, dispatch] = useReducer(projectReducer, initialState);

    const openConcertBuilder = () => {
        dispatch({
            type: CONCERT_BUILDER
        })
    }

    const openOrchesNation = () => {
        dispatch({
            type: ORCHES_NATION
        })
    }

    const openMarsRover = () => {
        dispatch({
            type: MARS_ROVER
        })
    }


    return (
        <ProjectContext.Provider value={{
            concertBuilder: state.concertBuilder,
            orchesNation: state.orchesNation,
            marsRover: state.marsRover,
            openConcertBuilder,
            openOrchesNation,
            openMarsRover
        }}>
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectState;
