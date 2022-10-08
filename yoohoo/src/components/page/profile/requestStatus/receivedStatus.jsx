import React, { useState, useEffect } from "react";
import styles from "./receivedStatus.module.css";
import { MdPlayCircleFilled } from "react-icons/md";
import axios from "axios";

const ReceivedStatus = (props) => {
  const [post, setPost] = useState([]);

  //수락,거절 버튼 토글 이벤트
  const onToggle = (id) => {
    setPost(
      post.map((post) =>
        post.request_id === id ? { ...post, toggle: !post.toggle } : post
      )
    );
  };

  //거절 후 포스트 지우기
  const remove = (id) => {
    // post.post_id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = post.post_id가 id 인 것을 제거함
    setPost(post.filter((post) => post.post_id !== id));
  };

  //게시물 상세보기로 이동
  const pageNaviHandling = (props) => {
    //해당 페이지 상세보기로 이동하기
    window.location.href = `/detail/${props}`;
  };

  //수락,거절 버튼
  const returnButtonShow = (props) => {
    //수락하기
    const acceptButton = (event) => {
      //백엔드로 거래 수락 정보 전송
      console.log("수락하기");
      event.stopPropagation();
      axios
        .post(`/requests/${props.request_id}`)
        .then(function (response) {
          console.log(response);
          if (response.data.code === 200) {
            //거절 성공
          }
        })
        .catch(function (error) {
          // 오류발생시 실행
          console.log(error);
        });
      remove(props.post_id);
    };

    //거절하기
    const rejectButton = (event) => {
      //백엔드로 거래 거절 정보 전송
      console.log("거절하기");
      event.stopPropagation();

      axios
        .put(`/requests/${props.request_id}`)
        .then(function (response) {
          if (response.data.code === 200) {
            //거절 성공
          }
        })
        .catch(function (error) {
          // 오류발생시 실행
          console.log(error);
        });
      remove(props.post_id);
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

  const ShowPost = (props) => {
    return (
      <div
        className={styles.post}
        onClick={() => pageNaviHandling(props.post_id)}
        key={props.request_id}
      >
        {/* 게시물 사진 */}
        <div className={styles.postImgDay}>
          <img
            className={styles.postImg}
            src={process.env.PUBLIC_URL + "productList/" + props.image.dir}
            alt="이미지를 찾을 수 없습니다"
          />
          {/* button*/}
          <div
            className={styles.returnButton}
            onClick={(event) => {
              //이벤트 버블링 방지
              event.stopPropagation();

              //버튼 토글 이벤트
              onToggle(props.request_id);
            }}
          >
            <MdPlayCircleFilled className={styles.iconButton} />
          </div>
          {/* 수락하기, 거절하기 버튼 */}
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
        .get("/my/requests_received")
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
  }, [post.post_id]);

  return (
    <div className={styles.container}>
      {post.length === 0 ? (
        <div className={styles.noPost}>
          <span>받은 요청이 없습니다</span>
        </div>
      ) : (
        <div className={styles.gridWrapper}>
          {post.map((post) => ShowPost(post))}
        </div>
      )}
    </div>
  );
};

export default ReceivedStatus;
