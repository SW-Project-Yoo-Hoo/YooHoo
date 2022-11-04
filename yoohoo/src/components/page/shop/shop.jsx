import React, { useState, useEffect, useRef } from "react";
import Footer from "../../footer/footer";
import styles from "./shop.module.css";
import { MdChecklistRtl, MdFavoriteBorder, MdFavorite } from "react-icons/md";
import Header from "../../header/header";
import axios from "axios";
import moment from "moment";
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

  const start = new Date();
  const [recommend, setRecommend] = useState(false);
  const [startDate, setStartDate] = useState(
    moment(start).format("YYYY.MM.DD")
  );
  const [endDate, setEndDate] = useState("");

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

  const onClickRecommend = () => {
    setRecommend((recommend) => !recommend);
  };

  const startDateRef = useRef();
  const endDateRef = useRef();

  function startDateChange(e, val) {
    const dateLength = 8;
    let value = "",
      result = "";

    val === "start"
      ? (value = startDateRef.current.value.replace(/\D+/g, ""))
      : (value = endDateRef.current.value.replace(/\D+/g, ""));

    for (let i = 0; i < value.length && i < dateLength; i++) {
      switch (i) {
        case 4:
          result += ".";
          break;
        case 6:
          result += ".";
          break;
        default:
          break;
      }

      result += value[i];
    }

    if (val === "start") {
      startDateRef.current.value = result;
      setStartDate(e.target.value);
    } else {
      endDateRef.current.value = result;
      setEndDate(e.target.value);
    }
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
            <div className={styles.recommendDiv}>
              <div className={styles.recommendBtn} onClick={onClickRecommend}>
                <MdChecklistRtl className={styles.recommendIcon} />
                <span className={styles.recommendSpan}>조합 추천 받기</span>
              </div>
              {recommend && (
                <div className={styles.contents}>
                  <div className={styles.finishBtn}>완료</div>
                  <div className={styles.recommendHr}></div>
                  <div classname={styles.dateContainer}>
                    <span className={styles.startTitle}>시작 날짜</span>
                    <span className={styles.endTitle}>반납 날짜</span>
                    <div className={styles.dateDiv}>
                      <input
                        type="text"
                        className={styles.dateInput}
                        onChange={(e) => startDateChange(e, "start")}
                        value={startDate}
                        ref={startDateRef}
                      />
                      <input
                        type="text"
                        className={styles.dateInput}
                        onChange={(e) => startDateChange(e, "end")}
                        value={endDate}
                        ref={endDateRef}
                      />
                    </div>
                  </div>

                  <div className={styles.categories}>
                    <div className={styles.spanGroup}>
                      <span>카테고리</span>
                      <span>복수 선택 가능</span>
                    </div>
                    <div className={styles.btnGroup}>
                      <button>책상</button>
                      <button>의자</button>
                      <button>팩스기</button>
                      <button>복사기</button>
                      <button>커피머신</button>
                      <button>마우스</button>
                      <button>컴퓨터</button>
                      <button></button>
                    </div>
                    <button>추천 받기</button>
                  </div>
                  <div className={styles.recommendHr}></div>
                  <div className={styles.recommend}>
                    <span>가장 저렴한 게시물을 추천 받아 보세요!</span>
                  </div>
                </div>
              )}
            </div>
            <div className={styles.hr}></div>
            <span className={styles.subTitle}>All Products</span>
          </div>
          <div className={styles.productGroup}>
            {shopList.map((item, index) => (
              <Link to={`/detail/${item.post_id}`} state={{ info: item }}>
                <div className={styles.product} key={index}>
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
