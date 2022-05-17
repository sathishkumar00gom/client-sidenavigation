import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Component/Sidenavbar/Home/Home"
import Sidebar from './Component/Sidenavbar/Sidebar';
import Explore from './Component/Sidenavbar/Explore/Explore';


const App = () => (
  <Router>
    <div>
      <Sidebar />
    </div>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/Explore" element={<Explore />} />

    </Routes>
  </Router>
);

export default App;
