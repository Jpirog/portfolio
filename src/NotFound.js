import React from 'react';

const NotFound = () => {
  window.setTimeout(() => {
    window.location.replace("/");
  }, 3000);

  return (
    <div className="container">
      <img id="pagenotfound" src="/404.jpeg" />
      <div id="notfoundtext">
        <p> This page does not exist, redirecting to the home page...</p>
      </div>
    </div>
  )
}

export default NotFound;
