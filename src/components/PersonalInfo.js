import React from 'react';
import './PersonalInfo.css';

function PersonalInfo(props) {
    const { data } = props;
    return (
        <div className="personal-info-container">
                <p className="name">{data.name}</p>
                <p className="desig">{data.desig}</p>
                <ul className="info-list">
                    <li className="info-list-item">
                        <span class="material-icons icon">room</span>
                        <span className="info">
                            <p className="data">{data.location}</p>
                        </span>
                    </li>
                    <li className="info-list-item">
                        <span class="material-icons icon">email</span>
                        <span className="info">
                            <p classname="data">{data.email}</p>
                        </span>
                    </li>
                    <li className="info-list-item">
                        <span class="material-icons icon">phone</span>
                        <span className="info">
                            <p className="data">{data.phone}</p>
                        </span>
                    </li>
                    <li className="info-list-item">
                        <span class="material-icons icon">travel_explore</span>
                        <span className="info">
                            <p className="data">
                                I am also on <a className="data" href={data.github}>GitHub</a> and <a className="data" href={data.linkedin}>LinkedIn</a>!
                            </p>
                        </span>
                    </li>
                </ul>
            </div>
    );
}

export default PersonalInfo;