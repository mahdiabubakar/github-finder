import React, { useContext } from 'react';
import AlertContext from '../../context/alert/aLertContext';

const Alert = () => {


    const alertContext = useContext(AlertContext);

    const { alert, removeAlert } = alertContext;

    return (
        alert !== null && (
            <div className={`alert alear-${alert.type}`}>
                <i className="fas fa-info-circle" /> {alert.msg}
                <i
                    className={`fas fa-times btn-danger`}
                    style={crossAlert}
                    onClick={removeAlert}
                />
            </div>
        )
    );
};

const crossAlert = {
    padding: '5px',
    borderRadius: '5px',
    cursor: 'pointer',
    float: 'right'
};


export default Alert;