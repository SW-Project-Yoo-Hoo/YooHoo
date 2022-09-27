import React, { useState } from "react";
import styles from "./receivedStatus.module.css";
import { MdPlayCircleFilled } from "react-icons/md";

const ReceivedStatus = (props) => {
  const post = [];

  const postInfo1 = {
    //테스트용 객체
    id: "게시글 아이디1",
    img: "/Images/test.jpeg",
    title: "testTitle이 얼마나 길어질까유쩔죠~~",
    startDay: "2022.09.28",
    endDay: "2022.10.22",

    showButton: false,
  };

  const postInfo2 = {
    //테스트용 객체
    id: "게시글 아이디2",
    img: "/Images/home/earth.svg",
    title: "testTitle이 얼마나 길어질까유쩔죠~~",
    startDay: "2023.08.22",
    endDay: "2024.09.22",
    showButton: false,
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
    const acceptButton = (event) => {
      //백엔드로 거래 수락 정보 전송
      event.stopPropagation();
    };

    const rejectButton = (event) => {
      //백엔드로 거래 거절 정보 전송
      event.stopPropagation();
    };

    return (
      <div className={styles.returnButtonShow}>
        {/* 수락하기 */}
        <div
          className={styles.returnButtonText}
          onClick={(event) => acceptButton(event)}
        >
          <span>수락하기</span>
        </div>
        <div className={styles.returnButtonLine} />
        {/* 거절하기 */}
        <div
          className={styles.returnButtonText}
          onClick={(event) => rejectButton(event)}
        >
          <span>거절하기</span>
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
            <MdPlayCircleFilled className={styles.iconButton} />
          </div>
          {/* 조기반납, 반납버튼 */}
          {showButton ? returnButtonShow(props) : ""}
        </div>

        {/* 게시물 제목 */}
        <div>
          <span className={styles.postTitle}>{props.title}</span>
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

  return (
    <div className={styles.container}>
      {getpost()}
      {/* 게시물이 없을때 */}
      <div className={post.length === 0 ? styles.noPost : styles.displayNone}>
        <span>받은 요청이 없습니다</span>
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

export default ReceivedStatus;
