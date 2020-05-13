import React from 'react';
import myFace from '../img/my-smile-face.jpeg';

class LandingPage extends React.Component {
  render() {
    return (
      <div className="container">
        <img src={myFace} alt="my-face" className="my-smile-face" />
        <div className="banner-text">
          <h1>Miu Matsumoto</h1>
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
