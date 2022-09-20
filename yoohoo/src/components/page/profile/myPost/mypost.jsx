import React, { useState } from "react";
import styles from "./myPost.module.css";

const MyPost = (props) => {
  const post = [];

  const postInfo1 = {
    //테스트용 객체
    img: "/Images/test.jpeg",
    title: "testTitle이 얼마나 길어질까유쩔죠~~",
    unit: "월",
    price: "500000",
  };

  const postInfo2 = {
    //테스트용 객체
    img: "/Images/home/earth.svg",
    title: "testTitle이 얼마나 길어질까유쩔죠~~",
    unit: "일",
    price: "500000",
  };

  const getpost = () => {
    //백엔드에서 정보 가져오기
    //정보가 존재하면 객체 넣기
    post.push(postInfo1);
    post.push(postInfo2);

    // console.log(post);
  };

  const ShowPost = (props) => {
    return (
      <div className={styles.post}>
        {/* 게시물 사진 */}
        <img className={styles.postImg} src={props.img} alt="img" />

        {/* 게시물 제목 */}
        <div>
          <span className={styles.postTitle}>{props.title}</span>
        </div>

        {/* 게시물 가격/단위 */}
        <div>
          <span className={styles.colorUnselcet}>
            {props.price}원/{props.unit}
          </span>
        </div>
      </div>
    );
  };

  const postPrint = (len, callback) => {
    console.log(len);
    if (len > 0) {
      ShowPost(post[len - 1]);
      callback(len - 1, postPrint());
    } else {
      console.log("객체 끝");
    }
  };

  return (
    <div className={styles.container}>
      {getpost()}
      {/* 게시물이 없을때 */}
      <div className={post.length === 0 ? styles.noPost : styles.displayNone}>
        <span>작성된 게시물이 없습니다</span>
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

export default MyPost;
