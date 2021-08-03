import './App.css';
import Header from './components/Header';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { routeLinks } from './utils/route-config-utils';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          {
            routeLinks.map((link, idx) => (
              <Route key={idx} path={link.url} exact={link.exact}>
                < link.comp />
              </Route>
            ))
          }
        </Switch>
      </div>
    </Router>
  );
}

export default App;
