import React, { useState, useContext } from 'react';
import { UserContext } from '../state-configs/contexts';
import SkillModal from '../components/modals/SkillModal';
import './MySkills.css';

function MySkills(_props) {
    const { skills } = useContext(UserContext);
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
                        <div key={id} className="skill-container" onClick={handleClickOnSkill.bind(null,id)}>
                            <img className="skill-img" src={skill.src} alt={skill.text} />
                            <p className="skill-text">{skill.text}</p>
                        </div>
                    ))
                }
            </div>
            {showModal ? <SkillModal toggle={toggleModal} content={skills[index]} /> : null}
        </>
    );
}

export default MySkills;