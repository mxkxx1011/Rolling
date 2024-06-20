import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useNavigator from 'hooks/useNavigator';
import TextInputField from 'components/textfield/TextInputField';
import TextDropdownField from 'components/textfield/TextDropdownField';
import ProfileImages from 'components/profileimage/ProfileImages';
import Button from 'components/Button';
import ToastEditor from 'components/ToastEditor';
import styles from 'pages/postmessage/CardMessagePostPage.module.scss';
import { RecipientsMessagesAPI } from 'data/CallAPI';
import {
  DEFAULT_IMAGE,
  RELATIONSHIP_OPTIONS,
  FONT_OPTIONS,
} from 'constants/PostMessagePage';

function CardMessagePostPage() {
  const [sender, setSender] = useState('');
  const [senderError, setSenderError] = useState(false);
  const [relationship, setRelationship] = useState('지인');
  const [font, setFont] = useState('Noto Sans');
  const [message, setMessage] = useState('');
  const [messageError, setMessageError] = useState(false);
  const [profileImage, setProfileImage] = useState(DEFAULT_IMAGE);

  const { postId } = useParams();
  const handleMovePage = useNavigator();

  const isButtonDisabled = !message || !sender || senderError || messageError;

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const formData = {
      team: '7-4',
      recipientId: postId,
      sender: sender,
      profileImageURL: profileImage,
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

  const handleNameChange = (e) => {
    const name = e.target.value.trim();
    setSender(name);
  };

  const handleSenderValidate = () => {
    sender.trim() === '' ? setSenderError(true) : setSenderError(false);
    console.log(senderError);
  };

  useEffect(() => {
    handleSenderValidate();
  }, [senderError]);

  const handleMessageValidate = () => {
    const currentMessage = message.getText().trim();
    currentMessage === '' ? setMessageError(true) : setMessageError(false);
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
            onChange={handleNameChange}
            onBlur={handleSenderValidate}
          >
            이름을 입력해 주세요.
          </TextInputField>
        </div>
        <div className={styles.wrapper}>
          <label className={styles.label} htmlFor='profileSelect'>
            프로필 이미지
          </label>
          <ProfileImages
            profileImage={profileImage}
            setProfileImage={setProfileImage}
          />
        </div>
        <div className={styles.wrapper}>
          <label className={styles.label} htmlFor='relationship'>
            상대와의 관계
          </label>
          <TextDropdownField
            options={RELATIONSHIP_OPTIONS}
            onChangeOptions={setRelationship}
          />
        </div>
        <div className={styles.wrapper}>
          <label className={styles.label}>내용을 입력해 주세요</label>
          <ToastEditor
            body={message}
            setBody={setMessage}
            onBlur={handleMessageValidate}
          />
        </div>
        <div className={styles.wrapper}>
          <label className={styles.label}>폰트 선택</label>
          <TextDropdownField options={FONT_OPTIONS} onChangeOptions={setFont} />
        </div>
        <Button
          type='submit'
          order='primary'
          size='56'
          disabled={isButtonDisabled}
        >
          생성하기
        </Button>
      </form>
    </div>
  );
}

export default CardMessagePostPage;
