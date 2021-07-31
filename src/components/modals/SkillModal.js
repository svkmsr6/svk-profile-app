import React from 'react';
import Avatar from '../Avatar';
import './SkillModal.css';

function SkillModal(props) {
    return (
        <div className="skill-modal" style={{ display: props.show ? 'block':'none'}}>
            <div className="skill-modal-content">
                <span className="close" onClick={() => props.toggle(false)}>&times;</span>
                <h2>{props.content.text}</h2>
                <div className="skill-modal-info">
                    <Avatar alt={props.content.text} src={props.content.src} />
                    <p>{props.content.desc}</p>
                </div>
            </div>
        </div>
    );
}

export default SkillModal;