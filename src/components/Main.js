import React from 'react';
import { Switch, Route } from 'react-router-dom';
import about from './About';
import work from './Work';
import contact from './Contact';
import LandingPage from './LandingPage';

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/about" component={about} />
      <Route exact path="/work" component={work} />
      <Route exact path="/contact" component={contact} />
    </Switch>
  );
};

export default Main;
