import React, { useEffect, useReducer } from 'react';
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
  const [ state, dispatch ] = useReducer(userReducer, null);
  useEffect(() => dispatch({type:'FETCH_USER'}),[]);
  return (
    <Router>
        {
          state?
          <UserContext.Provider value={{ state }}>
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
          </UserContext.Provider>:
          <div className="App-loader">Loading....</div>
        }
    </Router>
  );
}

export default App;
