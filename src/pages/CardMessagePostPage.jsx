import React, { useState } from 'react';
import TextInputField from 'components/textfield/TextInputField';
import TextDropdownField from 'components/textfield/TextDropdownField';
import Button from 'components/Button';
import styles from 'pages/CardMessagePostPage.module.scss';
import DefaultProfileIcon from 'assets/images/ic_person.svg';
import ToastEditor from 'components/ToastEditor';

function CardMessagePostPage() {
  const [sender, setSender] = useState('');
  const [relationship, setRelationship] = useState('');
  const [font, setFont] = useState('');
  const [message, setMessage] = useState('');
  const relationshipOptions = ['친구', '지인', '동료', '가족'];
  const fontOptions = [
    'Noto Sans',
    'Pretendard',
    '나눔명조',
    '나눔손글씨 손편지체',
  ];

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = {
      sender,
      relationship,
      message,
      font,
    };
    console.log(formData);
    //api 추가
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleFormSubmit}>
        <div className={styles.wrapper}>
          <label className={styles.label} htmlFor='nameInput'>
            From.
          </label>
          <TextInputField
            type='text'
            id='nameInput'
            name='sender'
            value={sender}
            onChange={(e) => setSender(e.target.value)}
          >
            이름을 입력해 주세요.
          </TextInputField>
        </div>
        <div className={styles.wrapper}>
          <label className={styles.label} htmlFor='profileSelect'>
            프로필 이미지
          </label>
          <img
            src={DefaultProfileIcon}
            alt='프로필 이미지'
            width='20px'
            height='20px'
          />
        </div>
        <div className={styles.wrapper}>
          <label className={styles.label} htmlFor=''>
            상대와의 관계
          </label>
          <TextDropdownField
            options={relationshipOptions}
            onChangeOptions={setRelationship}
          />
        </div>
        <div className={styles.wrapper}>
          <label className={styles.label}>내용을 입력해 주세요</label>
          <ToastEditor body={message} setBody={setMessage} />
        </div>
        <div className={styles.wrapper}>
          <label className={styles.label}>폰트 선택</label>
          <TextDropdownField options={fontOptions} onChangeOptions={setFont} />
        </div>
        <Button type='submit' order='primary' size='56'>
          생성하기
        </Button>
      </form>
    </div>
  );
}

export default CardMessagePostPage;
