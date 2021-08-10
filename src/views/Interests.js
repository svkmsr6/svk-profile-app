import React, {useContext} from 'react';
import { UserContext } from '../state-configs/contexts';
import './Interests.css';

function Interests(props) {
    const { interests } = useContext(UserContext);
    return (
        <div className="interest-container">
            {
                interests.map((interest, idx) => (
                    <div key={idx} className="interest">
                        <img className="interest-img" src={interest.src} alt={interest.text} />
                        <p className="interest-text">{interest.text}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default Interests;