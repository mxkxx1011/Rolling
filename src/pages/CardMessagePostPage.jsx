import TextInputField from 'components/textfield/TextInputField';
import TextDropdownField from 'components/textfield/TextDropdownField';
import Button from 'components/Button';
import styles from 'pages/CardMessagePostPage.module.scss';
import DefaultProfileIcon from 'assets/images/ic_person.svg';

// const API_URL = process.env.REACT_APP_API_URL;

// post/{id}/message
function CardMessagePostPage() {
  // const [recipient, setRecipient] = useState();
  // const [recipientMessage, setRecipientMessage] = useState();

  // useEffect(() => {}, []);

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.wrapper}>
          <label className={styles.label} htmlFor='nameInput'>
            From.
          </label>
          <TextInputField type='text' id='nameInput' name='sender'>
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
          <TextDropdownField></TextDropdownField>
        </div>
        <div className={styles.wrapper}>
          <label className={styles.label}>내용을 입력해 주세요</label>
          <textarea></textarea>
        </div>
        <div className={styles.wrapper}>
          <label className={styles.label}>폰트 선택</label>
          <TextDropdownField>지인</TextDropdownField>
        </div>
        <Button type='primary' size='56'>
          생성하기
        </Button>
      </form>
    </div>
  );
}

export default CardMessagePostPage;
