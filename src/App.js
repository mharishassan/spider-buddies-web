// src/App.js
import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from "./Components/Home";
import About from "./Components/About";
import OurTeam from "./Components/OurTeam";
import { motion } from 'framer-motion';
import "./App.css";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
    <motion.div
    className="content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-team" element={<OurTeam />} />
        </Routes>
        </motion.div>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
