import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Provider from './context/Provider'
import PrivateRoute from './Routes/Routes'
import SignIn from './view/Login/index'
import Home from './view/Home/index'

function App() {
  return (
    <div className="App">
      <Router>
        <Provider>
          <Switch>
            <Route path="/login" component={SignIn} />
            <PrivateRoute path="/" component={Home} />
          </Switch>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
