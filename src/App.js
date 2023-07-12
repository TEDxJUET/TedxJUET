import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Speakers from "./Components/Speakers/Speakers";
import Team from "./Components/Team/Team";

import "./App.css";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </Router>  
    </div>
  );
}

export default App;
