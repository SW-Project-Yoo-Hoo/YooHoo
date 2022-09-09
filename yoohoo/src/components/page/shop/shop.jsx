import React from "react";
import Footer from "../../footer/footer";
import styles from "./shop.module.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Shop = (props) => {
  return (
    <>
      <div className={styles.wrapHeader}></div>
      <div className={styles.background}>
        <img
          className={styles.headerImg}
          src={process.env.PUBLIC_URL + "images/headerBackground.png"}
          alt="Header"
        />

        <div className={styles.container}>
          <div>
            <span className={styles.title}>SHOP</span>
            <span className={styles.order}>⬇⬆ 최신순</span>
            <hr className={styles.hr}></hr>
            <span className={styles.subTitle}>All Products</span>
          </div>

          <div clssName={styles.productGroup}>
            <div className={styles.product}>
              <div className={styles.info}>
                <img
                  className={styles.productImg}
                  src={process.env.PUBLIC_URL + "images/about/ys.svg"}
                  alt="Product"
                />
                <p className={styles.productTitle}>Title</p>
                <div className={styles.info2}>
                  <p className={styles.productPrice}>Price</p>
                  <AiOutlineHeart className={styles.productHeart} />
                </div>
              </div>

              <div className={styles.info}>
                <img
                  className={styles.productImg}
                  src={process.env.PUBLIC_URL + "images/about/hj.svg"}
                  alt="Product"
                />
                <p className={styles.productTitle}>Title</p>
                <div className={styles.info2}>
                  <p className={styles.productPrice}>Price</p>
                  <AiOutlineHeart className={styles.productHeart} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className={styles.wrapfooter}>
          <div className={styles.imgGroup}>
            <img
              className={styles.footerImg}
              src={process.env.PUBLIC_URL + "images/footBackground.png"}
              alt="Footer"
            />
          </div>
          <footer className={styles.footer}>
            <Footer />
          </footer>
        </div>
      </div>
    </>
  );
};

export default Shop;
