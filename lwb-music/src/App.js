import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//components
import Contact from './pages/Contact';
import Resources from './pages/Resources';
import Gallery from './pages/Gallery';
import Music from './pages/Music';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/resources' component={Resources} />
        <Route exact path='/gallery' component={Gallery} />
        <Route exact path='/music' component={Music} />
        <Route exact path='/about' component={About} />
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
