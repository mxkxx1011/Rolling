import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useNavigator from 'hooks/useNavigator';
import TextInputField from 'components/textfield/TextInputField';
import TextDropdownField from 'components/textfield/TextDropdownField';
import SenderGenerator from 'components/SenderGenerator';
import ProfileImages from 'components/profileimage/ProfileImages';
import Button from 'components/Button';
import Label from 'components/Label';
import ErrorMessage from 'components/ErrorMessage';
import ToastEditor from 'components/ToastEditor';
import styles from 'pages/postmessage/CardMessagePostPage.module.scss';
import { RecipientsMessagesAPI } from 'data/CallAPI';
import {
  LABELS_OPTIONS,
  TEAM_NUMBER,
  DEFAULT_IMAGE,
  RELATIONSHIP_OPTIONS,
  FONT_OPTIONS,
} from 'constants/PostMessagePage';

function CardMessagePostPage() {
  const [sender, setSender] = useState('');
  const [isSenderError, setIsSenderError] = useState(false);
  const [relationship, setRelationship] = useState('지인');
  const [font, setFont] = useState('Noto Sans');
  const [message, setMessage] = useState('');
  const [isMessageError, setIsMessageError] = useState(false);
  const [profileImage, setProfileImage] = useState(DEFAULT_IMAGE);
  const { postId } = useParams();
  const handleMovePage = useNavigator();
  const isButtonDisabled =
    !sender || !message || isSenderError || isMessageError;

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      team: TEAM_NUMBER,
      recipientId: postId,
      sender: sender,
      profileImageURL: profileImage,
      relationship: relationship,
      content: message,
      font: font,
    };

    try {
      await RecipientsMessagesAPI('post', postId, formData);
      handleMovePage(`/post/${postId}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleNameChange = (e) => {
    const name = e.target.value;
    setSender(name);
    if (name.length > 0) {
      setIsSenderError(false);
    }
  };

  const handleSenderValidate = () => {
    sender.trim() === '' ? setIsSenderError(true) : setIsSenderError(false);
  };

  const handleMessageValidate = (text) => {
    const trimmedText = text.replace(/(<([^>]+)>)/gi, ''); // HTML 태그 제거
    trimmedText === '' ? setIsMessageError(true) : setIsMessageError(false);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleFormSubmit}>
        <div className={styles.wrapper}>
          <Label htmlFor='nameInput'>{LABELS_OPTIONS.sender}</Label>
          <TextInputField
            type='text'
            id='nameInput'
            name='sender'
            value={sender}
            onChange={handleNameChange}
            onBlur={handleSenderValidate}
            isError={isSenderError}
          >
            이름을 입력해 주세요.
          </TextInputField>
          {isSenderError && <ErrorMessage>값을 입력해 주세요.</ErrorMessage>}
          <SenderGenerator
            setSender={setSender}
            setIsSenderError={setIsSenderError}
          />
        </div>
        <div className={styles.wrapper}>
          <Label>{LABELS_OPTIONS.profileImage}</Label>
          <ProfileImages
            profileImage={profileImage}
            setProfileImage={setProfileImage}
          />
        </div>
        <div className={styles.wrapper}>
          <Label>{LABELS_OPTIONS.relationship}</Label>
          <TextDropdownField
            options={RELATIONSHIP_OPTIONS}
            onChangeOptions={setRelationship}
          />
        </div>
        <div className={styles.wrapper}>
          <Label>{LABELS_OPTIONS.message}</Label>
          <div className={styles.editor}>
            <ToastEditor
              body={message}
              setBody={setMessage}
              handleMessageValidate={handleMessageValidate}
            />
          </div>
          {isMessageError && <ErrorMessage>값을 입력해 주세요.</ErrorMessage>}
        </div>
        <div className={styles.wrapper}>
          <Label>{LABELS_OPTIONS.font}</Label>
          <TextDropdownField
            options={FONT_OPTIONS}
            onChangeOptions={setFont}
            setPositionRelative={true}
          />
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
