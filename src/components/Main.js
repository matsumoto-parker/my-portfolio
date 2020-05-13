import React from 'react';
import { Switch, Route } from 'react-router-dom';
import about from './About';
import work from './Work';
import contact from './Contact';
import LandingPage from './LandingPage';

const Main = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/about" component={about} />
        <Route path="/work" component={work} />
        <Route path="/contact" component={contact} />
      </Switch>
    </div>
  );
};

export default Main;
