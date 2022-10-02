import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { shopItemThunk } from "../../../../store/modules/shopItem";
import styles from "../shopDetail.module.css";
import img from "./image";
import PhotoList from "./photoList";

const ShowImg = () => {
  /* 해당 아이템 */
  const location = useLocation();
  let item = location.state.info;

  /* Redux-Toolkit */
  const dispatch = useDispatch();
  const shopItem = useSelector((state) => state.shopItemReducer);
  useEffect(() => {
    dispatch(shopItemThunk(item.post_id));
  }, []);

  const data = shopItem.data.photos;
  console.log(data);
  const tmpData = data.map((item, index) => ({
    id: index + 1,
    item,
    show: false,
  }));

  const [currentItem, setCurrentItem] = useState(tmpData[0]);

  const onView = (id) => {
    setCurrentItem(tmpData.find((item) => item.id === id));
  };

  return (
    <div className={styles.imgGroup}>
      <PhotoList
        className={styles.imgBtn}
        data={tmpData}
        onView={onView}
        currentItem={currentItem}
      />
    </div>
  );
};

export default ShowImg;
