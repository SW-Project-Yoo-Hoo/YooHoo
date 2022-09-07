import React, { useState } from "react";
import styles from "./signUp.module.css";
import { Routes, Route } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import Header from "../../header/header";

const SignUp = (props) => {
  const [inputs, setInputs] = useState({
    id: "",
    pw: "",
    companyName: "",
    adress: "",
    phone: "",
  });

  const { id, pw, companyName, adress, phone } = inputs;

  //회원 정보 입력 핸들링
  const changeHandling = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  //아이디 정규표현식
  const idRegex = () => {};

  //비밀번호 정규표현식
  const pwRegex = () => {};

  const signUpHandling = () => {
    //백엔드로 회원 정보 전송하기
    //만약 회원가입이 제대로 됐다면 로그인 페이지로 이동
    window.location.href = "/Login";

    //만약 회원가입이 제대로 안됐다면 알람
    // alert("예기치 못한 오류가 발생하였습니다.");
  };

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.backGroundIamge} />

      <div className={styles.signUpContainer}>
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
          <div className={styles.form}>
            <label className={styles.label}>
              <sapn>아이디</sapn>
              <span className={styles.labelSpan}> *</span>
              <input
                type="text"
                name="id"
                onChange={changeHandling}
                value={id}
                placeholder="영대/소문자, 숫자를 모두 포함한 6~12자리"
                className={styles.input}
              />
            </label>
          </div>

          {/* pw */}
          <div className={styles.form}>
            <label className={styles.label}>
              <sapn>비밀번호</sapn>
              <span className={styles.labelSpan}> *</span>
              <input
                type="text"
                name="pw"
                onChange={changeHandling}
                value={pw}
                placeholder="영대/소문자, 숫자, 특수문자를 모두 포함한 6~14자리"
                className={styles.input}
              />
            </label>
          </div>

          {/* Company Name */}
          <div className={styles.form}>
            <label className={styles.label}>
              <sapn>회사명</sapn>
              <span className={styles.labelSpan}> *</span>
              <input
                type="text"
                name="companyName"
                onChange={changeHandling}
                value={companyName}
                placeholder="회사명을 입력해주세요"
                className={styles.input}
              />
            </label>
          </div>

          {/* adress */}
          <div className={styles.form}>
            <label className={styles.label}>
              <sapn>회사 주소</sapn>
              <span className={styles.labelSpan}> *</span>
              <input
                type="text"
                name="adress"
                onChange={changeHandling}
                value={adress}
                placeholder="회사 주소를 상세히 입력해주세요"
                className={styles.input}
              />
            </label>
          </div>

          {/* phone */}
          <div className={styles.form}>
            <label className={styles.label}>
              <sapn>연락처</sapn>
              <span className={styles.labelSpan}> *</span>
              <input
                type="text"
                name="phone"
                onChange={changeHandling}
                value={phone}
                placeholder="연락처를 '-' 포함하여 입력해주세요"
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
    </div>
  );
};

export default SignUp;
