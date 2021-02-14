import React from 'react';

const Alert = ({ alert, removeAlert }) => {
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