import Badge from 'components/badge/Badge';
import profileIMG from './profileImg.png';
import 'assets/styles/CardModal.scss';

import Button from 'components/Button';
import FormatDate from 'utils/FormatDate';

function Modal({ message, isModalOpen, handleCloseModal }) {
  if (!isModalOpen) return null;

  const {
    recipientId,
    sender,
    profileImageURL,
    relationship,
    font,
    content,
    createdAt,
  } = message;

  return (
    <>
      <div className='container modal'>
        <div className='header modal'>
          <div className='profile-container modal'>
            <img
              className='profile-img'
              src={profileImageURL}
              alt='프로필 이미지'
            />
            <div className='profile-text-wrapper'>
              <p className='profile-name'>
                From. <span>{sender}</span>
              </p>
              <Badge>{relationship}</Badge>
            </div>
          </div>
          <div className='date'>
            <p>{FormatDate(createdAt)}</p>
          </div>
        </div>
        <div className='modal-body'>
          <div className='card-letter-container'>
            <p
              className='card-letter modal'
              dangerouslySetInnerHTML={{ __html: content }}
            ></p>
          </div>
          <Button
            handleClick={handleCloseModal}
            className='modal-btn'
            type='primary'
            size='40'
          >
            확인
          </Button>
        </div>
      </div>
    </>
  );
}

export default Modal;
