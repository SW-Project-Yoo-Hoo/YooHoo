import React, { useState, useEffect } from "react";
import styles from "./progressStatus.module.css";
import { MdPlayCircleFilled } from "react-icons/md";
import axios from "axios";
import { Link } from "react-router-dom";

const ProgressStatus = (props) => {
  const [post, setPost] = useState([]);

  //반납,조기반납 버튼 토글 이벤트
  const onToggle = (id) => {
    setPost(
      post.map((post) =>
        post.deal_id === id ? { ...post, toggle: !post.toggle } : post
      )
    );
  };

  //반납, 조기반납 핸들링
  const returnButtonShow = (props) => {
    const text = "반납";
    const returnButton = (event) => {
      //백엔드로 반납 정보 전송
      //현재 상태가 요청 중이면 전송하지 않음
      event.stopPropagation();
    };

    return (
      <div
        //백에서 값 받아와서 아래 적용하기
        // className={[
        //   styles.returnButtonShow,
        //   props.message.text === "반납"
        //     ? styles.returnButtonStyle
        //     : styles.earlyReturnButton,
        // ].join(" ")}

        className={[
          styles.returnButtonShow,
          text === "반납" ? styles.returnButtonStyle : styles.earlyReturnButton,
        ].join(" ")}
      >
        {/* 조기반납 */}
        <div
          className={styles.returnButtonText}
          onClick={(event) => returnButton(event)}
        >
          <span>
            {/* {props.message.text} {props.message.state} */}
            반납 요청하기
          </span>
        </div>
      </div>
    );
  };

  const ShowPost = (props) => {
    return (
      <div className={styles.post} key={props.deal_id}>
        {/* 게시물 사진 */}
        <div className={styles.postImgDay}>
          <Link to={`/detail/${props.post_id}`} state={{ info: props }}>
            <img
              className={styles.postImg}
              src={process.env.PUBLIC_URL + "productList/" + props.image}
              alt="이미지를 찾을 수 없습니다"
            />
          </Link>
          {/* button*/}
          <div
            className={styles.returnButton}
            onClick={(event) => {
              //이벤트 버블링 방지
              event.stopPropagation();
              //버튼 토글 이벤트
              onToggle(props.deal_id);
            }}
          >
            <MdPlayCircleFilled className={styles.iconButton} />
          </div>
          {/* 조기반납, 반납버튼 */}
          {props.toggle ? returnButtonShow(props) : ""}
        </div>

        {/* 게시물 제목 */}
        <div>
          <span className={styles.postTitle}>{props.title}</span>
        </div>

        {/* 게시물 대여 날짜 */}
        <div className={[styles.dealDate, styles.dealDateMargin].join(" ")}>
          <span>시작날짜</span>
          <span>{props.startDate}</span>
        </div>
        <div className={styles.dealDate}>
          <span>반납날짜</span>
          <span>{props.returnDate}</span>
        </div>
      </div>
    );
  };

  useEffect(() => {
    let postAdd = [...post];
    async function get() {
      await axios
        .get("/my/myInDeals")
        .then(function (response) {
          if (response.data.code === 200) {
            //데이터 받기 성공
            let responseData = response.data.data;

            for (const [key, value] of Object.entries(responseData)) {
              postAdd[key] = {
                ...value,
                //버튼 토글 속성 추가
                toggle: false,
              };
            }
            setPost(postAdd);
          }
        })
        .catch(function (error) {
          // 오류발생시 실행
          console.log(error);
        });
    }
    get();
  }, []);

  return (
    <div className={styles.container}>
      {post.length === 0 ? (
        <div className={styles.noPost}>
          <span>진행 중인 거래가 없습니다</span>
        </div>
      ) : (
        <div className={styles.gridWrapper}>
          {post.map((post) => ShowPost(post))}
        </div>
      )}
    </div>
  );
};

export default ProgressStatus;
