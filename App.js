import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar'; 
import './App.css';

function App() {
  return (
    <>
     <Router>
        <Navbar />
        <Routes> {/* Use Routes instead of Switch */}
          
         
        </Routes>
      </Router>
    </>
  );
}

export default App;
