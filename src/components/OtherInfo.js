import React from 'react';
import './OtherInfo.css';

function OtherInfo(props) {
    return (
        <div className="other-info-container">
                <ul className="info-list">
                    <li className="info-list-item">
                        <span class="material-icons icon">outlined_flag</span>
                        <span className="info">
                            <p className="data">Indian</p>
                        </span>
                    </li>
                    <li className="info-list-item">
                        <span class="material-icons icon">translate</span>
                        <span className="info">
                            <p classname="data">Bengali, English, Hindi, Kannada, Telugu, Urdu</p>
                        </span>
                    </li>
                    <li className="info-list-item">
                        <span class="material-icons icon">child_care</span>
                        <span className="info">
                            <p className="data">December 6, 1990</p>
                        </span>
                    </li>
                </ul>
            </div>
    );
}

export default OtherInfo;