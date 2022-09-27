import React, { useState } from "react";
import styles from "./completStatus.module.css";
import { MdInfo, MdAttachMoney } from "react-icons/md";

const CompletStatus = (props) => {
  const post = [];

  const postInfo1 = {
    //테스트용 객체
    id: "게시글 아이디1",
    img: "/Images/test.jpeg",
    title: "testTitle이 얼마나 길어질까유쩔죠~~",
    startDay: "2022.09.28",
    endDay: "2022.10.22",
    price: 5000,
    totalPrice: 10000,
    unit: "주",
  };

  const postInfo2 = {
    //테스트용 객체
    id: "게시글 아이디2",
    img: "/Images/home/earth.svg",
    title: "testTitle이 얼마나 길어질까유쩔죠~~",
    startDay: "2023.08.22",
    endDay: "2024.09.22",
    price: 7000,
    totalPrice: 35000,
    unit: "일",
  };

  const getpost = () => {
    //백엔드에서 정보 가져오기
    //정보가 존재하면 객체 넣기
    post.push(postInfo1);
    post.push(postInfo2);
  };

  const pageNaviHandling = (props) => {
    //해당 페이지 상세보기로 이동하기
    console.log("이동하기!");
  };

  const returnButtonShow = (props) => {
    return (
      <div className={styles.returnButtonShow}>
        {/* 금액, 대여단위 */}
        <div className={styles.dealPrice}>
          <span>
            {props.price.toLocaleString("ko-KR")}/{props.unit}
          </span>
        </div>

        {/* 게시물 대여 날짜 */}
        <div className={[styles.dealDate, styles.dealDateMargin].join(" ")}>
          <span>시작날짜</span>
          <span>{props.startDay}</span>
        </div>
        <div className={styles.dealDate}>
          <span>반납날짜</span>
          <span>{props.endDay}</span>
        </div>
      </div>
    );
  };

  const ShowPost = (props, id) => {
    //각 게시글마다 버튼 show 상태 관리
    const [showButton, setShowButton] = useState(props.showButton);

    return (
      <div
        className={styles.post}
        onClick={() => pageNaviHandling(props)}
        key={id}
      >
        {/* 게시물 사진 */}
        <div className={styles.postImgDay}>
          <img className={styles.postImg} src={props.img} alt="img" />
          {/* button*/}
          <div
            className={styles.returnButton}
            onClick={(event) => {
              //이벤트 버블링 방지
              event.stopPropagation();
              props.showButton = !showButton;
              setShowButton(props.showButton);
            }}
          >
            <MdInfo className={styles.iconInfoButton} />
          </div>
          {/* 대여 정보 */}
          {showButton ? returnButtonShow(props) : ""}
        </div>

        {/* 게시물 제목 */}
        <div>
          <span className={styles.postTitle}>{props.title}</span>
        </div>

        {/* 게시물 총 금액 */}
        <div className={styles.postTotalPrice}>
          <div className={styles.iconPriceButtonWrapper}>
            <MdAttachMoney className={styles.iconPriceButton} />
          </div>
          <span>{props.totalPrice.toLocaleString("ko-KR")}원</span>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      {getpost()}
      {/* 게시물이 없을때 */}
      <div className={post.length === 0 ? styles.noPost : styles.displayNone}>
        <span>완료된 거래가 없습니다</span>
      </div>

      {/* 게시물이 있을때 */}
      <div
        className={post.length === 0 ? styles.displayNone : styles.gridWrapper}
      >
        {post.map((post) => ShowPost(post, post.id))}
      </div>
    </div>
  );
};

export default CompletStatus;
