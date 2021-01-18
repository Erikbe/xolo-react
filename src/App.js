import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';

function App() {
  return (
      <Router>
          <Header/>

          <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/how-it-works' component={HowItWorks} />
          </Switch>
      </Router>
  );
}

export default App;