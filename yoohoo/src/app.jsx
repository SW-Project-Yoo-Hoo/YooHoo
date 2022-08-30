import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.module.css";
import FAQ from "./components/footer/notice/faq";
import About from "./components/page/about/about";
import Home from "./components/page/home/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
