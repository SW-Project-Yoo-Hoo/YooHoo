import React, { useState } from "react";
import styles from "./shopDetail.module.css";
import img from "./image";
import PhotoList from "./photoList";
import { useEffect } from "react";

const ShowImg = (props) => {
  const [data, setData] = useState(img);
  const [currentItem, setCurrentItem] = useState(data[0]);

  const onView = (id) => {
    setCurrentItem(data.find((item) => item.id === id));
  };

  return (
    <div className={styles.imgGroup}>
      <PhotoList
        className={styles.imgBtn}
        data={data}
        onView={onView}
        currentItem={currentItem}
      />
    </div>
  );
};

export default ShowImg;
