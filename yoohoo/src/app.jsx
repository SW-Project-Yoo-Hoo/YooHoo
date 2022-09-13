import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.module.css";
import About from "./components/page/about/about";
import Home from "./components/page/home/home";
import Shop from "./components/page/shop/shop";
import Post from "./components/page/post/post";
import Alarm from "./components/user/alarm/alarm";
import Login from "./components/user/login/login";
import SignUp from "./components/user/signUp/signUp";
import Profile from "./components/page/profile/profile";
import FAQ from "./components/footer/notice/faq";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact="true" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        {/* <Route path="/Home" render={() => <Home />} /> */}
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Post" element={<Post />} />
        <Route path="/About" element={<About />} />
        <Route path="/Alarm" element={<Alarm />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Faq" element={<FAQ />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
