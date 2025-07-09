import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Tokenomics from "./Pages/Tokenomics";
import Roadmap from "./Pages/Roadmap";
import Contact from "./Pages/Contact";
// const Home  = () => <div className="p-10"> Home</div>
// const About = () => <div className="p-10">About Us</div>;
// const Tokenomics = () => <div className="p-10">Tokenomics</div>;
// const Roadmap = () => <div className="p-10">Roadmap</div>;
const Contact = () => <div className="p-10">Contact</div>;

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tokenomics" element={<Tokenomics />}/>
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
export default App;
