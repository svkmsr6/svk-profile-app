import React, { useState } from 'react';
import DescBoard from '../components/plugins/DescBoard';
import './WorkExp.css';

function WorkExp(props) {
    const workExp = [{
        org:'Tata Consultancy Services',
        img:'/tcs.png',
        desc:[
            'Systems Engineer (2013 - 2015)',
            'Worked for one of the biggest clients of the organization,Apple for their online applications (OSS, ORS) and customer grievance interface (iLog)',
            'Worked not only on UI development but have also provided L3 support to end‐users, especially during NPI',
            'Worked on Javascript ES5, HTML5, CSS3 and Bootstrap'
        ]
    },{
        org:'Dassault Systemes',
        img:'/3ds.png',
        desc:[
            'Research and Development Engineer (2015 - 2018)',
            'Worked for one of the biggest projects of the organization,Supplier Collaborative Hub (X‐Network) for logging and keeping records of the supply chain data online and also the list of relevant OEMs and Suppliers',
            'Worked particularly on the frontend part following the Agile methodology religiously',
            'Along with Javascript ES6, HTML5, CSS3 and Bootstrap, I have also explored the TDD methodology using Karma and Jasmine',
            'Did some hands‐on forReact JS and NodeJS parallelly'
        ]
    },{
        org:'Bridgei2i Analytics Solution',
        img:'/bi2i.png',
        desc:[
            'Module Lead (2018 - 2019)',
            'Worked on the Commercial investment Optimizer project for the client, ABInBev using ReactJS, Bootstrap and Material UI',
            'Worked on the Claims Tracker Application project for our client,Chubb to track fraudulent claims using D3, ES6, HTML5 and CSS3',
            'Worked on Financial Reporting Toolproject for our client,Macquarie to prepare and download financial reports using ReactJS, Proforma, AG‐Grid and MobX',
            'Used Bitbucket as the Code repository',
            'Additionally, I have also mentored and trained colleagues and juniors on UI maturity'
        ]
    },{
        org:'Maersk GSC',
        img:'/maersk.png',
        desc:[
            'Software Engineer - Senior Frontend (2019 - present)',
            'Worked on the MyFinance application to make online payments, raise disputes, view and download invoices, credits and eStatements using VueJS framework, Github, in‐house Design Systems, TDD and Agile Methodology',
            'Currently working in the Help and Chat application to raise, withdraw, reopen, view cases and optimize chat based UX using VueJS framework, Github, in‐house Design Systems, TDD and Agile Methodology'
        ]
    }];
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