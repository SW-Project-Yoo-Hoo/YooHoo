import React, { useState, useLayoutEffect } from "react";
import { MdClose } from "react-icons/md";
import Calendar from "react-calendar";
import styles from "./modalCal.module.css";
import styled from "styled-components";
import moment from "moment";

const ModalCal = ({ modalClose, changeStart, changeEnd }) => {
  const [date, setDate] = useState("");
  const [startDay, setStartDay] = useState("");
  const [endDay, setEndDay] = useState("");

  /* 버튼 클릭 했는지, 안했는지*/
  const [startDayClick, setStartDayClick] = useState(false);
  const [endDayClick, setEndDayClick] = useState(false);

  const [valCheck, setValCheck] = useState("");

  function onClickDay(value) {
    /* 시작 날짜 안 눌렀을 때 */
    if (!startDayClick && !endDayClick) {
      setDate(value);
      setStartDay(value);
      setStartDayClick((startDayClick) => !startDayClick);
    } else if (startDayClick && !endDayClick) {
      /* 시작 날짜 누르고, 반납 날짜 안 눌렀을 때 */
      let tmp1 = new Date(value);
      let tmp2 = new Date(startDay);
      if (tmp1 >= tmp2) {
        setEndDay(value);
      } else {
        // 시작 날짜보다 더 큰 날짜를 먼저 선택했을 때
        setStartDay(value);
        setEndDay(startDay);
      }
      setStartDayClick((startDayClick) => !startDayClick);
    } else if (startDayClick && endDayClick) {
      /* 시작, 반납 둘 다 눌렀을 때 */
      setStartDayClick((startDayClick) => !startDayClick);
      setEndDayClick((endDayClick) => !endDayClick);
      setDate("");
    }
  }

  useLayoutEffect(() => {
    const start = new Date(startDay);
    const end = new Date(endDay);
    const diffDate = start.getTime() - end.getTime();

    // 일 차이
    const val = Math.floor(Math.abs(diffDate / (1000 * 60 * 60 * 24))) + 1;

    // 주 차이
    const val2 = Math.floor(Math.abs(diffDate / (1000 * 60 * 60 * 24 * 7)));

    // 월 차이
    const val3 = Math.floor(Math.abs(diffDate / (1000 * 60 * 60 * 24 * 30)));

    // 연도 차이
    const val4 = Math.floor(Math.abs(diffDate / (1000 * 60 * 60 * 24 * 365)));

    if (val % 7 === 0) {
      // 주 단위 일 때
      setValCheck("");
    } else {
      setValCheck("대여 단위를 확인 해 주세요\n" + val + "일 선택");
    }
  }, [startDay, endDay]);

  function closeFunc(kind) {
    /* 오른쪽 상단 x를 눌렀을 때 */
    if (kind === "close") {
      changeStart("");
      changeEnd("");
      modalClose();
    } else if (kind === "finish") {
      /* 완료 버튼을 눌렀을 때 */
      changeStart(startDay);
      changeEnd(endDay);

      if (valCheck === "") {
        modalClose();
      } else {
        changeStart("");
        changeEnd("");
      }
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <button className={styles.modalBtn} onClick={() => closeFunc("close")}>
          <MdClose className={styles.modalBtnIcon} />
        </button>
        <div className={styles.contents}>
          <div className={styles.calendar}>
            <CalendarContainer>
              <Calendar
                calendarType="US"
                locale="en"
                value={date}
                onChange={(value) => setDate(value)}
                showFixedNumberOfWeeks={true}
                formatDay={(locale, date) => moment(date).format("D")}
                formatMonthYear={(locale, date) =>
                  moment(date).format("YYYY년 M월")
                }
                selectRange={true}
                minDate={new Date()}
                onClickDay={(value) => onClickDay(value)}
              />
            </CalendarContainer>
          </div>

          <div className={styles.selectDate}>
            <div className={styles.start}>
              <p className={styles.title}>시작 날짜</p>
              <div className={styles.dateContainer}>
                <p
                  className={
                    startDay !== "" ? styles.selected : styles.unselected
                  }
                >
                  {startDay !== ""
                    ? moment(startDay).format("YYYY.MM.DD")
                    : "시작 날짜를 설정해주세요"}
                </p>
              </div>
            </div>
            <div className={styles.end}>
              <p className={styles.title}>반납 날짜</p>
              <div className={styles.dateContainer}>
                <p className={endDay !== "" ? styles.mean : styles.unselected}>
                  {date.length === 2
                    ? moment(endDay).format("YYYY.MM.DD")
                    : "반납 날짜를 설정해주세요"}
                </p>
              </div>
            </div>
            <div className={styles.warning}>
              <p className={styles.warning}>
                {valCheck === "" || date.length !== 2 ? "" : valCheck}
              </p>
            </div>
          </div>
        </div>

        <button
          className={styles.finishBtn}
          onClick={() => closeFunc("finish")}
        >
          완료
        </button>
      </div>
    </div>
  );
};

export default ModalCal;

const CalendarContainer = styled.div`
  .react-calendar {
    width: 23.8194vw;
    height: 19.6528vw;
    border: 0;
    font-family: "Medium";
  }

  /* ~~~ container styles ~~~ */
  width: 23.8194vw;
  height: 19.6528vw;
  // padding: 10px;

  /* ~~~ navigation styles ~~~ */
  .react-calendar__navigation {
    display: flex;
    border-bottom: 0.0694vw solid #e6e6e6;
    margin-bottom: 0.625vw;

    /* 2022년 9월*/
    .react-calendar__navigation__label {
      font-size: 1.25vw;
      font-family: "Medium";
      padding: 0;
      margin: 0 0 1.1806vw 0;
    }

    .react-calendar__navigation__arrow {
      flex-grow: 0.333;
      padding: 0;
      margin: 0 0 1.1806vw 0;
      font-size: 1.1111vw;
    }
  }

  /* ~~~ label styles ~~~ */
  .react-calendar__month-view__weekdays {
    text-align: center;
    color: #006837;
    font-size: 0.9028vw;
  }

  /* 요일의 밑줄 제거*/
  abbr[title] {
    text-decoration: none;
    text-transform: uppercase;
  }

  /* ~~~ button styles ~~~ */
  button {
    color: black;
    margin: 3px;
    border: 0;
    border-radius: 3px;
    padding: 5px 0;
    background-color: white;
    cursor: pointer;
    font-size: 0.7639vw;
    font-family: "Medium";
  }

  /* ~~~ day grid styles ~~~ */
  .react-calendar__month-view__days {
    height: 13.5417vw;
    display: grid !important;
    grid-template-columns: 14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.2%;
    grid-template-rows: 18.4% 18.4% 18.4% 18.4% 18.4% 18.4%;
    margin-top: 1.1806vw;

    .react-calendar__tile {
      max-width: initial !important;
      padding: 0;
      margin: 0;
      display: flex;
      justify-content: center;
      padding-top: 0.2472vw;
    }
  }

  /* ~~~ neighboring month & weekend styles ~~~ */
  .react-calendar__month-view__days__day--neighboringMonth {
    // opacity: 0.7;
  }

  /* 주말 색깔 */
  .react-calendar__month-view__days__day--weekend {
    color: black;
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    color: #acacac;
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

  /* 추가 */

  .react-calendar__tile--now {
    border: 1px solid #cde1d7;
    border-radius: 0.6944vw;
    height: 1.6667vw;
  }

  .react-calendar__tile--range {
    height: 1.6667vw;
    background-color: #cde1d7;
    border-radius: 0;
  }

  .react-calendar__tile--rangeStart {
    border-top-left-radius: 0.6944vw;
    border-bottom-left-radius: 0.6944vw;
    background-color: #cde1d7;
  }

  .react-calendar__tile--rangeEnd {
    border-top-right-radius: 0.6944vw;
    border-bottom-right-radius: 0.6944vw;
    background-color: #cde1d7;
  }
`;
