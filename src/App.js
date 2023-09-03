import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BuyPage from './pages/BuyPage';
import SellPage from './pages/SellPage';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './App.css';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<BuyPage />} />
        <Route path="/sell" element={<SellPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
