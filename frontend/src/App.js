import './App.css';
import AppRoutes from './pages/AppRoutes';
import TopNavbar from './components/topNavbar/index';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/index';
import ContentOfferingForm from './components/ContentOfferingForm';

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-content-offering" element={<ContentOfferingForm />} />
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;