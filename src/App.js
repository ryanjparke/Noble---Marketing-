import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';


// import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route component={Home} exact path='/' />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
