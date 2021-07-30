import './App.css';
import Header from './components/Header';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const routeLinks = [{
      url:"/",
      text: "INTRO",
      name: "Intro",
      exact: true
  },{
      url:"/work-ex",
      text: "WORK EXPERIENCE",
      name: "WorkExp"
  },{
      url:"/my-skills",
      text: "MY SKILLS",
      name: "MySkills"
  },{
      url:"/interests",
      text: "INTERESTS",
      name: "Interests"
  }];
  return (
    <Router>
      <div className="App">
        <Header routeLinks={routeLinks} />
        <Switch>
          {
            routeLinks.map(link => (
              <Route path={link.url}>
                <link.name />
              </Route>
            ))
          }
        </Switch>
      </div>
    </Router>
  );
}

export default App;
