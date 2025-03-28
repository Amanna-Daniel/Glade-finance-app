// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Business from './Business.jsx';
import Entrepreneur from './Entrepreneur';

function App() {
  return (
    <> <Router>
      <Routes>
        <Route path="/" element={<Business />} />
        <Route  path="/entrepreneur" element={<Entrepreneur />}/>
      </Routes>
    </Router>
     
    </>
   
  );
}



export default App
