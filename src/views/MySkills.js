import React, { useState } from 'react';
import SkillModal from '../components/modals/SkillModal';
import './MySkills.css';

function MySkills(props) {
    const skills = [
        {
            src: '/html-5.png',
            text: 'HTML5',
            desc: 'Skilled for 8+ years. Important for setting up the structure of web application.'
        },
        {
            src: '/css.png',
            text: 'CSS3',
            desc: 'Skilled for 8+ years. Important for styling the web pages with proper design standards.'
        },
        {
            src: '/javascript.png',
            text: 'JavaScript',
            desc: 'Skilled for 8+ years. Required for adding behaviour and logic to the web application.'
        },
        {
            src: '/vue-js.png',
            text: 'Vue JS',
            desc: 'Skilled for 2 years. Framework for developing logical and seamless SPAs with separation of controls.'
        },
        {
            src: '/nodejs.png',
            text: 'Node JS',
            desc: 'Skilled for 5+ years. Essential for web application development and installing dependencies.'
        },
        {
            src: '/logo192.png',
            text: 'React JS',
            desc: 'Skilled for 3+ years. Framework for easy and lucid development of SPAs with readable structure and logic. Also the most widely used UI framework.'
        },
        {
            src: '/github.png',
            text: 'Git',
            desc: 'Skilled for 6+ years. One of the most widely used open source version control management systems.'
        },
        {
            src: '/python.png',
            text: 'Python',
            desc: 'Skilled for 1+ years. Essential for back-end development and data sciences'
        }
    ];
    const [showModal, toggleModal] = useState(false);
    const [index, setIndex] = useState(0);
    function handleClickOnSkill(id){
        setIndex(id);
        toggleModal(!showModal);
    }
    return (
        <>
            <div className="my-skills-container">
                {
                    skills.map((skill, id) => (
                        <div className="skill-container" onClick={handleClickOnSkill.bind(null,id)}>
                            <img className="skill-img" src={skill.src} alt={skill.text} />
                            <p className="skill-text">{skill.text}</p>
                        </div>
                    ))
                }
            </div>
            <SkillModal show={ showModal } toggle={toggleModal} content={skills[index]} />
        </>
    );
}

export default MySkills;