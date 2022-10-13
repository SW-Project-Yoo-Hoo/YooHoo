import React, { useState, useEffect } from "react";
import Footer from "../../footer/footer";
import styles from "./shop.module.css";
import { MdSwapVert, MdFavoriteBorder, MdFavorite } from "react-icons/md";
import Header from "../../header/header";
import axios from "axios";
import { Link } from "react-router-dom";
import { shopListThunk } from "../../../store/modules/shopList";
import { useDispatch, useSelector } from "react-redux";

const Shop = (props) => {
  /* Redux-Toolkit */
  const dispatch = useDispatch();
  const shopList = useSelector((state) => state.shopListSlice);

  useEffect(() => {
    dispatch(shopListThunk());
  }, []);

  const [wishItem, setWishItem] = useState(shopList);
  // const [wishItem, setWishItem] = useState(ShopImg);

  /* 페이지 이동 시 스크롤 상단으로 */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* 찜하기 버튼 */
  function onClickWishBtn(id, prevWish) {
    setWishItem(
      wishItem.map((it) => (it.id === id ? { ...it, wish: !prevWish } : it))
    );
  }

  return (
    <>
      <Header />
      <div className={styles.background}>
        <img
          className={styles.headerImg}
          src={process.env.PUBLIC_URL + "images/headerBackground.png"}
          alt="Header"
        />

        <div className={styles.container}>
          <div className={styles.spanGroup}>
            <span className={styles.title}>SHOP</span>
            <div className={styles.orderDiv}>
              <MdSwapVert className={styles.orderIcon} />
              <span className={styles.orderSpan}>최신순</span>
            </div>
            <div className={styles.hr}></div>
            <span className={styles.subTitle}>All Products</span>
          </div>
          <div className={styles.productGroup}>
            {shopList.map((item) => (
              <Link to={`/detail/${item.post_id}`} state={{ info: item }}>
                <div className={styles.product} key={item}>
                  <img
                    className={styles.productImg}
                    src={
                      process.env.PUBLIC_URL + "productList/" + item.image.dir
                    }
                    alt="Product"
                  />
                  <div className={styles.info}>
                    <p className={styles.productTitle}>{item.title}</p>
                    <div className={styles.info2}>
                      <p className={styles.productPrice}>
                        {item.price.toLocaleString("ko-KR")}원/{item.unit}
                      </p>
                      <div className={styles.unselectWishIcon}>
                        <MdFavoriteBorder className={styles.unselectWishIcon} />
                      </div>

                      {/* 찜하기 기능 추가시 주석 제거 */}
                      {/* <div
                      className={
                        wishItem[item.id - 1].wish
                          ? styles.selectWishIcon
                          : styles.unselectWishIcon
                      }
                      onClick={() =>
                        onClickWishBtn(item.id, wishItem[item.id - 1].wish)
                      }
                    >
                      {wishItem[item.id - 1].wish ? (
                        <MdFavorite className={styles.selectWishIcon} />
                      ) : (
                        <MdFavoriteBorder className={styles.unselectWishIcon} />
                      )}
                    </div> */}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Footer */}
          <div className={styles.footer}>
            <img
              className={styles.footerImg}
              src={process.env.PUBLIC_URL + "images/footBackground.png"}
              alt="Footer"
            />
            <img
              className={styles.footerImg2}
              src={process.env.PUBLIC_URL + "images/shop/bottomIllu.svg"}
              alt="Illu"
            />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
