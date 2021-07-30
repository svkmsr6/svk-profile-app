import React from 'react';
import Avatar from '../components/Avatar';
import Ribbon from '../components/Ribbon';
import './Intro.css';

function Intro(props) {
    return (
        <div className="intro-container">
            <Avatar alt="My pic" src="/svk.jpeg" />
            <div className="personal-info-container">
                <p className="name">Souvik Misra</p>
                <p className="desig">Software Engineer - Senior Frontend</p>
                <ul>
                    <li>
                        <span className="info">
                            <p className="data">Bengaluru, Karnataka, IN</p>
                        </span>
                    </li>
                    <li>
                        <span className="info">
                            <p classname="data">svkmsr6@gmail.com</p>
                        </span>
                    </li>
                    <li>
                        <span className="info">
                            <p className="data">+918884677455</p>
                        </span>
                    </li>
                    <li>
                        <span className="info">
                            <p className="data">
                                I am also on <a className="data" href="https://github.com/svkmsr6">GitHub</a> and <a className="data" href="https://www.linkedin.com/in/souvik-misra-0a281929/">LinkedIn</a>!
                            </p>
                        </span>
                    </li>
                </ul>
            </div>
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