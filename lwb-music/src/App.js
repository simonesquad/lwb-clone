import React from 'react';
import MMenu from '../src/components/Menu';
// import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';

//components
import Contact from './pages/Contact';
import Resources from './pages/Resources';
import Gallery from './pages/Gallery';
import Music from './pages/Music';
import About from './pages/About';
import Home from './pages/Home';

// color directly from Chakra, mimicked from the original design
const colors = {
  brand: {
    gray400: '#A0AEC0',
    red400: '#F56565',
    orange300: '#F6AD55',
    green600: '#2F855A',
    teal500: '#319795',
    yellow500: '#D69E2E'
  },
}

function App() {
  return ( 
    <Router>
      <ChakraProvider>
    <div className="App">
      <MMenu />
      <Switch>
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/resources' component={Resources} />
        <Route exact path='/gallery' component={Gallery} />
        <Route exact path='/music' component={Music} />
        <Route exact path='/bio' component={About} />
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
    </ChakraProvider>
    </Router>
    
  );
}

export default App;
