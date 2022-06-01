import * as React from 'react';
import Layout from "../src/layout/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//components
import Contact from './pages/Contact';
import Resources from './pages/Resources';
import Gallery from './pages/Gallery';
import Music from './pages/Music';
import About from './pages/About';
import LandingPage from './pages/LandingPage';
import Greeting from './components/Greeting';


function App() {

  return ( 
    <Router>
      <Layout>
      <Switch>
        <Route exact path='/thankyou' component={Greeting} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/resources' component={Resources} />
        <Route exact path='/gallery' component={Gallery} />
        <Route exact path='/music' component={Music} />
        <Route exact path='/bio' component={About} />
        <Route exact path='/' component={LandingPage} />
      </Switch>
      </Layout>
    </Router>
    
  );
}

export default App;


// color directly from Chakra, mimicked from the original design
// const colors = {
//   brand: {
//     gray400: '#A0AEC0',
//     red400: '#F56565',
//     orange300: '#F6AD55',
//     green600: '#2F855A',
//     teal500: '#319795',
//     yellow500: '#D69E2E'
//   },
// }