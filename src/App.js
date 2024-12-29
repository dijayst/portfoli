
import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import LandingPage from "./Landingpage";

function App() {

  return (
   

   
    <Router>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/landing" element={<LandingPage />} />
    </Routes>
  </Router>
  
 
  );
}

export default App;
