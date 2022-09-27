import React from "react";
import Footer from "../../footer/footer";
import styles from "./shop.module.css";
import { MdSwapVert, MdFavoriteBorder, MdFavorite } from "react-icons/md";
import Header from "../../header/header";
import ShopImg from "./shopImg";

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
            {ShopImg.map((item, index) => (
              <div className={styles.product}>
                <img
                  className={styles.productImg}
                  src={item.image}
                  alt="Product"
                />
                <div className={styles.info}>
                  <p className={styles.productTitle}>{item.title}</p>
                  <div className={styles.info2}>
                    <p className={styles.productPrice}>{item.price}</p>
                    <MdFavoriteBorder className={styles.wishIcon} />
                  </div>
                </div>
              </div>
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
