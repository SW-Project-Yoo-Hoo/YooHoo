import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.module.css";
import Footer from "./components/footer/footer";
import FAQ from "./components/footer/notice/faq";
import Header from "./components/header/header";
import Home from "./components/page/home/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
