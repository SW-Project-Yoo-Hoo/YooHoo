import React from "react";
import styles from "./waitStatus.module.css";
import moment from "moment";
import "moment/locale/ko";

const WaitStatus = (props) => {
  const post = [];

  const postInfo1 = {
    //테스트용 객체
    id: "게시글 아이디1",
    img: "/Images/test.jpeg",
    title: "testTitle이 얼마나 길어질까유쩔죠~~",
    startDay: "2022.09.28",
    endDay: "2022.10.22",
  };

  const postInfo2 = {
    //테스트용 객체
    id: "게시글 아이디2",
    img: "/Images/home/earth.svg",
    title: "testTitle이 얼마나 길어질까유쩔죠~~",
    startDay: "2023.08.22",
    endDay: "2024.09.22",
  };

  const getpost = () => {
    //백엔드에서 정보 가져오기
    //정보가 존재하면 객체 넣기
    post.push(postInfo1);
    post.push(postInfo2);
  };

  //디데이 계산하기
  const countDay = (props) => {
    //현재 날짜(형식 지정해주기)
    const now = moment(moment().format("YYYY.MM.DD"));

    //디데이를 설정할 날짜
    const dDay = moment(props.startDay);

    //day 기준으로 날짜 차이 구하기
    return dDay.diff(now, "days");
  };

  const pageNaviHandling = (props) => {
    //해당 페이지 상세보기로 이동하기
    console.log("이동하기!");
  };

  const ShowPost = (props, id) => {
    return (
      <div
        className={styles.post}
        onClick={() => pageNaviHandling(props)}
        key={id}
      >
        {/* 게시물 사진 */}
        <div className={styles.postImgDay}>
          <img className={styles.postImg} src={props.img} alt="img" />
          {/* d-day */}
          <div className={styles.dDay}>
            <span>D - {countDay(props)}</span>
          </div>
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
        <span>대기 중인 거래가 없습니다</span>
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

export default WaitStatus;
