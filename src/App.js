import React from 'react';

import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home  from './pages';

import SignupPage from './pages/signup';

class App extends React.Component {
  render(){
  return (
      <Router>
        <Switch>
        <Route path='/' component={Home}  exact />
          
          <Route path='/signup' component={SignupPage} exact />
          
          </Switch>
        </Router>
    
  );
}
};

export default App;
