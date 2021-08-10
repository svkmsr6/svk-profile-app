import React, { useState, useContext } from 'react';
import { UserContext } from '../state-configs/contexts';
import DescBoard from '../components/plugins/DescBoard';
import './WorkExp.css';

function WorkExp(props) {
    const { workExp } = useContext(UserContext);
    const [activeIndex, setActiveIndex] = useState(-1);
    return (
        <>
            <div className="work-exp-container">{
                workExp.map((work, id) => (
                    <div 
                        key={id} 
                        className={`work-exp ${activeIndex === id ? 'active-org' : ''}`} 
                        onClick={() => setActiveIndex(id)}
                    >
                        <img className="org-img" alt={work.org} src={work.img} />
                        <p className="org-text">{work.org}</p>
                    </div>
                ))
            }</div>
            <DescBoard 
                isActive={activeIndex > -1} 
                content={activeIndex > -1 ? workExp[activeIndex] : null}
                placeholderText="Click on an organization to see the details!" 
            />
        </>
    );
}

export default WorkExp;