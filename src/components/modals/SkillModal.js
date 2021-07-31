import React from 'react';
import './SkillModal.css';

function SkillModal(props) {
    return (
        <div className="skill-modal" style={{ display: props.show ? 'block':'none'}}>
            <div className="skill-modal-content">
                <span className="close" onClick={() => props.toggle(false)}>&times;</span>
                <p>{props.content}</p>
            </div>
        </div>
    );
}

export default SkillModal;