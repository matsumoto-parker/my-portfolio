import React from 'react';
import bird from '../img/bird.jpeg';

class LandingPage extends React.Component {
  render() {
    return (
      <div className="container">
        <img src={bird} alt="my-face" className="my-image"></img>
        <div className="banner-text">
          <h1>Miu Matumoto</h1>
          <h2>Front-End Engineer</h2>
          <hr />
          <p>HTML/CSS | JavaScript | React/Redux/Hooks | Firebase | GitHub</p>

          <div className="social-links">
            <a
              href="https://twitter.com/pakerpaka"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter-square" area-hidden="true" />
            </a>
            <a
              href="https://github.com/matsumoto-parker"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github-square" area-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
