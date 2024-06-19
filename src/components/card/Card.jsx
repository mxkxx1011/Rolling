import 'assets/styles/CardModal.scss';
import { useEffect, useState } from 'react';
import DeleteButton from 'components/DeleteButton';
import Badge from 'components/badge/Badge';
import PlusButton from 'components/PlusButton';
import classNames from 'classnames';
import FormatDate from 'utils/FormatDate';
import dompurify from 'dompurify';
import { MessagesAPI } from 'data/CallAPI';
import { useLocation, useParams } from 'react-router-dom';
import iconCheck from 'assets/images/ic_check.svg';
import useNavigator from 'hooks/useNavigator';

function Card({
  type = 'normal',
  message = {},
  handleClick,
  getRecipient,
  getRecipientMessage,
  checkedItems,
  setCheckedItems,
}) {
  const [isDelete, setIsDelete] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const location = useLocation();

  const isEditPage = location.pathname.includes('/edit');
  const isEditSelectPage = location.pathname.includes('/edit/select');
  const handleMovePage = useNavigator();
  const { postId } = useParams();

  const handleToggleCheck = (value) => {
    if (isChecked) {
      setCheckedItems(checkedItems.filter((item) => item !== value));
    } else {
      setCheckedItems([...checkedItems, value]);
    }
    setIsChecked((prev) => !prev);
  };

  const isTypeNormal = type === 'normal';

  const {
    id,
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

  function getFonts(inputFont) {
    const fonts = {
      'Noto Sans': 'Noto Sans KR',
      Pretendard: 'Pretendard',
      나눔명조: 'NanumGothic',
      '나눔손글씨 손편지체': 'Handletter',
    };

    return fonts[inputFont] || fonts['Noto Sans'];
  }

  const handleSelectDelete = async () => {
    try {
      const response = await MessagesAPI('delete', id, null);
      getRecipientMessage();
      getRecipient();
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={classNames('container', 'card', type)}
    >
      {isTypeNormal ? (
        <>
          <div className='header card'>
            <div className='profile-container card'>
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
            <div className='card-button-wrapper'>
              {isEditPage && !isEditSelectPage && (
                <DeleteButton handleClick={handleSelectDelete} />
              )}
              {isEditSelectPage && (
                <div className='checkbox' onClick={() => handleToggleCheck(id)}>
                  {isChecked && <img src={iconCheck} alt='check' />}
                </div>
              )}
            </div>
          </div>
          <div>
            <p
              className='card-letter card'
              dangerouslySetInnerHTML={{ __html: cleanContent }}
              style={{ fontFamily: getFonts(font) }}
            ></p>
          </div>
          <div>
            <p className='date'>{FormatDate(createdAt)}</p>
          </div>
        </>
      ) : (
        <div className='plus-wrapper'>
          <PlusButton />
        </div>
      )}
    </div>
  );
}

export default Card;

// {
//     "id": 13687,
//     "recipientId": 7720,
//     "sender": "현서",
//     "profileImageURL": "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-3-avatar-2754579_120516.png",
//     "relationship": "지인",
//     "content": "<p>Hero</p>",
//     "font": "나눔손글씨 손편지체",
//     "createdAt": "2024-05-22T06:03:08.034876Z"
// }
