import React from 'react';
import about from './About';
import work from './Work';
import contact from './Contact';

const Main = () => {
  return (
    <switch>
      <Route exact path="/about" component={about} />
      <Route exact path="/work" component={work} />
      <Route exact path="/contact" component={contact} />
    </switch>
  );
};

export default Main;
