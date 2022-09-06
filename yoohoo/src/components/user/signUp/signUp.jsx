import React from "react";
import styles from "./signUp.module.css";
import { Routes, Route } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import Header from "../../header/header";

const SignUp = (props) => {
  const signUpHandling = () => {
    window.location.href = "/SignUp";
  };

  return (
    <>
      <Header />
      <div className={styles.backGroundIamge} />

      <div className={styles.container}>
        {/* Img */}
        <img
          className={styles.loginImg}
          src="/Images/login/login.svg"
          alt="img"
        ></img>

        {/* signUpForm */}
        <div className={styles.signUpForm}>
          <sapn className={styles.title}>회원가입</sapn>

          {/* id */}
          <div className={styles.id}>
            <label className={styles.label}>
              <sapn>아이디</sapn>
              <span className={styles.labelSpan}> *</span>
              <input
                type="text"
                name="id"
                placeholder="영대/소문자,숫자를 모두 포함한 6~12자리"
                className={styles.input}
              />
            </label>
          </div>

          {/* pw */}
          <div className={styles.pw}>
            <label className={styles.label}>
              <sapn>비밀번호</sapn>
              <span className={styles.labelSpan}> *</span>
              <input
                type="text"
                name="pw"
                placeholder="영대/소문자,숫자,특수문자를 모두 포함한 6~14자리"
                className={styles.input}
              />
            </label>
          </div>

          {/* signUpButton */}
          <div className={styles.signUpButton}>
            <button
              className={styles.signUpButtonStyle}
              onClick={signUpHandling}
            >
              가입하기
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
