import React from "react";
import styles from "./completStatus.module.css";

const CompletStatus = (props) => {
  const postInfo = {
    ok: false,
    img: "",
    title: "",
    unit: "",
    price: "",
  };

  const getPostInfo = () => {
    //백엔드에서 정보 가져오기
    // postInfo.ok = true;
    return postInfo.ok;
  };

  return (
    <div className={styles.container}>
      {/* 게시물이 없을때 */}
      <div className={getPostInfo() ? styles.displayNone : styles.noPost}>
        <span>완료된 거래가 없습니다</span>
      </div>

      {/* 게시물이 있을때 */}
    </div>
  );
};

export default CompletStatus;
