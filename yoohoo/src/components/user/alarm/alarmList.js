const AlarmList = [
  {
    id: 2,
    date: "8월 19일",
    image: process.env.PUBLIC_URL + "images/shop/a.jpg",
    title: "거래 요청",
    content: "회원님의 게시물에 거래 요청이 들어왔어요. 거래를 수락해주세요!",
  },

  {
    id: 4,
    date: "8월 20일",
    image: process.env.PUBLIC_URL + "images/shop/a.jpg",
    title: "거래 취소",
    content: "거래가 취소 되었어요. 재요청을 하시겠습니까?",
  },
  {
    id: 1,
    date: "8월 18일",
    image: process.env.PUBLIC_URL + "images/shop/a.jpg",
    title: "반갑습니다!",
    content: "회원님의 다양한 자원을 공유해보세요.",
  },
  {
    id: 5,
    date: "8월 20일",
    image: process.env.PUBLIC_URL + "images/shop/a.jpg",
    title: "거래 요청",
    content: "회원님의 게시물에 거래 요청이 들어왔어요. 거래를 수락해주세요!",
  },
  {
    id: 3,
    date: "8월 19일",
    image: process.env.PUBLIC_URL + "images/shop/a.jpg",
    title: "반납 일정",
    content: "8월 22일 반납 예정이에요. D-7 남았어요 !",
  },
  {
    id: 6,
    date: "8월 23일",
    image: process.env.PUBLIC_URL + "images/shop/a.jpg",
    title: "반납 일정",
    content: "8월 22일 반납 예정이에요. D-7 남았어요 !",
  },
  {
    id: 7,
    date: "8월 21일",
    image: process.env.PUBLIC_URL + "images/shop/a.jpg",
    title: "반납 일정",
    content: "8월 22일 반납 예정이에요. D-7 남았어요 !",
  },
];

AlarmList.sort(function (a, b) {
  if (b.date < a.date) {
    return -1;
  }
});

export default AlarmList;
