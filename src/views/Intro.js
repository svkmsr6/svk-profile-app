import React, { useContext } from 'react';
import { UserContext } from '../state-configs/contexts';
import Avatar from '../components/Avatar';
import Ribbon from '../components/Ribbon';
import PersonalInfo from '../components/PersonalInfo';
import OtherInfo from '../components/OtherInfo';
import './Intro.css';

function Intro(_props) {
    const { generalInfo } = useContext(UserContext);
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