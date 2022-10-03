import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { BiPlus, BiMinus } from "react-icons/bi";
import styles from "./shopDetail.module.css";
import styled from "styled-components";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import ModalCal from "./modalCal";
import ShopImg from "./shopImg";
import moment from "moment";
import axios from "axios";
import { useLocation } from "react-router-dom";

const ShopDetail = (props) => {
  const REACT_PUBLIC_URL = "http://localhost:3000/";

  const [modalOpen, setModalOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const [startDate, setStartDay] = useState("");
  const [endDate, setEndDay] = useState("");
  const [count, setCount] = useState(1);
  const [dateCnt, setDateCnt] = useState(0); //일, 주, 월, 년 에 따라
  const [price, setPrice] = useState(0);

  const [productItem, setProductItem] = useState("");
  const [photoGroup, setPhotoGroup] = useState("");
  const [currentItem, setCurrentItem] = useState("");

  /** 처음 렌더링 됐을 때, 현재 보여지는 사진 check */
  const [isPicLoaded, setIsPicLoaded] = useState(false);

  /**===================== */
  /* 추가 기능 */
  const [wish, setWish] = useState(false); // 찜하기 버튼
  const [wishItem, setWishItem] = useState(ShopImg); // 살펴보기 찜
  /**===================== */

  /* 해당 아이템 */
  const location = useLocation();
  let item = location.state.info;

  /* 페이지 이동 시 스크롤 상단으로 */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* 백엔드에서 선택한 게시물 가져오기 */
  useEffect(() => {
    const getItem = () => {
      axios
        .get(`/posts/${item.post_id}`)
        .then((res) => {
          setProductItem(res.data.data);
          setPhotoGroup(
            res.data.data.photos.map((item, index) => ({
              id: index + 1,
              item,
              show: false,
            }))
          );
          setCurrentItem(res.data.data.photos[0]);
          setIsLoaded(true);
        })
        .catch((error) => console.log(error));
    };
    getItem();
  }, []);

  useEffect(() => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffDate = start.getTime() - end.getTime();

    // 일 차이
    const val = Math.floor(Math.abs(diffDate / (1000 * 60 * 60 * 24))) + 1;

    // 주 차이
    const val2 = Math.floor(Math.abs(diffDate / (1000 * 60 * 60 * 24 * 7)));

    // 월 차이
    const val3 = Math.floor(Math.abs(diffDate / (1000 * 60 * 60 * 24 * 30)));

    // 연도 차이
    const val4 = Math.floor(Math.abs(diffDate / (1000 * 60 * 60 * 24 * 365)));

    setDateCnt(val);
  }, [startDate, endDate]);

  useEffect(() => {
    setPrice(dateCnt * count * productItem.rental_price);
  }, [dateCnt, count]);

  const modalClose = () => {
    setModalOpen(!modalOpen);
  };

  /* ================================ */
  /* 캘린더 시작, 반납 날짜 설정*/
  const changeStart = (value) => {
    setStartDay(value);
  };

  const changeEnd = (value) => {
    setEndDay(value);
  };

  /* ================================ */
  /* 수량 버튼*/
  const plusBtn = () => {
    if (count >= productItem.quantity) {
      setCount(productItem.quantity);
    } else setCount(count + 1);
  };

  const minusBtn = () => {
    if (count === 1) {
      setCount(1);
    } else setCount(count - 1);
  };

  /* ================================ */
  /* 살펴보기 -> 왼쪽, 오른쪽 버튼 */

  function Left({ children, onClick }) {
    return (
      <div className={styles.lefttBtn}>
        <MdArrowBack onClick={onClick}>{children}</MdArrowBack>
      </div>
    );
  }

  function LeftArrow() {
    const { scrollPrev } = React.useContext(VisibilityContext);
    return <Left onClick={() => scrollPrev()} />;
  }

  function Right({ children, onClick }) {
    return (
      <div className={styles.rightBtn}>
        <MdArrowForward onClick={onClick}>{children}</MdArrowForward>
      </div>
    );
  }

  function RightArrow() {
    const { scrollNext } = React.useContext(VisibilityContext);
    return <Right onClick={() => scrollNext()} />;
  }

  /* ================================ */
  /* 찜하기 버튼 */
  const onClickWishBtn = () => {
    setWish((wish) => !wish);
  };

  /* 살펴보기 찜하기 버튼 */
  function onClickWishBtn2(id, prevWish) {
    setWishItem(
      wishItem.map((it) => (it.id === id ? { ...it, wish: !prevWish } : it))
    );
  }

  /* ================================ */
  /* 물품 사진 */

  /** 크게 보여지는 사진 */
  const onView = (id) => {
    setCurrentItem(photoGroup.find((item) => item.id === id));
  };

  function onClickPicture(id) {
    onView(id);

    /** 처음 렌더링 이후 다른 사진 클릭 했을 때 */
    if (photoGroup[0].show === true) {
      photoGroup[0].show = false;
      setIsPicLoaded(true);
    }

    for (let value of photoGroup) {
      if (value.id !== id) {
        value.show = false;
      } else {
        value.show = true;
      }
    }
  }

  /* ================================ */
  return (
    <>
      {isLoaded && (
        <>
          <Header />
          <div className={styles.background}>
            <img
              className={styles.headerImg}
              src={REACT_PUBLIC_URL + "images/headerBackground.png"}
              alt="Header"
            />
            <div className={styles.container}>
              <div className={styles.productInfo}>
                {/* 사진, 회사 소개, 물품 소개, 살펴보기 */}
                <div className={styles.imgGroup}>
                  <div>
                    {currentItem.item ? (
                      <img
                        className={styles.img1}
                        src={
                          REACT_PUBLIC_URL +
                          "productList/" +
                          currentItem.item.dir
                        }
                        alt="Product"
                      />
                    ) : (
                      <img
                        className={styles.img1}
                        src={
                          REACT_PUBLIC_URL + "productList/" + currentItem.dir
                        }
                        alt="Product"
                      />
                    )}
                    <ul className={styles.imgBtn}>
                      {photoGroup &&
                        (!isPicLoaded && (photoGroup[0].show = true),
                        photoGroup.map((item, index) => (
                          <li onClick={(event) => onClickPicture(item.id)}>
                            <img
                              className={
                                item.show ? styles.nowBtn : styles.imgBtnList
                              }
                              src={
                                REACT_PUBLIC_URL +
                                "productList/" +
                                item.item.dir
                              }
                              alt="Product"
                            />
                            {console.log("item.show", item.show)}
                          </li>
                        )))}
                    </ul>
                  </div>
                </div>

                <div className={styles.company}>
                  <img
                    className={styles.companyImg}
                    src={REACT_PUBLIC_URL + "images/about/ys.svg"}
                    alt="Company"
                  />
                  <div className={styles.companyInfo}>
                    <p className={styles.companyName}>{productItem.company}</p>
                    <p className={styles.companyAddress}>
                      {productItem.address}
                    </p>
                  </div>
                </div>

                <div className={styles.hr}></div>

                <div>
                  <p className={styles.descriptionTitle}>물품 소개</p>
                  <div className={styles.descriptionContent}>
                    {productItem.explain}
                  </div>
                </div>

                <div className={styles.hr}></div>

                <div>
                  <p className={styles.lookTitle}>살펴보기</p>
                  <LookProducts>
                    <div className={styles.lookProducts}>
                      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
                        {/* 추가 ) 현재 게시물과 다른것들만 보여주기 */}
                        {ShopImg.map((item) => (
                          <div id={item.id} className={styles.products1}>
                            <button className={styles.otherProductsBtn}>
                              <img
                                className={styles.otherProductsImg}
                                src={REACT_PUBLIC_URL + item.image}
                                alt="Product"
                              />
                            </button>
                            <div className={styles.info}>
                              <p className={styles.otherProductsTitle}>
                                {item.title}
                              </p>
                              <div className={styles.info2}>
                                <p className={styles.otherProductsPrice}>
                                  {item.price}
                                </p>
                                <div
                                  className={
                                    wishItem[item.id - 1].wish
                                      ? styles.selectWishIcon
                                      : styles.unselectWishIcon
                                  }
                                  onClick={() =>
                                    onClickWishBtn2(
                                      item.id,
                                      wishItem[item.id - 1].wish
                                    )
                                  }
                                >
                                  {wishItem[item.id - 1].wish ? (
                                    <MdFavorite />
                                  ) : (
                                    <MdFavoriteBorder />
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </ScrollMenu>
                    </div>
                  </LookProducts>
                </div>
              </div>

              <div className={styles.productInfo2}>
                {/* 물품 제목, 대여 기간, 거래하기 버튼 */}
                <p className={styles.title}>{productItem.title}</p>
                <div className={styles.categoryGroup}>
                  <div className={styles.category}>#책상</div>
                  <div className={styles.category}>#의자</div>
                </div>
                <div className={styles.hr2}></div>
                <p className={styles.price}>
                  {productItem.rental_price.toLocaleString("ko-KR")}
                  원/
                  {productItem.rental_unit}
                </p>

                <div>
                  <div className={styles.period}>
                    <p className={styles.periodTitle}>대여 기간</p>
                    <div className={styles.helpImg}>
                      <img
                        className={styles.helpImg}
                        src={REACT_PUBLIC_URL + "images/shopDetail/info.png"}
                        alt="Help"
                      />
                      <div className={styles.helpContainer}>
                        <p className={styles.helpContent}>
                          대여 기간은 '{productItem.rental_unit}' 단위로만
                        </p>
                        <p className={styles.helpContent}>
                          설정할 수 있습니다.
                        </p>
                      </div>
                    </div>
                  </div>
                  <button
                    className={
                      startDate === "" || endDate === ""
                        ? styles.periodBtn
                        : styles.selectPeriodBtn
                    }
                    onClick={modalClose}
                  >
                    {startDate === "" || endDate === ""
                      ? "대여 시작 날짜와 반납 날짜를 선택해주세요."
                      : moment(`${startDate}`).format("YYYY.MM.DD") +
                        "~" +
                        moment(`${endDate}`).format("YYYY.MM.DD")}
                  </button>
                  {modalOpen && (
                    <ModalCal
                      modalClose={modalClose}
                      changeStart={changeStart}
                      changeEnd={changeEnd}
                    />
                  )}
                </div>
                <div>
                  <p className={styles.countTitle}>수량</p>
                  <div className={styles.countBtns}>
                    <button className={styles.minusBtn}>
                      <BiMinus className={styles.btnIcon} onClick={minusBtn} />
                    </button>
                    <p className={styles.countNum}>{count}</p>
                    <button className={styles.plusBtn}>
                      <BiPlus className={styles.btnIcon} onClick={plusBtn} />
                    </button>
                  </div>
                </div>
                <div className={styles.hr2}></div>

                <div className={styles.totalCountInfo}>
                  <span className={styles.totalCountTitle}>주문 수량</span>
                  <p className={styles.totalCount}>{count} 개</p>
                </div>

                <div className={styles.totalPriceInfo}>
                  <span className={styles.totalPriceTitle}>총 금액</span>
                  <p className={styles.totalPrice}>
                    {isNaN(price) ? " " : price.toLocaleString("ko-KR")} 원
                  </p>
                </div>

                <div className={styles.btns}>
                  <button className={styles.tradeBtn}>거래하기</button>
                  <button className={styles.wishBtn} onClick={onClickWishBtn}>
                    <div className={styles.wishContent}>
                      {wish ? (
                        <MdFavorite className={styles.wishIcon2} />
                      ) : (
                        <MdFavoriteBorder className={styles.wishIcon2} />
                      )}
                      <span>찜하기</span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Footer */}
              <div className={styles.footer}>
                <img
                  className={styles.footerImg}
                  src={REACT_PUBLIC_URL + "images/footBackground.png"}
                  alt="Footer"
                />
                <Footer />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ShopDetail;

const LookProducts = styled.div`
  .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar {
    display: none;
  }
`;
