import Badge from 'components/badge/Badge';
import profileIMG from './profileImg.png';
import 'assets/styles/CardModal.scss';
import dompurify from 'dompurify';

import Button from 'components/Button';
import FormatDate from 'utils/FormatDate';
import { useEffect } from 'react';
import { preventScroll, allowScroll } from 'utils/Scroll.jsx';
import Sanitizer from 'utils/Sanitizer';
import getFonts from 'utils/getFonts';

function Modal({ message, isModalOpen, handleCloseModal }) {
  useEffect(() => {
    if (isModalOpen) {
      const prevScrollY = preventScroll();
      return () => {
        allowScroll(prevScrollY);
      };
    }
  }, [isModalOpen]);

  const {
    recipientId,
    sender,
    profileImageURL,
    relationship,
    font,
    content,
    createdAt,
  } = message;

  const sanitizer = dompurify.sanitize;
  const cleanContent = sanitizer(content);

  const handleOverlayClick = (e) => {
    e.stopPropagation();
    handleCloseModal();
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className='modal-overlay' onClick={handleOverlayClick}>
      <div className='container modal' onClick={handleModalClick}>
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
              dangerouslySetInnerHTML={{ __html: Sanitizer(content) }}
              style={{ fontFamily: getFonts(font) }}
            ></p>
          </div>
          <Button
            handleClick={handleCloseModal}
            className='modal-btn'
            order='primary'
            size='40'
          >
            확인
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
