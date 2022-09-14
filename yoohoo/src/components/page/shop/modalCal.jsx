import React, { useState } from "react";
import styles from "./modalCal.module.css";
import Calendar from "react-calendar";
import { MdClose } from "react-icons/md";
import "../../../../node_modules/react-calendar/dist/Calendar.css";

const ModalCal = ({ modalClose }) => {
  const [value, onChange] = useState(new Date());

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <button className={styles.modalBtn} onClick={modalClose}>
          <MdClose className={styles.modalBtnIcon} />
        </button>
        <div className={styles.contents}>
          <div className={styles.calendar}>
            <Calendar onChange={onChange} value={value} />
          </div>

          <div className={styles.selectDate}>
            <div className={styles.start}>
              <p className={styles.title}>시작 날짜</p>
              <div className={styles.dateContainer}>
                <p className={styles.mean}>시작 날짜를 설정해주세요</p>
              </div>
            </div>

            <div className={styles.end}>
              <p className={styles.title}>반납 날짜</p>
              <div className={styles.dateContainer}>
                <p className={styles.mean}>반납 날짜를 설정해주세요</p>
              </div>
              <div className={styles.selectBtns}>
                <div clssName={styles.plusBtns}>
                  <button className={styles.plusBtn}>+1일</button>{" "}
                  <button className={styles.plusBtn}>+1주</button>{" "}
                  <button className={styles.plusBtn}>+1월</button>{" "}
                  <button className={styles.plusBtn}>+1년</button>
                </div>

                <div clssName={styles.minusBtns}>
                  <button className={styles.minusBtn}>-1일</button>{" "}
                  <button className={styles.minusBtn}>-1주</button>{" "}
                  <button className={styles.minusBtn}>-1월</button>{" "}
                  <button className={styles.minusBtn}>-1년</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className={styles.finishBtn} onClick={modalClose}>
          완료
        </button>
      </div>
    </div>
  );
};

export default ModalCal;
