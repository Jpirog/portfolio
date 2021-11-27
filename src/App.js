import React from 'react';
import Home from "./home";
import Contact from "./contact";
import NotFound from "./notfound";
import {Routes, Route } from 'react-router-dom';

const App = () => {
        return (
          <Routes>
            <Route path="contact" element={<Contact /> } />
            <Route path="/" element={<Home /> } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        )
}

export default App
