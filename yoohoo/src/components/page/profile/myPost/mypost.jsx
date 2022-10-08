import React, { useState, useEffect } from "react";
import styles from "./myPost.module.css";
import axios from "axios";

const MyPost = (props) => {
  const [post, setPost] = useState([]);

  //게시물 상세보기로 이동
  const pageNaviHandling = (props) => {
    //해당 페이지 상세보기로 이동하기
    window.location.href = `/detail/${props}`;
  };

  const ShowPost = (props) => {
    return (
      <div
        className={styles.post}
        onClick={() => pageNaviHandling(props.post_id)}
        key={props.post_id}
      >
        {/* 게시물 사진 */}
        <img
          className={styles.postImg}
          src={process.env.PUBLIC_URL + "productList/" + props.image.dir}
          alt="이미지를 찾을 수 없습니다"
        />

        {/* 게시물 제목 */}
        <div>
          <span className={styles.postTitle}>{props.title}</span>
        </div>

        {/* 게시물 가격/단위 */}
        <div>
          <span className={styles.colorUnselcet}>
            {props.price.toLocaleString("ko-KR")}원/{props.unit}
          </span>
        </div>
      </div>
    );
  };

  useEffect(() => {
    let postAdd = [...post];
    async function get() {
      await axios
        .get("/my/myPosts")
        .then(function (response) {
          if (response.data.code === 200) {
            //데이터 받기 성공
            let responseData = response.data.data;

            for (const [key, value] of Object.entries(responseData)) {
              postAdd[key] = value;
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
          <span>작성된 게시물이 없습니다</span>
        </div>
      ) : (
        <div className={styles.gridWrapper}>
          {post.map((post) => ShowPost(post))}
        </div>
      )}
    </div>
  );
};

export default MyPost;
