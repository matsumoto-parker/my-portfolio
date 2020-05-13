import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import about from './components/About';
import work from './components/Work';
import contact from './components/Contact';
import LandingPage from './components/LandingPage';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/my-portfolio" component={LandingPage} />
          <Route path="/about" component={about} />
          <Route path="/work" component={work} />
          <Route path="/contact" component={contact} />
        </Switch>
      </div>
    );
  }
}

export default App;
