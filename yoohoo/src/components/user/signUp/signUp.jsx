import React, { useState } from "react";
import styles from "./signUp.module.css";
import Header from "../../header/header";
import Footer from "../../footer/footer";

const SignUp = (props) => {
  const [inputs, setInputs] = useState({
    id: "",
    pw: "",
    companyName: "",
    adress: "",
    phone: "",
  });

  const { id, pw, companyName, adress, phone } = inputs;

  const [incorrect, setIncorrect] = useState(false);
  const [alertText, setAlertText] = useState("");

  //회원 정보 입력 핸들링
  const changeHandling = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  //회원가입 정보 정규식
  const Regex = {
    idRegex:
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z\.])+[a-zA-Z]{2,3}$/i,
    pwRegex: /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,14}$/,
    phoneRegex: /^\d{2,3}-\d{3,4}-\d{4}$/,
  };

  const signUpHandling = () => {
    setIncorrect(false);
    //백엔드로 회원 정보 전송하기

    //만약 회원가입이 제대로 됐다면 로그인 페이지로 이동
    window.location.href = "/Login";
    //만약 중복된 아이디라면 알림 띄우기
    //setAlertText("중복된 아이디입니다.");
  };

  const regexHandling = () => {
    //정규식 확인하고 일치하지 않으면 알림 띄우기
    if (id.match(Regex.idRegex) === null) {
      setIncorrect(true);
      setAlertText("부적잘한 이메일입니다.");
    } else if (pw.match(Regex.pwRegex) === null) {
      setIncorrect(true);
      setAlertText("부적잘한 비밀번호 형식입니다.");
    } else if (phone.match(Regex.phoneRegex) === null) {
      setIncorrect(true);
      setAlertText("부적잘한 연락처 형식입니다.");
    } else {
      //회원정보가 모두 올바르면 signUpHandling 호출
      signUpHandling();
    }
  };

  const UserInfoHandling = () => {
    //회원정보 확인하기
    if (
      id === "" ||
      pw === "" ||
      companyName === "" ||
      adress === "" ||
      phone === ""
    ) {
      //모든 정보가 입력 되지 않았다면 알림 띄우기
      setIncorrect(true);
      setAlertText("모든 정보가 입력되지 않았습니다.");
    } else {
      //회원정보가 모두 입력 되었으면 regexHandling 호출
      setIncorrect(false);
      regexHandling();
    }
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
              <sapn>이메일</sapn>
              <span className={styles.labelSpan}> *</span>
              <input
                type="text"
                name="id"
                onChange={changeHandling}
                value={id}
                placeholder="이메일을 입력해주세요"
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
                placeholder="영대/소문자, 숫자를 모두 포함한 6~14자리"
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

          {/* loginAlert */}
          <div className={incorrect ? styles.alertInfo : styles.alertInfoNone}>
            <spna className={styles.alertSpan}>{alertText}</spna>
          </div>

          {/* signUpButton */}
          <div
            className={
              incorrect ? styles.signUpButton : styles.signUpButtonDefault
            }
          >
            <button
              className={styles.signUpButtonStyle}
              onClick={UserInfoHandling}
            >
              가입하기
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SignUp;
