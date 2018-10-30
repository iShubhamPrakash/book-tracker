import React from 'react';

class Footer extends React.Component {
    render() {
        return (
    <footer className="footer">
      <p><strong>Made with React by Shubham Prakash</strong></p>

      <div className="contact-logo-holder">

          <a href="https://github.com/i-shubhamprakash" className="contact-link" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-github fa-2x contact-logo github"></i>
          </a>

          <a href="https://www.linkedin.com/in/ishubhamprakash" className="contact-link" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin fa-2x contact-logo linkedin"></i>
          </a>

          <a href="https://twitter.com/iSuvm" className="contact-link" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-twitter fa-2x contact-logo twitter"></i>
          </a>

          <a href="https://plus.google.com/u/0/110923160423915980174" className="contact-link" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-google-plus fa-2x contact-logo google"></i>
          </a>

          <a href="https://www.facebook.com/i.suvm" className="contact-link" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-facebook fa-2x contact-logo facebook"></i>
          </a>
      </div>
      <p>(shubham.prakash2308@gmail.com)</p>
  </footer>
        );
    }
}

export default Footer