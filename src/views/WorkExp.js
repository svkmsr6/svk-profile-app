import React from 'react';
import './WorkExp.css';

function WorkExp(props) {
    const workExp = [{
        org:'Tata Consultancy Services',
        img:'/tcs.png'
    },{
        org:'Dassault Systemes',
        img:'/3ds.png'
    },{
        org:'Bridgei2i Analytics Solution',
        img:'/bi2i.png'
    },{
        org:'Maersk GSC',
        img:'/maersk.png'
    }];
    return (
        <div className="work-exp-container">{
            workExp.map((work, id) => (
                <div key={id} className="work-exp">
                    <img className="org-img" alt={work.org} src={work.img} />
                    <p className="org-text">{work.org}</p>
                </div>
            ))
        }</div>
    );
}

export default WorkExp;