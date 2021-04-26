import NavState from "../nav/NavState";
import {
    MARS_ROVER,
    CONCERT_BUILDER,
    ORCHES_NATION
} from '../types';

// eslint-disable-next-line
export default (state, action) => {

    switch (action.type) {

        case CONCERT_BUILDER:
            return {
                ...state,
                orchesNation: false,
                marsRover: false,
                concertBuilder: true

            }
        case MARS_ROVER:
            return {
                ...state,
                orchesNation: false,
                marsRover: true,
                concertBuilder: false

            }
        case ORCHES_NATION:
            return {
                ...state,
                orchesNation: true,
                marsRover: false,
                concertBuilder: false

            }

        default:
            return {
                ...state,
                concertBuilder: true
            };
    }


}