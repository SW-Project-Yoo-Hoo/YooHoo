import React from "react";
import styles from "./user.module.css";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const User = (props) => {
  return (
    <user>
      <img src="/Images/header/profile.png"></img>
      <img src="/Images/header/alert.png"></img>
      <img src="/Images/header/search.png"></img>
      <PersonOutlineOutlinedIcon />
    </user>
  );
};

export default User;
