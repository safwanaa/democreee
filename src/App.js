import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Ensure correct path to Navbar
import './App.css';

function App() {
  return (
    <>
     <Router>
        <Navbar />
        <Routes> {/* Use Routes instead of Switch */}
          
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
