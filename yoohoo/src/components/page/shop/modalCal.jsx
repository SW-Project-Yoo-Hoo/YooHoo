import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import Calendar from "react-calendar";
import styles from "./modalCal.module.css";
import styled from "styled-components";
import moment from "moment";

const ModalCal = ({ modalClose }) => {
  const [date, setDate] = useState(new Date());

  const [startDay, setStartDay] = useState("");
  const [endDay, setEndDay] = useState("");
  const [tmpDay, setTmpDay] = useState("");

  /* 버튼 클릭 했는지, 안했는지*/
  const [startDayClick, setStartDayClick] = useState(false);
  const [btnClick, setBtnClick] = useState(false);

  /* 대여 단위 +, - 버튼 클릭시*/
  function onClickDayBtn(value, motion) {
    let newDay = new Date(endDay);

    if (value === "day") {
      if (motion === "plus") {
        newDay.setDate(newDay.getDate() + 1);
      } else {
        newDay.setDate(newDay.getDate() - 1);
      }
    } else if (value === "week") {
      if (motion === "plus") {
        newDay.setDate(newDay.getDate() + 7);
      } else {
        newDay.setDate(newDay.getDate() - 7);
      }
    } else if (value === "month") {
      if (motion === "plus") {
        newDay.setMonth(newDay.getMonth() + 1);
      } else {
        newDay.setMonth(newDay.getMonth() - 1);
      }
    } else {
      console.log(newDay.getFullYear());
      if (motion === "plus") {
        newDay.setFullYear(newDay.getFullYear() + 1);
      } else {
        newDay.setFullYear(newDay.getFullYear() - 1);
      }
    }

    let start = new Date(startDay);
    if (newDay <= start) {
      newDay = startDay;
    }

    setEndDay(moment(newDay).format("YYYY.MM.DD"));
    setBtnClick(true);
  }

  /* 시작 날짜 선택시 해당 날짜에 색깔 추가*/
  function onClickStartDay(value, event) {
    let selectDay = moment(value).format("YYYY.MM.DD");

    if (startDay !== selectDay) {
      if (tmpDay.toString().includes("rangeStartDate")) {
        tmpDay.remove("rangeStartDate");
      }
    }
    event.target.classList.add("rangeStartDate");

    setStartDay(selectDay);
    setEndDay(selectDay);
    setTmpDay(event.target.classList);
    setStartDayClick(true);
  }

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
                showFixedNumberOfWeeks={true}
                formatDay={(locale, date) => moment(date).format("D")}
                onChange={setDate}
                value={date}
                onClickDay={(value, event) => onClickStartDay(value, event)}
                formatMonthYear={(locale, date) =>
                  moment(date).format("YYYY년 M월")
                }

                // selectRange={true}
              />
            </CalendarContainer>
          </div>

          <div className={styles.selectDate}>
            <div className={styles.start}>
              <p className={styles.title}>시작 날짜</p>
              <div className={styles.dateContainer}>
                <p
                  className={
                    startDayClick ? styles.selected : styles.unselected
                  }
                >
                  {startDayClick ? startDay : "시작 날짜를 설정해주세요"}
                </p>
              </div>
            </div>

            <div className={styles.end}>
              <p className={styles.title}>반납 날짜</p>
              <div className={styles.dateContainer}>
                <p className={btnClick ? styles.mean : styles.unselected}>
                  {btnClick ? endDay : "반납 날짜를 설정해주세요"}
                </p>
              </div>
              <div className={styles.selectBtns}>
                <div className={styles.plusBtns}>
                  <button
                    className={styles.plusBtn}
                    onClick={(e) => onClickDayBtn("day", "plus")}
                  >
                    +1일
                  </button>
                  <button
                    className={styles.plusBtn}
                    onClick={(e) => onClickDayBtn("week", "plus")}
                  >
                    +1주
                  </button>
                  <button
                    className={styles.plusBtn}
                    onClick={(e) => onClickDayBtn("month", "plus")}
                  >
                    +1월
                  </button>
                  <button
                    className={styles.plusBtn}
                    onClick={(e) => onClickDayBtn("year", "plus")}
                  >
                    +1년
                  </button>
                </div>

                <div className={styles.minusBtns}>
                  <button
                    className={styles.minusBtn}
                    onClick={(e) => onClickDayBtn("day", "minus")}
                  >
                    -1일
                  </button>
                  <button
                    className={styles.minusBtn}
                    onClick={(e) => onClickDayBtn("week", "minus")}
                  >
                    -1주
                  </button>
                  <button
                    className={styles.minusBtn}
                    onClick={(e) => onClickDayBtn("month", "minus")}
                  >
                    -1월
                  </button>
                  <button
                    className={styles.minusBtn}
                    onClick={(e) => onClickDayBtn("year", "minus")}
                  >
                    -1년
                  </button>
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

  .react-calendar__tile--range {
    // background-color: #cde1d7;
    // border-radius: 0;
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    //background-color: #cde1d7;
  }

  .react-calendar--selectRange .react-calendar__tile--hover {
    //background-color: #cde1d7;
  }

  .react-calendar__tile--range {
    height: 1.6667vw;
    // background-color: #cde1d7;
    // border-radius: 0;
  }

  .react-calendar__tile--rangeStart {
    // border-top-right-radius: 0;
    // border-bottom-right-radius: 0;
    // border-top-left-radius: 0.6944vw;
    // border-bottom-left-radius: 0.6944vw;
    // background-color: #cde1d7;
  }

  .react-calendar__tile--rangeEnd {
    //background-color: #cde1d7;
    // border-top-left-radius: 0;
    // border-bottom-left-radius: 0;
    // border-top-right-radius: 0.6944vw;
    // border-bottom-right-radius: 0.6944vw;
  }

  .rangeStartDate {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-top-left-radius: 0.6944vw;
    border-bottom-left-radius: 0.6944vw;
    background-color: #cde1d7;
    height:100%;
    width:100%;
    display:flex;
    text-align: center;      
    justify-content: center;
`;
