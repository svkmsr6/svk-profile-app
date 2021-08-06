import React, { useEffect } from 'react';
import Avatar from '../Avatar';
import './SkillModal.css';

function SkillModal(props) {
    useEffect(() => {
        document.querySelector('body').style.overflow = 'hidden';
        return () => {
            document.querySelector('body').style.overflow = 'auto';
        }
    },[]);
    return (
        <div className="skill-modal">
            <div className="skill-modal-content">
                <span className="close" onClick={() => props.toggle(false)}>&times;</span>
                <h2>{props.content.text}</h2>
                <div className="skill-modal-info">
                    <Avatar alt={props.content.text} src={props.content.src} frameShape="rect" />
                    <p>{props.content.desc}</p>
                </div>
            </div>
        </div>
    );
}

export default SkillModal;