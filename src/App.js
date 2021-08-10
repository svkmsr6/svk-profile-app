import React, { useEffect } from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { getUserDetails } from './utils/api-utils'
import { routeLinks } from './utils/route-config-utils';
import { UserContext } from './state-configs/contexts';
import { userReducer } from './state-configs/reducers';
import Header from './components/Header';
import './App.css';

function App() {
  const [ userState, dispatch ] = React.useReducer(userReducer, null);
  useEffect(()=>{
    (async function(){
      const payload = await getUserDetails();
      dispatch({
        payload,
        type:'SET_USER'
      });
    })()
  },[]);
  return (
      <UserContext.Provider value={userState}>
        <Router>
        {
          userState && userState.generalInfo?
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
        </Router>
      </UserContext.Provider>
  );
}

export default App;
