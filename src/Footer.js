import React from 'react';

const Footer = () => {

  return (
    <footer>
      <div id="linkstome">
          <a href="https://www.linkedin.com/in/johnpirog" target="_blank" >
            <img className="logo" src="/images/linkedin-logo.png" />
          </a>
          <a href="https://github.com/jpirog/" target="_blank" >
            <img className="logo" src="/images/github-logo.png" />
          </a>
          <a href="https://www.instagram.com/johnpirog262/" target="_blank" >
            <img className="logo" src="/images/instagram-logo.svg" />
          </a>
          <a href="mailto:john.pirog@gmail.com?subject=Saw your website..." target="_blank" >
            <img className="logo" src="/images/email-logo.svg" />
          </a>
      </div>
\     <div id="copyr">
        <span className="highlight">&copy;2021</span> - John Pirog - all rights reserved
      </div>
    </footer>
  )
}

export default Footer;
