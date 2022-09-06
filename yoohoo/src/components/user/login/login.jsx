import React, { useState } from "react";
import styles from "./login.module.css";
import { Routes, Route } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import Header from "../../header/header";
import SignUp from "../signUp/signUp";

// 프로필 클릭 -> 로그인 창으로 넘어옴 -> 페이지 렌더링 전(*생명 주기 참고)에 현재 로그인 상태인지 확인
// 현재 로그인이 되어 있으면 -> 프로필 페이지로 바로 연결
// 현재 로그인이 안되어 있으면 -> 로그인 페이지 렌더링

const Login = (props) => {
  const [inputs, setInputs] = useState({
    id: "",
    pw: "",
  });

  const { id, pw } = inputs;

  const changeHandling = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const loginHandling = () => {
    console.log("로그인 버튼 눌렀다!!");
    //백엔드랑 통신 해서 로그인 정보가 올바르면 원래 있던 페이지로 돌아가기
    window.history.back();
    //로그인 정보가 올바르지 않으면
  };

  const signUpHandling = () => {
    window.location.href = "/SignUp";
  };

  return (
    <>
      <Header />
      <div className={styles.backGroundIamge} />

      <div className={styles.container}>
        {/* loginImg */}
        <img
          className={styles.loginImg}
          src="/Images/login/login.svg"
          alt="img"
        ></img>

        {/* loginForm */}
        <div className={styles.loginForm}>
          <sapn className={styles.title}>로그인</sapn>

          {/* id */}
          <div className={styles.form}>
            <label className={styles.label}>
              아이디
              <input
                type="text"
                name="id"
                onChange={changeHandling}
                value={id}
                placeholder="아이디를 입력해주세요"
                className={styles.input}
              />
            </label>
          </div>

          {/* pw */}
          <div className={styles.form}>
            <label className={styles.label}>
              비밀번호
              <input
                type="password"
                name="pw"
                onChange={changeHandling}
                value={pw}
                placeholder="비밀번호를 입력해주세요"
                className={styles.input}
              />
            </label>
          </div>

          {/* loginButton */}
          <div className={styles.loginButton}>
            <button className={styles.loginButtonStyle} onClick={loginHandling}>
              로그인
            </button>
          </div>

          {/* signUpButton */}
          <div className={styles.signUpButton}>
            <button
              className={styles.signUpButtonStyle}
              onClick={signUpHandling}
            >
              회원가입
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
