import Interests from '../views/Interests';
import Intro from '../views/Intro';
import MySkills from '../views/MySkills';
import WorkExp from '../views/WorkExp';

export const routeLinks = [{
    url:"/",
    text: "INTRO",
    comp: Intro,
    exact: true
},{
    url:"/work-ex",
    text: "WORK EXPERIENCE",
    comp: WorkExp
},{
    url:"/my-skills",
    text: "MY SKILLS",
    comp: MySkills
},{
    url:"/interests",
    text: "INTERESTS",
    comp: Interests
}]; 