import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Contact</h1>
        <div className="contact-box">
          <div className="contact-mail">
            <i className="far fa-envelope"></i>
            <p>miu.matusmoto04@gmail.com</p>
          </div>
          <p>or</p>
          <div className="contact-mail">
            <a
              href="https://twitter.com/pakerpaka"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter-square" area-hidden="true" />
            </a>
            <p>@parkerpaka</p>
          </div>
          <br />
          <p>ご連絡お待ちしております。</p>
        </div>
      </div>
    );
  }
}

export default Contact;
