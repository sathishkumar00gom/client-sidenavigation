import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./Component/Sidenavbar/Home/Home"


const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  </Router>
);

export default App;
