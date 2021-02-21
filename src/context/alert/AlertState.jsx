import React, { useReducer } from 'react';
import AlertContext from './aLertContext';
import AlertReducer from './alertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = (props) => {
    const initailState = null;

    const [state, dispatch] = useReducer(AlertReducer, initailState);

    // Set Alert
    const setAlert = (msg, type) => {
        dispatch({
            type: SET_ALERT,
            payload: { msg, type }
        });
        setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
    };

    // Remove Alert
    // const removeAlert = () => {
    //     setAlert(null);
    // };

    return (
        <AlertContext.Provider
            value={{
                alert: state,
                setAlert
            }}
        >
            {props.children}
        </AlertContext.Provider>
    );
};

export default AlertState;