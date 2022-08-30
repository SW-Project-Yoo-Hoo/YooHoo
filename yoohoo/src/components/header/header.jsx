import React from "react";
import styles from "./header.module.css";
import Logo from "./logo/logo.jsx";
import Page from "./pages/page.jsx";
import User from "./user/user.jsx";

const Header = (props) => {
  return (
    <>
      <Logo />
      <Page />
      <User />
    </>
  );
};

export default Header;
