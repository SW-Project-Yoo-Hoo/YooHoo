import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import Calendar from "react-calendar";
import styles from "./modalCal.module.css";
import styled from "styled-components";
import moment from "moment";

const ModalCal = ({ modalClose }) => {
  const [date, setDate] = useState(new Date());

  const [startDay, setStartDay] = useState(moment().format("YYYY.MM.DD"));

  const onClick = (value, event) => {
    setStartDay(moment(value).format("YYYY.MM.DD"));
  };

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
                formatMonthYear={(locale, date) =>
                  moment(date).format("YYYY년 M월")
                }
                showFixedNumberOfWeeks={true}
                formatDay={(locale, date) => moment(date).format("D")}
                onChange={setDate}
                value={date}
                selectRange={true}
                onClickDay={(value, event) => onClick}
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
                  {console.log(startDay)}
                  {startDay}
                  {/* {moment(date[0]).format("YYYY.MM.DD")} */}
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
                  <button className={styles.plusBtn}>+1일</button>
                  <button className={styles.plusBtn}>+1주</button>
                  <button className={styles.plusBtn}>+1월</button>
                  <button className={styles.plusBtn}>+1년</button>
                </div>

                <div className={styles.minusBtns}>
                  <button className={styles.minusBtn}>-1일</button>
                  <button className={styles.minusBtn}>-1주</button>
                  <button className={styles.minusBtn}>-1월</button>
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

  /* 추가 */

  .react-calendar__tile--range {
    background-color: #cde1d7;
    border-radius: 0;
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background-color: #cde1d7;
  }

  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: #cde1d7;
  }

  .react-calendar__tile--range {
    height: 1.6667vw;
    background-color: #cde1d7;
    border-radius: 0;
  }

  .react-calendar__tile--rangeStart {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-top-left-radius: 0.6944vw;
    border-bottom-left-radius: 0.6944vw;
    background-color: #cde1d7;
  }

  .react-calendar__tile--rangeEnd {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 0.6944vw;
    border-bottom-right-radius: 0.6944vw;
    background-color: #cde1d7;
  }
`;
