import React from 'react';
import './DescBoard.css';

function DescBoard(props) {
    return (
        <div className={`desc-board ${props.isActive ? 'active' : 'inactive'}`}>
            {
                props.isActive ? 
                (<ul>
                    {
                        props.content.desc.map((text, id) => id === 0 ? <h3 key={id}>{text}</h3> : <li key={id}>{text}</li>)
                    }
                </ul>) 
                : props.placeholderText
            }
        </div>
    );
}

export default DescBoard;