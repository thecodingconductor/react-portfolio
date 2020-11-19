import React, { useReducer } from 'react';
import NavContext from './navContext';
import navReducer from './navReducer';
import {
    SHOW_MODAL,
    HIDE_MODAL,
    SHOW_DROPDOWN,
    HIDE_DROPDOWN
} from '../types'

const NavState = props => {


    const initialState = {
        showModal: false,
        showDropDown: false
    }

    const [state, dispatch] = useReducer(navReducer, initialState);

    const showModalFunc = () => {
        dispatch({ type: SHOW_MODAL });
    }

    const hideModalFunc = () => {
        dispatch({ type: HIDE_MODAL });
    }


    const showDropDownFunc = () => {
        console.log('show')
        dispatch({ type: SHOW_DROPDOWN });
    }

    const hideDropDownFunc = () => {
        console.log("hide");
        dispatch({ type: HIDE_DROPDOWN });
    }

    return (
        <NavContext.Provider value={{
            showModal: state.showModal,
            showDropDown: state.showDropDown,
            showModalFunc,
            hideModalFunc,
            showDropDownFunc,
            hideDropDownFunc
        }}>
            {props.children}
        </NavContext.Provider>
    )
}

export default NavState;