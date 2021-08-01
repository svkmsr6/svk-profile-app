import React from 'react';
import { getFormattedDate } from '../utils/helper-utils';
import './OtherInfo.css';

function OtherInfo(props) {
    const { data } = props;
    const { dob: {
        day,
        month,
        year
    } } = data;
    return (
        <div className="other-info-container">
                <ul className="info-list">
                    <li className="info-list-item">
                        <span className="material-icons icon">outlined_flag</span>
                        <span className="info">
                            <p className="data">{data.nationality}</p>
                        </span>
                    </li>
                    <li className="info-list-item">
                        <span className="material-icons icon">translate</span>
                        <span className="info">
                            <p className="data">{data.languages.join(',')}</p>
                        </span>
                    </li>
                    <li className="info-list-item">
                        <span className="material-icons icon">child_care</span>
                        <span className="info">
                            <p className="data">{getFormattedDate(day, month, year)}</p>
                        </span>
                    </li>
                </ul>
            </div>
    );
}

export default OtherInfo;