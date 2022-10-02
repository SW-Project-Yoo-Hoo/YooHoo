import React from "react";
import { useState } from "react";
import styles from "../shopDetail.module.css";

const PhotoList = ({ data, currentItem, onView }) => {
  const REACT_PUBLIC_URL = "http://localhost:3000/";

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
      <img
        className={styles.img1}
        src={REACT_PUBLIC_URL + "productList/" + currentItem.item.dir}
        alt="Product"
      />
      <ul className={styles.imgBtn}>
        {data.map((item, index) => (
          <li onClick={(event) => onClick(item.id)}>
            <img
              className={item.show ? styles.nowBtn : styles.imgBtnList}
              src={REACT_PUBLIC_URL + "productList/" + item.item.dir}
              alt="Product"
            />
            {console.log("item.show", item.show)}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default PhotoList;
