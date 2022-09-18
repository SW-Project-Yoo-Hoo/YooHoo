import React from "react";
import styles from "./shopDetail.module.css";
import PhotoItem from "./photoItem";

const PhotoList = ({ data, currentItem, onView }) => {
  const { id, image, title } = currentItem;

  return (
    <article>
      <img className={styles.img1} src={image} alt={title} />
      <ul className={styles.imgBtn}>
        {data.map((item) => (
          <PhotoItem key={item.id} item={item} onView={onView} />
        ))}
      </ul>
    </article>
  );
};

export default PhotoList;
