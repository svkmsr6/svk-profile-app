import Interests from '../views/Interests';
import Intro from '../views/Intro';
import MySkills from '../views/MySkills';
import WorkExp from '../views/WorkExp';

export const routeLinks = [{
    url:"/",
    text: "INTRO",
    comp: Intro,
    exact: true,
    icon: 'home'
},{
    url:"/work-ex",
    text: "WORK EXPERIENCE",
    comp: WorkExp,
    icon: 'corporate_fare'
},{
    url:"/my-skills",
    text: "MY SKILLS",
    comp: MySkills,
    icon: 'construction'
},{
    url:"/interests",
    text: "INTERESTS",
    comp: Interests,
    icon: 'sports_esports'
}]; 