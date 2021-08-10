import React, { useEffect } from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { routeLinks } from './utils/route-config-utils';
import { UserContext } from './state-configs/contexts';
import { userReducer } from './state-configs/reducers';
import Header from './components/Header';
import './App.css';
//import Footer from './components/Footer';

function App() {
  const [ state, dispatch ] = React.useReducer(userReducer, null);
  useEffect(() => dispatch({type:'FETCH_USER'}));
  return (
    <Router>
      <UserContext.Provider value={state}>
        {
          state?
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
          </div>:
          <div className="App-loader">Loading....</div>
        }
      </UserContext.Provider>
    </Router>
  );
}

export default App;
