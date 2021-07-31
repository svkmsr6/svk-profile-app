import React, { useState } from 'react';
import SkillModal from '../components/modals/SkillModal';
import './MySkills.css';

function MySkills(props) {
    const skills = [
        {
            src: '/html-5.png',
            text: 'HTML5'
        },
        {
            src: '/css.png',
            text: 'CSS3'
        },
        {
            src: '/javascript.png',
            text: 'JavaScript'
        },
        {
            src: '/vue-js.png',
            text: 'Vue JS'
        },
        {
            src: '/nodejs.png',
            text: 'Node JS'
        },
        {
            src: '/logo192.png',
            text: 'React JS'
        },
        {
            src: '/github.png',
            text: 'Git'
        },
        {
            src: '/python.png',
            text: 'Python'
        }
    ];
    const [showModal, toggleModal] = useState(false);
    return (
        <>
            <div className="my-skills-container">
                {
                    skills.map(skill => (
                        <div className="skill-container" onClick={() => toggleModal(!showModal)}>
                            <img className="skill-img" src={skill.src} alt={skill.text} />
                            <p className="skill-text">{skill.text}</p>
                        </div>
                    ))
                }
            </div>
            <SkillModal show={ showModal } toggle={toggleModal} />
        </>
    );
}

export default MySkills;