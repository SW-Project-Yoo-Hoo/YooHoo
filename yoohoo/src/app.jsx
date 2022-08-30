import React from "react";
import "./app.module.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Home from "./components/page/home/home";

function App() {
  return (
    <>
      <Home />
      <Header />
      <Footer />
    </>
  );
}

export default App;
