// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home/HomePage';
import About from "./pages/container/About";
import Register from './pages/Register/Register';
import LoginPage from './pages/Login/LoginPage';



function App() {
  return (
    <div className="App font-opensans">
      <Router> {/* Wrap your entire application with Router */}
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route index path='/about' element={<About />} />
          <Route index path="/register" element={<Register />} />
          <Route index path="/login" element={<LoginPage />} />

        </Routes>
      </Router>
    </div> 
  );
}

export default App;
