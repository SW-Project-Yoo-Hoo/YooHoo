import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.module.css";
import FAQ from "./components/footer/notice/faq";
import About from "./components/page/about/about";
import Home from "./components/page/home/home";
import Post from "./components/page/post/post";
import Shop from "./components/page/shop/shop";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact="true" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Faq" element={<FAQ />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Post" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
