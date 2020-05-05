import React from 'react';
import bird from '../img/bird.jpeg';

class LandingPage extends React.Component {
  render() {
    return (
      <div className="container">
        <img src={bird} alt="my-face" className="my-image"></img>
        <div className="banner-text">Front-end engineer</div>
      </div>
    );
  }
}

export default LandingPage;
