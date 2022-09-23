import React, { useState } from "react";
import styles from "./editProfile.module.css";
import { MdPhotoCamera } from "react-icons/md";

const EditProfile = () => {
  const [inputs, setInputs] = useState({
    companyName: "",
    adress: "",
    phone: "",
  });

  const { companyName, adress, phone } = inputs;

  const changeHandling = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  //이미지
  const [showImages, setShowImages] = useState([]);

  // 이미지 상대경로 저장
  const imageAddHandling = (e) => {
    const imageLists = e.target.files;
    let imageUrlLists = [...showImages];

    // for (let i = 0; i < imageLists.length; i++) {
    const currentImageUrl = URL.createObjectURL(imageLists[0]);
    imageUrlLists.push(currentImageUrl);
    // }

    if (imageUrlLists.length > 1) {
      imageUrlLists = imageUrlLists.slice(1, 2);
    }

    setShowImages(imageUrlLists);
  };

  const onChangeImg = (e) => {
    e.preventDefault();

    if (e.target.files) {
      const uploadFile = e.target.files;
      console.log(uploadFile);
    }
  };

  return (
    <div className={styles.container}>
      {/* 프로필 사진 선택 */}
      <div className={styles.photo}>
        {/* 이미지 미리보기 */}
        <div className={styles.showPhoto}>
          {/* 이미지 선택 전  */}
          <div>{/* 사용ㅈ ㅏ원래 이미지 받아오기 */}</div>

          {/* 이미지 선택 후 */}
          {showImages.map((image, id) => (
            <div key={id}>
              {/* 이미지 미리보기 */}
              <img
                className={styles.showPhoto}
                src={image}
                alt={`${image}-${id}`}
              />
            </div>
          ))}
        </div>

        {/* 이미지 선택 */}
        <label className={styles.photoButton} onChange={imageAddHandling}>
          <MdPhotoCamera className={styles.photoButtonIcon} />
          <input
            type="file"
            id="imgFile"
            accept="image/*"
            className={styles.displayNone}
            onChange={onChangeImg}
          />
        </label>
      </div>

      {/* 정보 입력 */}
      <div className={styles.editInfo}>
        {/* 회사명 */}
        <div className={styles.editInfoColumn}>
          <span className={styles.title}>회사명</span>
          <input
            type="text"
            name="companyName"
            onChange={changeHandling}
            value={companyName}
            // placeholder="아이디를 입력해주세요"
            className={styles.input}
          />
        </div>

        {/* 회사주소 */}
        <div className={styles.editInfoColumn}>
          <span className={styles.title}>회사 주소</span>
          <input
            type="text"
            name="adress"
            onChange={changeHandling}
            value={adress}
            // placeholder="아이디를 입력해주세요"
            className={styles.input}
          />
        </div>

        {/* 전화번호 */}
        <div className={styles.editInfoColumn}>
          <span className={styles.title}>연락처</span>
          <input
            type="text"
            name="phone"
            onChange={changeHandling}
            value={phone}
            // placeholder="아이디를 입력해주세요"
            className={styles.input}
          />
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
