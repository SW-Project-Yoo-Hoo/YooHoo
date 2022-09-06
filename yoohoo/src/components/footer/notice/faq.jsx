import React, { useState } from "react";
import Header from "../../header/header";
import Footer from "../footer";
import styles from "./faq.module.css";

const FAQ = (props) => {
  const [qnaList, setQnaList] = useState([
    {
      id: 0,
      question: "프로필 사진과 닉네임을 변경하고 싶어요 !",
      answer:
        "프로필은 사진 및 회사명, 회사 위치, 연락처의 정보가 있습니다. \n프로필 내의 정보를 수정하는 방법은 아래와 같습니다.\n\n[ 우측 상단 프로필 > 프로필 수정 > 정보 입력 > 완료 ]",
      show: false,
    },
    {
      id: 1,
      question: "알림은 어디서 확인하나요 ?",
      answer:
        "알림은 거래요청이나 거래 취소 및 완료, 조기 반납 요청, 반납 일정, 반납 요청 등의 알림을 확인 할 수 있습니다. \n새로운 알림이 왔을 때 우측 상단에 알림표시가 뜹니다 !\n\n알림은 ‘우측 상단 알림’을 누르면 확인할 수 있습니다.",
      show: false,
    },
    {
      id: 2,
      question: "관심 있는 물건만 따로 모아보고 싶어요 !",
      answer:
        "관심 있는 물건은 SHOP에서 찜하기를 누른 게시물입니다.\n관심 있는 물건만 따로 볼 수 있는 방법은 아래와 같습니다.\n\n[ 우측 상단 프로필 > 게시물 보기 > 찜한 게시물 ]",
      show: false,
    },

    {
      id: 3,
      question: "대여기간은 어떻게 설정하나요 ?",
      answer:
        "대여 기간이란 물품을 거래할 때 이용하고자 하는 기간입니다.\n대여 기간의 단위는 게시물을 올린 사용자가 지정한 단위 혹은 더 큰 단위로만 가능합니다.\n대여 기간을 선택하는 방법은 아래와 같습니다.\n\n[ 게시물 > 대여 기간 > 시작 날짜 선택 > 반납 날짜 선택 > 완료 ]",
      show: false,
    },

    {
      id: 4,
      question: "물품은 어떻게 등록하나요 ?",
      answer:
        "물품은 게시물 제목, 이미지, 대여 물품 카테고리, 대여 단위, 가격 및 수량, 상세 내용을 입력하여 등록할 수 있습니다.\n\n물품을 등록하는 방법은 상단에 POST를 누르면 가능합니다.",
      show: false,
    },
  ]);

  const onClick = (id) => {
    setQnaList(
      qnaList.map((item) =>
        item.id === id ? { ...item, show: !item.show } : item
      )
    );
  };

  return (
    <>
      <div className={styles.wrapHeader}></div>
      <div className={styles.background}>
        <div className={styles.imgGroup}>
          <img
            className={styles.headerImg}
            src={process.env.PUBLIC_URL + "images/headerBackground.png"}
            alt="Header"
          />
          <img
            className={styles.faqPNG}
            src={process.env.PUBLIC_URL + "images/faq/faq.svg"}
            alt="FAQ"
          />
        </div>

        <div className={styles.faqGroup}>
          {qnaList.map((item, id) => (
            <div className={item.show ? styles.showFAQ : styles.closeFAQ}>
              <div
                className={styles.closeFAQ_question}
                onClick={() => {
                  onClick(id);
                }}
              >
                <div className={styles.faqList}>
                  <div className={styles.Q}>
                    {item.show ? (
                      <img
                        className={styles.minusIcon}
                        src={process.env.PUBLIC_URL + "images/faq/minus.png"}
                        alt="Minus"
                      />
                    ) : (
                      <img
                        className={styles.plusIcon}
                        src={process.env.PUBLIC_URL + "images/faq/plus.png"}
                        alt="plus"
                      />
                    )}
                    <span className={styles.question}>{item.question}</span>
                  </div>

                  <div className={styles.A}>
                    <div
                      className={item.show ? styles.answer : styles.answer_none}
                    >
                      <p className={styles.p}>{item.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* Footer */}
          <div className={styles.wrapfooter}>
            <img
              className={styles.footerImg}
              src={process.env.PUBLIC_URL + "images/footBackground.png"}
              alt="Footer"
            />
            <footer className={styles.footer}>
              <Footer />
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
