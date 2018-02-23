import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';


// import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route component={Home} exact path='/' />
            <Route component={Products} path='/products' />
            <Route component={About} path='/about' />
            <Route component={Contact} path='/contact' />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
