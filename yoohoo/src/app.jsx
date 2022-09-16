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
import Profile from "./components/page/profile/myPost/mypost";
import FAQ from "./components/footer/notice/faq";
import ShopDetail from "./components/page/shop/shopDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact="true" element={<Home />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/Home" render={() => <Home />} /> */}
        <Route path="/shop" element={<Shop />} />
        <Route path="/post" element={<Post />} />
        <Route path="/about" element={<About />} />
        <Route path="/alarm" element={<Alarm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/shopDetail" element={<ShopDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
