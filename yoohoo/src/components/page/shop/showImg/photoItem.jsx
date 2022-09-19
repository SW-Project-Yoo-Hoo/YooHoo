import React from "react";
import styles from "../shopDetail.module.css";

const PhotoItem = ({ item, onView }) => {
  const { id, image, title } = item;

  return (
    <li onClick={() => onView(id)}>
      <img className={styles.imgBtnList} src={image} alt={title} />
    </li>
  );
};

export default PhotoItem;
