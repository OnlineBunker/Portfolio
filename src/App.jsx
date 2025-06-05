import React from 'react';
import './app.css';

import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';
import Resume from './components/resume.jsx';
import Homepage from './components/homepage.jsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App;
