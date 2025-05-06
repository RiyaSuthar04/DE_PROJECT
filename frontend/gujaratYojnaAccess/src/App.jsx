import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import SchemeListPage from './pages/SchemeListPage';
import SchemeInfo from './pages/SchemeInfo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/schemes/:category" element={<SchemeListPage />} />
        <Route path="/scheme/:id" element={<SchemeInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
