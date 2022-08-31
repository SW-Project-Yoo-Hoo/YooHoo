import React from "react";
import "./app.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/page/about/about";
import Home from "./components/page/home/home";
import Shop from "./components/page/shop/shop";
import Post from "./components/page/post/post";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact="true" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Post" element={<Post />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
