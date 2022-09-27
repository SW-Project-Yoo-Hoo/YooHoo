import React from "react";
import styles from "../shopDetail.module.css";

const PhotoList = ({ data, currentItem, onView }) => {
  const { image, title } = currentItem;

  function onClick(id) {
    onView(id);

    for (let value of data) {
      if (value.id !== id) {
        value.show = false;
      } else {
        value.show = true;
      }
    }
  }

  return (
    <article>
      <img className={styles.img1} src={image} alt={title} />
      <ul className={styles.imgBtn}>
        {data.map((item) => (
          <li onClick={(event) => onClick(item.id, event)}>
            <img
              className={item.show ? styles.nowBtn : styles.imgBtnList}
              src={item.image}
              alt={item.title}
            />
          </li>
        ))}
      </ul>
    </article>
  );
};

export default PhotoList;
