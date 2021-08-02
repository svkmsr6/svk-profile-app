import React from 'react';
import './Ribbon.css';

function Ribbon(props) {
    return (
        <div className={`ribbon-text-container bg-${props.bgColor || 'orange'}`}>
            <p className="ribbon-text">{props.text || 'No content'}</p>
        </div>
    );
}

export default Ribbon;