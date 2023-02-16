import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Sidebar from "./Sidebar"
import Feed from "./Feed"
import Footer from './Footer';
import Login from './Login';
import Navbar from './Navbar';
import Search from './Search';

function App() {
  return (
    <div >
     
 <BrowserRouter>
  <Navbar/> 
      <Routes>
        <Route path="/" element={<Feed/>} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
