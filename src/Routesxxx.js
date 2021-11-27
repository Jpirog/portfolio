import React from 'react';
import {Routes, Route } from 'react-router-dom';

import Home from './home';
import Nav from './nav';
import Contact from './contact';

const NotFound = () => {
  return (
    <h1> Page not Found!!! </h1>
  )
}

function MyRoutes() {
    return (
      <Routes>
        <Route path="contact" element={<Contact /> } />
        <Route path="/" element={<Home /> } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    )
}

export default MyRoutes;