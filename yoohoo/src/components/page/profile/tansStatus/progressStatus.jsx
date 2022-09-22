import React, { useState } from "react";
import styles from "./progressStatus.module.css";
import { MdPlayCircleFilled } from "react-icons/md";

const ProgressStatus = (props) => {
  // const [showButton, setShowButton] = useState(false);

  const post = [];

  const postInfo1 = {
    //테스트용 객체
    img: "/Images/test.jpeg",
    title: "testTitle이 얼마나 길어질까유쩔죠~~",
    startDay: "2022.09.28",
    endDay: "2022.10.22",
    requset: {
      //반납,조기반납 요청이 들어왔나?
      earlyReturn: true,
      return: false,
    },

    showButton: false,
  };

  const postInfo2 = {
    //테스트용 객체
    img: "/Images/home/earth.svg",
    title: "testTitle이 얼마나 길어질까유쩔죠~~",
    startDay: "2023.08.22",
    endDay: "2024.09.22",
    requset: {
      //반납,조기반납 요청이 들어왔나?
      earlyReturn: false,
      return: true,
    },
    showButton: false,
  };

  const getpost = () => {
    //백엔드에서 정보 가져오기
    //정보가 존재하면 객체 넣기
    post.push(postInfo1);
    post.push(postInfo2);
    post.push(postInfo1);

    // console.log(post);
  };

  const pageNaviHandling = (props) => {
    //해당 페이지 상세보기로 이동하기
    console.log("이동하기!");
  };

  const returnButtonShow = (props, showButton) => {
    const earlyReturnButton = (event) => {
      //백엔드로 조기반납 정보 전송
      event.stopPropagation();
    };

    const returnButton = (event) => {
      //백엔드로 반납 정보 전송
      event.stopPropagation();
    };

    return (
      <div
        className={showButton ? styles.returnButtonShow : styles.displayNone}
      >
        {/* 조기반납 */}
        <div
          className={styles.returnButtonText}
          onClick={(event) => earlyReturnButton(event)}
        >
          <span>
            조기반납
            {props.requset.earlyReturn ? " 수락" : " 요청"}
          </span>
        </div>
        <div className={styles.returnButtonLine} />
        {/* 반납 */}
        <div
          className={styles.returnButtonText}
          onClick={(event) => returnButton(event)}
        >
          <span>
            반납
            {props.requset.return ? " 수락" : " 요청"}
          </span>
        </div>
      </div>
    );
  };

  const ShowPost = (props) => {
    //각 게시글마다 버튼 show 상태 관리
    const [showButton, setShowButton] = useState(props.showButton);

    return (
      <div className={styles.post} onClick={() => pageNaviHandling(props)}>
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
          {returnButtonShow(props, showButton)}
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
        <span>진행 중인 거래가 없습니다</span>
      </div>

      {/* 게시물이 있을때 */}
      <div
        className={post.length === 0 ? styles.displayNone : styles.gridWrapper}
      >
        {post.map((post) => ShowPost(post))}
      </div>
    </div>
  );
};

export default ProgressStatus;
