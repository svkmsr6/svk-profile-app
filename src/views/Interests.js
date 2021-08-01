import React from 'react';
import './Interests.css';

function Interests(props) {
    const interests = [
        {
            src:'/bilingual.png',
            text: 'Linguistics and Grammatology'
        },
        {
            src:'/traveler.png',
            text: 'Travelling'
        },
        {
            src:'/documentary.png',
            text: 'Documentaries'
        },
        {
            src:'/cooking.png',
            text: 'Cooking'
        }
    ];
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