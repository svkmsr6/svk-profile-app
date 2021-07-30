import React from 'react';
import './Avatar.css';

function Avatar(props) {
    return (
        <div className="avatar-container">
            <img alt={props.alt} src={props.src} />
        </div>
    );
}

export default Avatar;