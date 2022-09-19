import React, { useState, useEffect } from "react";
import Footer from "../../footer/footer";
import styles from "./shopDetail.module.css";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { BiPlus, BiMinus } from "react-icons/bi";
import Header from "../../header/header";
import ModalCal from "./modalCal";
import ShowImg from "./showImg/showImg";

const ShopDetail = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const [startDate, setStartDay] = useState("");
  const [endDate, setEndDay] = useState("");
  const [count, setCount] = useState(1);
  const [dateCnt, setDateCnt] = useState(0); //일, 주 , 월, 년 에 따라
  const [price, setprice] = useState(0);

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
    setprice(dateCnt * count);
    // setprice(dateCnt * count * price);
  }, [dateCnt, count]);

  const modalClose = () => {
    setModalOpen(!modalOpen);
  };

  const changeStart = (value) => {
    setStartDay(value);
  };

  const changeEnd = (value) => {
    setEndDay(value);
  };

  const plusBtn = () => {
    setCount(count + 1);
  };

  const minusBtn = () => {
    if (count === 1) {
      setCount(1);
    } else setCount(count - 1);
  };

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
          <div className={styles.productInfo}>
            {/* 사진, 회사 소개, 물품 소개, 살펴보기 */}

            <ShowImg />

            <div className={styles.company}>
              <img
                className={styles.companyImg}
                src={process.env.PUBLIC_URL + "images/about/ys.svg"}
                alt="Company"
              />
              <div className={styles.companyInfo}>
                <p className={styles.companyName}>YooHoo Company</p>
                <p className={styles.companyAddress}>사하구 하단동 510-6</p>
              </div>
            </div>

            <div className={styles.hr}></div>

            <div>
              <p className={styles.descriptionTitle}>물품 소개</p>
              <div className={styles.descriptionContent}> 설명</div>
            </div>

            <div className={styles.hr}></div>

            <div>
              <p className={styles.lookTitle}>살펴보기</p>
              <div className={styles.lookProducts}>
                <div className={styles.products1}>
                  <button className={styles.otherProductsBtn}>
                    <img
                      className={styles.otherProductsImg}
                      src={process.env.PUBLIC_URL + "images/shop/a.jpg"}
                      alt="Product"
                    />
                  </button>
                  <div className={styles.info}>
                    <p className={styles.otherProductsTitle}>
                      일이삼사오육칠팔구십일이삼사오육칠팔구십
                    </p>
                    <div className={styles.info2}>
                      <p className={styles.otherProductsPrice}>Price</p>
                      <MdFavoriteBorder className={styles.wishIcon} />
                    </div>
                  </div>
                </div>

                <div className={styles.products1}>
                  <button className={styles.otherProductsBtn}>
                    <img
                      className={styles.otherProductsImg}
                      src={process.env.PUBLIC_URL + "images/shop/a.jpg"}
                      alt="Product"
                    />
                  </button>
                  <div className={styles.info}>
                    <p className={styles.otherProductsTitle}>
                      일이삼사오육칠팔구십일이삼사오육칠팔구십
                    </p>
                    <div className={styles.info2}>
                      <p className={styles.otherProductsPrice}>Price</p>
                      <MdFavoriteBorder className={styles.wishIcon} />
                    </div>
                  </div>
                </div>

                <div className={styles.products1}>
                  <button className={styles.otherProductsBtn}>
                    <img
                      className={styles.otherProductsImg}
                      src={process.env.PUBLIC_URL + "images/shop/a.jpg"}
                      alt="Product"
                    />
                  </button>
                  <div className={styles.info}>
                    <p className={styles.otherProductsTitle}>
                      일이삼사오육칠팔구십일
                    </p>
                    <div className={styles.info2}>
                      <p className={styles.otherProductsPrice}>Price</p>
                      <MdFavoriteBorder className={styles.wishIcon} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.productInfo2}>
            {/* 물품 제목, 대여 기간, 거래하기 버튼 */}
            <p className={styles.title}>Title</p>
            <div className={styles.categoryGroup}>
              <div className={styles.category}>#책상</div>
              <div className={styles.category}>#의자</div>
            </div>
            <div className={styles.hr2}></div>
            <p className={styles.price}>가격</p>

            <div>
              <div className={styles.period}>
                <p className={styles.periodTitle}>대여 기간</p>
                <div className={styles.helpImg}>
                  <img
                    className={styles.helpImg}
                    src={process.env.PUBLIC_URL + "images/shopDetail/info.png"}
                    alt="Help"
                  />
                  <div className={styles.helpContainer}>
                    <p className={styles.helpContent}>
                      대여 기간은 주 단위로만
                    </p>
                    <p className={styles.helpContent}>설정할 수 있습니다.</p>
                  </div>
                </div>
              </div>
              <button className={styles.periodBtn} onClick={modalClose}>
                {startDate === ""
                  ? " 대여 시작 날짜와 반납 날짜를 선택해주세요."
                  : `${startDate}~${endDate}`}
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
                {console.log("price", price)}
                {isNaN(price) ? " " : `${price}`} 원
              </p>
            </div>

            <div className={styles.btns}>
              <button className={styles.tradeBtn}>거래하기</button>
              <button className={styles.wishBtn}>
                <div className={styles.wishContent}>
                  <MdFavoriteBorder className={styles.wishIcon2} />
                  <span>찜하기</span>
                </div>
              </button>
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
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ShopDetail;
