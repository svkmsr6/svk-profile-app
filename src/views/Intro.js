import React from 'react';
import Avatar from '../components/Avatar';
import Ribbon from '../components/Ribbon';
import PersonalInfo from '../components/PersonalInfo';
import OtherInfo from '../components/OtherInfo';
import './Intro.css';

function Intro(props) {
    const generalInfo = {
        personalInfo: {
            name: 'Souvik Misra',
            desig:'Software Engineer - Senior (Frontend)',
            location: 'Bengaluru, Karnataka, IN',
            email: 'svkmsr6@gmail.com',
            phone: '+918884677455',
            github: 'https://github.com/svkmsr6',
            linkedin: 'https://www.linkedin.com/in/souvik-misra-0a281929/'
        },
        otherInfo: {
            nationality: 'Indian',
            languages: ['Bengali','English','Hindi','Kannada','Telugu','Urdu'],
            dob: {
                day:6,
                month:12,
                year: 1990
            },
            edu: 'B.Tech (ECE) from Heritage Institute of Technology - (2009-2013)'
        },
        pic:{
            url:'/svk.jpeg',
            desc: 'My Pic'
        },
        quotes: [
            {
                text: '\'I have around 8 years of experience in the industry, starting off as a simple JavaScript ES5 developer, coupled with HTML5/CSS3 and ending up finally, as a React and VueJS engineer!\''
            },
            {
                bgColor: 'grey',
                text: '\'I like to learn, practice, code and teach Frontend development, Coding and DevOps best practices. The goal is to become a Senior Software Architect and create lucid, learnable content on the same and preach!\''
            },
            {
                bgColor: 'green',
                text: '\'I have also recently developed an interest in Time Series Analysis and Blockchain Technology. These skills and technologies have an emerging importance in the job market.\''
            }
        ]
    };
    return (
        <div className="intro-container">
            <Avatar alt={generalInfo.pic.desc} src={generalInfo.pic.url} />
            <PersonalInfo data={generalInfo.personalInfo} />
            <OtherInfo data={generalInfo.otherInfo} />
            {
                generalInfo.quotes.map((quote, idx) => <Ribbon key={idx} bgColor={quote.bgColor} text={quote.text} />)
            }
        </div>
    );
}

export default Intro;