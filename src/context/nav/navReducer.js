import {
    SHOW_MODAL,
    HIDE_MODAL,
    SHOW_DROPDOWN,
    HIDE_DROPDOWN
} from '../types';


export default (state, action) => {

    switch (action.type) {

        case SHOW_DROPDOWN:
            return {
                ...state,
                showDropDown: true
            }

        case HIDE_DROPDOWN:
            return {
                ...state,
                showDropDown: false
            }

        case SHOW_MODAL:
            return {
                ...state,
                showModal: true
            }
        case HIDE_MODAL:
            return {
                ...state,
                showModal: false
            }
        default:
            return state;
    }
}