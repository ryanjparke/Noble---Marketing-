import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';


// import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Demo from './Components/Demo Request/Demo';
import Assessments from './Components/Assessments/Assessments';
import Login from './Components/Login/Login.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route component={Login} path='/login'/>
            <Route component={Home} exact path='/' />
            <Route component={Products} path='/products' />
            <Route component={About} path='/about' />
            <Route component={Contact} path='/contact' />
            <Route component={Demo} path='/demo' />
            <Route component={Assessments} path='/assessments' />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
