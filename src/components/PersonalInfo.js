import React from 'react';
import './PersonalInfo.css';

function PersonalInfo(props) {
    return (
        <div className="personal-info-container">
                <p className="name">Souvik Misra</p>
                <p className="desig">Software Engineer - Senior (Frontend)</p>
                <ul className="info-list">
                    <li className="info-list-item">
                        <span class="material-icons icon">room</span>
                        <span className="info">
                            <p className="data">Bengaluru, Karnataka, IN</p>
                        </span>
                    </li>
                    <li className="info-list-item">
                        <span class="material-icons icon">email</span>
                        <span className="info">
                            <p classname="data">svkmsr6@gmail.com</p>
                        </span>
                    </li>
                    <li className="info-list-item">
                        <span class="material-icons icon">phone</span>
                        <span className="info">
                            <p className="data">+918884677455</p>
                        </span>
                    </li>
                    <li className="info-list-item">
                        <span class="material-icons icon">travel_explore</span>
                        <span className="info">
                            <p className="data">
                                I am also on <a className="data" href="https://github.com/svkmsr6">GitHub</a> and <a className="data" href="https://www.linkedin.com/in/souvik-misra-0a281929/">LinkedIn</a>!
                            </p>
                        </span>
                    </li>
                </ul>
            </div>
    );
}

export default PersonalInfo;