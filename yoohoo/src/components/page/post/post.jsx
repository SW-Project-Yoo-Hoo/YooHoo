import React, { useState, useCallback, useRef } from "react";
import styles from "./post.module.css";
import { Link, NavLink } from "react-router-dom";
import Header from "../../header/header";
import Footer from "../../footer/footer";

const Post = (props) => {
  const [inputs, setInputs] = useState({
    title: "",
    text: "",
  });

  const { title, text } = inputs;

  const changeHandling = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [showImages, setShowImages] = useState([]);

  // 이미지 상대경로 저장
  const imageAddHandling = (e) => {
    const imageLists = e.target.files;
    let imageUrlLists = [...showImages];

    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(currentImageUrl);
    }

    if (imageUrlLists.length > 5) {
      imageUrlLists = imageUrlLists.slice(0, 5);
    }

    setShowImages(imageUrlLists);
  };

  // X버튼 클릭 시 이미지 삭제
  const handleDeleteImage = (id) => {
    setShowImages(showImages.filter((_, index) => index !== id));
  };

  return (
    <div className={styles.container}>
      {/* header */}
      <Header />
      <div className={styles.backGroundIamgeHeader} />

      {/* contents */}
      <div className={styles.postContainer}>
        {/* 게시물 제목 */}
        <div className={styles.title}>
          <span className={styles.titleText}>게시물 제목</span>
          <input
            type="text"
            name="title"
            maxlength="19"
            onChange={changeHandling}
            value={title}
            placeholder="게시물 제목을 입력해주세요(최대 20자)"
            className={styles.titleInput}
          />
        </div>

        {/* 이미지 */}
        <div className={styles.imageEnroll}>
          {/* 글자 */}
          <div className={styles.imageEnrollText}>
            <div className={styles.textMain}>
              <span className={styles.colorHighlight1}>이미지</span>
              <span className={styles.colorMainGreen}> *</span>
            </div>
            <span className={styles.textSub}>최대 5장 첨부 가능</span>
          </div>

          {/* 보더 */}
          <div className={styles.imageEnrollPick}>
            <div className={styles.imagePicked}>
              {showImages.map((image, id) => (
                <div className={styles.imagePickedBord} key={id}>
                  <button onClick={() => handleDeleteImage(id)}>삭제</button>
                  <img
                    className={styles.imagePickedStyle}
                    src={image}
                    alt={`${image}-${id}`}
                  />
                  {/* <Delete onClick={() => handleDeleteImage(id)} /> */}
                </div>
              ))}
            </div>
            <label className={styles.buttonSytle} onChange={imageAddHandling}>
              첨부하기
              <input
                type="file"
                id="imgFile"
                multiple
                accept="image/*"
                className={styles.imagePicker}
              />
            </label>
          </div>
        </div>

        {/* 대여 물품 선택 */}
        <div className={styles.stuff}>
          <div className={styles.imageEnrollText}>
            <div className={styles.textMain}>
              <span className={styles.colorHighlight1}>대여물품</span>
            </div>
            <span className={styles.textSub}>복수 선택 가능</span>
          </div>
          <div className={styles.stuffPick}></div>
        </div>

        {/* 대여 단위, 가격 및 수량 */}
        <div className={styles.deal}>
          {/* 대여단위 */}
          <div className={styles.unit}>
            {/* 제목 */}
            <div className={styles.textMain}>
              <span className={styles.colorHighlight1}>대여단위</span>
              <span className={styles.colorMainGreen}> *</span>
            </div>

            {/* 선 */}
            <div className={styles.line}></div>

            {/* 보더 */}
            <div className={styles.unitPick}></div>
          </div>

          {/* 가격 및 수량 */}
          <div className={styles.priceQuantity}>
            {/* 제목 */}
            <div className={styles.textMain}>
              <span className={styles.colorHighlight1}>가격 및 수량</span>
              <span className={styles.colorMainGreen}> *</span>
            </div>

            {/* 선 */}
            <div className={styles.line}></div>

            {/* 보더 */}
            <div className={styles.priceQuantityPick}>
              <div className={styles.price}></div>
              <div className={styles.quantity}></div>
            </div>
          </div>
        </div>

        {/* 상세 내용 */}
        <div className={styles.detailText}>
          <div className={styles.textMain}>
            <span className={styles.colorHighlight1}>상세내용</span>
            <span className={styles.colorMainGreen}> *</span>
          </div>
          <div className={styles.detailTextFild}></div>
        </div>

        {/* 등록하기 버튼 */}
        <div className={styles.enrollButton}>
          <div className={styles.buttonSytle}>등록하기</div>
        </div>
      </div>

      {/* foot */}
      <div className={styles.bottomContainer}>
        <div className={styles.backGroundIamgeFoot} />
        <Footer />
      </div>
    </div>
  );
};

export default Post;
