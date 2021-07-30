import React from 'react';
import './Ribbon.css';

function Ribbon(props) {
    return (
        <div className="ribbon-text-container">
            <p className={`ribbon-text bg-${props.bgColor || 'orange'}`}>{props.text || 'No content'}</p>
        </div>
    );
}

export default Ribbon;