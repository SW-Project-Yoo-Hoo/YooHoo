import React from "react";
import Footer from "../../footer/footer";
import styles from "./shop.module.css";
import { MdSwapVert } from "react-icons/md";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Header from "../../header/header";

const Shop = (props) => {
  return (
    <>
      <Header />
      <div className={styles.background}>
        <img
          className={styles.headerImg}
          src={process.env.PUBLIC_URL + "images/headerBackground.png"}
          alt="Header"
        />

        <span className={styles.title}>SHOP</span>
        <div className={styles.orderDiv}>
          <MdSwapVert className={styles.orderIcon} />
          <span>최신순</span>
        </div>
        <div className={styles.hr}></div>
        <span className={styles.subTitle}>All Products</span>

        <div className={styles.container}>
          <div className={styles.productGroup}>
            <div className={styles.product}>
              <img
                className={styles.productImg}
                src={process.env.PUBLIC_URL + "images/shop/a.jpg"}
                alt="Product"
              />
              <div className={styles.info}>
                <p className={styles.productTitle}>
                  일이삼사오육칠팔구십일이삼사오육칠팔구십
                </p>
                <div className={styles.info2}>
                  <p className={styles.productPrice}>Price</p>
                  <AiOutlineHeart className={styles.wishIcon} />
                </div>
              </div>
            </div>

            <div className={styles.product}>
              <img
                className={styles.productImg}
                src={process.env.PUBLIC_URL + "images/about/hj.svg"}
                alt="Product"
              />
              <div className={styles.info}>
                <p className={styles.productTitle}>
                  일이삼사오육칠팔구십일이삼사오육칠팔구십
                </p>
                <div className={styles.info2}>
                  <p className={styles.productPrice}>Price</p>
                  <AiOutlineHeart className={styles.wishIcon} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div>
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
    </>
  );
};

export default Shop;
