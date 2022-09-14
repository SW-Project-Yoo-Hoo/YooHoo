import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import Calendar from "react-calendar";
import styles from "./modalCal.module.css";
import styled from "styled-components";
import moment from "moment";

const ModalCal = ({ modalClose }) => {
  const [date, setDate] = useState(new Date());

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <button className={styles.modalBtn} onClick={modalClose}>
          <MdClose className={styles.modalBtnIcon} />
        </button>
        <div className={styles.contents}>
          <div className={styles.calendar}>
            <CalendarContainer>
              <Calendar
                calendarType="US"
                locale="en"
                formatDay={(locale, date) => moment(date).format("D")}
                onChange={setDate}
                value={date}
                // selectRange={true}
              />
              {date.length > 0 ? (
                <p className="text-center">
                  <span className="bold">Start:</span> {date[0].toDateString()}
                  &nbsp;|&nbsp;
                  <span className="bold">End:</span> {date[1].toDateString()}
                </p>
              ) : (
                <p className="text-center">
                  <span className="bold">Default selected date:</span>{" "}
                  {date.toDateString()}
                </p>
              )}
            </CalendarContainer>
          </div>

          <div className={styles.selectDate}>
            <div className={styles.start}>
              <p className={styles.title}>시작 날짜</p>
              <div className={styles.dateContainer}>
                <p className={styles.selected}>
                  {moment(date).format("YYYY.MM.DD")}
                </p>
              </div>
            </div>

            <div className={styles.end}>
              <p className={styles.title}>반납 날짜</p>
              <div className={styles.dateContainer}>
                <p className={styles.mean}>반납 날짜를 설정해주세요</p>
              </div>
              <div className={styles.selectBtns}>
                <div className={styles.plusBtns}>
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

const CalendarContainer = styled.div`
  .react-calendar {
    border: 0;
    font-family: "Medium";
  }

  /* ~~~ container styles ~~~ */
  width: 23.8194vw;
  height: 17.2917vw;
  // padding: 10px;

  /* ~~~ navigation styles ~~~ */
  .react-calendar__navigation {
    display: flex;

    /* 2022년 9월*/
    .react-calendar__navigation__label {
      font-weight: bold;
    }

    .react-calendar__navigation__arrow {
      flex-grow: 0.333;
    }
  }

  /* ~~~ label styles ~~~ */
  .react-calendar__month-view__weekdays {
    text-align: center;
    color: #006837;
  }

  /* 요일의 밑줄 제거*/
  abbr[title] {
    text-decoration: none;
  }

  /* ~~~ button styles ~~~ */
  button {
    color: highlight2;
    margin: 3px;
    border: 0;
    border-radius: 3px;
    padding: 5px 0;
    background-color: white;
    cursor: pointer;

    &:hover {
      /* 캘린더 색깔*/
      background-color: #cde1d7;
    }

    /* 눌렀을 때*/
    &:active {
      /* 캘린더 색깔*/
      background-color: #cde1d7;
    }
  }

  /* ~~~ day grid styles ~~~ */
  .react-calendar__month-view__days {
    display: grid !important;
    grid-template-columns: 14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.2%;

    .react-calendar__tile {
      max-width: initial !important;
    }
  }

  /* ~~~ neighboring month & weekend styles ~~~ */
  .react-calendar__month-view__days__day--neighboringMonth {
    // opacity: 0.7;
  }

  /* 주말 색깔 */
  .react-calendar__month-view__days__day--weekend {
    color: highlight2;
  }

  /* ~~~ active day styles ~~~ */
  .react-calendar__tile--range {
    // box-shadow: 0 0 6px 2px black;
  }

  /* ~~~ other view styles ~~~ */
  .react-calendar__year-view__months,
  .react-calendar__decade-view__years,
  .react-calendar__century-view__decades {
    display: grid !important;
    grid-template-columns: 20% 20% 20% 20% 20%;

    &.react-calendar__year-view__months {
      grid-template-columns: 33.3% 33.3% 33.3%;
    }

    .react-calendar__tile {
      max-width: initial !important;
    }
  }
`;
