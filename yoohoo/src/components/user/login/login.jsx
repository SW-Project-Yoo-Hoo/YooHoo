import React, { useState, useEffect } from "react";
import styles from "./login.module.css";
import { Navigate } from "react-router-dom";
import Header from "../../header/header";
import Footer from "../../footer/footer";

const Login = (props) => {
  /* 페이지 이동 시 스크롤 상단으로 */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //회원정보 상태
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

  const [incorrect, setIncorrect] = useState(false);

  const loginHandling = () => {
    console.log("로그인 버튼 눌렀다!!");
    //백엔드랑 통신 해서 로그인 정보가 올바르면 원래 있던 페이지로 돌아가기
    //window.history.back();
    //로그인 정보가 올바르지 않으면 알림 띄우기
    setIncorrect(true);
  };

  const signUpHandling = () => {
    window.location.href = "/signUp";
  };

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.backGroundIamge} />

      <div className={styles.loginContainer}>
        {/* loginImg */}
        <img
          className={styles.loginImg}
          src="/Images/login/login.svg"
          alt="img"
        ></img>

        {/* loginForm */}
        <div className={styles.loginForm}>
          <span className={styles.title}>로그인</span>

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

          {/* loginAlert */}
          <div className={incorrect ? styles.alertInfo : styles.alertInfoNone}>
            <span className={styles.alertSpan}>
              로그인 정보가 올바르지 않습니다.
            </span>
          </div>

          {/* loginButton */}
          <div
            className={
              incorrect ? styles.loginButton : styles.loginButtonDefault
            }
          >
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
      <Footer />
    </div>
  );
};

const MyPage = (props) => {
  let test = 0;
  return test ? <Navigate to="/profile" replace={true} /> : <Login />;
};

export default MyPage;
