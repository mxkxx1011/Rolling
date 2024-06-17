import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useNavigator from 'hooks/useNavigator';
import TextInputField from 'components/textfield/TextInputField';
import TextDropdownField from 'components/textfield/TextDropdownField';
import Button from 'components/Button';
import ToastEditor from 'components/ToastEditor';
import { RecipientsMessagesAPI } from 'data/CallAPI';
import styles from 'pages/postmessage/CardMessagePostPage.module.scss';
import DefaultProfileImage from 'assets/images/ic_profile_default.svg';
import { PROFILE_ICONS } from 'pages/postmessage/ProfileIcons';

function CardMessagePostPage() {
  const [sender, setSender] = useState('');
  const [relationship, setRelationship] = useState('지인');
  const [font, setFont] = useState('Noto Sans');
  const [message, setMessage] = useState('');
  const [profileImage, setProfileImage] = useState('defaultImage');
  const relationshipOptions = ['지인', '친구', '동료', '가족'];
  const fontOptions = [
    'Noto Sans',
    'Pretendard',
    '나눔명조',
    '나눔손글씨 손편지체',
  ];

  const { postId } = useParams();
  const handleMovePage = useNavigator();

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const formData = {
      team: '7-4',
      recipientId: postId,
      sender: sender,
      profileImageURL:
        profileImage === 'defaultImage' ? DefaultProfileImage : profileImage,
      relationship: relationship,
      content: message,
      font: font,
    };

    try {
      RecipientsMessagesAPI('post', postId, formData);
      console.log(formData);
      handleMovePage(`/post/${postId}`);
    } catch (error) {
      console.log(error);
    }
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
          <div className={styles.profile}>
            <img
              src={DefaultProfileImage}
              alt='프로필 이미지'
              width='56px'
              height='56px'
            />
            <>
              <p>프로필 이미지를 선택해주세요!</p>
              <div className={styles.profileIcons}>
                {PROFILE_ICONS.map((icon, i) => (
                  <img
                    key={i}
                    value={icon}
                    width='56px'
                    height='56px'
                    onClick={setProfileImage(icon)}
                  />
                ))}
              </div>
            </>
          </div>
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
