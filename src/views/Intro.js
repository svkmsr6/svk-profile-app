import React from 'react';
import Avatar from '../components/Avatar';
import Ribbon from '../components/Ribbon';
import PersonalInfo from '../components/PersonalInfo';
import OtherInfo from '../components/OtherInfo';
import './Intro.css';

function Intro(props) {
    return (
        <div className="intro-container">
            <Avatar alt="My pic" src="/svk.jpeg" />
            <PersonalInfo />
            <OtherInfo />
            <Ribbon text="'I have around 8 years of experience in the industry, starting off as a simple JavaScript ES5 developer, coupled with HTML5/CSS3 and 
                ending up finally, as a React and VueJS engineer!'" />
            <Ribbon bgColor="grey" text="'I like to learn, practice, code and teach Frontend development, Coding and DevOps best practices. 
                The goal is to become a Senior Software Architect and create lucid, learnable content on the same and preach!'" />
            <Ribbon bgColor="green" text="'I have also recently developed an interest in Time Series Analysis and Blockchain Technology. 
                These skills and technologies have an emerging importance in the job market.'" />
        </div>
    );
}

export default Intro;