import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogList from './Pages/Bloglist';
import BlogDetails from './Pages/Blogdetails';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/post/:id" element={<BlogDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
