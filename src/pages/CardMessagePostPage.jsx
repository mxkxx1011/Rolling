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

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = {
      sender,
      relationship,
      font,
      message,
    };
    console.log(formData);
    // 폼 데이터를 서버로 전송하는 로직을 추가하세요
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
          <img src={DefaultProfileIcon} alt='profile' width={'20px'} />
        </div>
        <div className={styles.wrapper}>
          <label className={styles.label} htmlFor=''>
            상대와의 관계
          </label>
          <TextDropdownField
            value={relationship}
            onChange={(e) => setRelationship(e.target.value)}
          >
            {/* 옵션을 추가하세요 */}
          </TextDropdownField>
        </div>
        <div className={styles.wrapper}>
          <label className={styles.label}>내용을 입력해 주세요</label>
          <ToastEditor body={message} setBody={setMessage} />
        </div>
        <div className={styles.wrapper}>
          <label className={styles.label}>폰트 선택</label>
          <TextDropdownField
            value={font}
            onChange={(e) => setFont(e.target.value)}
          >
            {/* 옵션을 추가하세요 */}
          </TextDropdownField>
        </div>
        <Button type='primary' size='56'>
          생성하기
        </Button>
      </form>
    </div>
  );
}

export default CardMessagePostPage;
