import 'assets/styles/CardModal.scss';
import profileIMG from 'assets/images/profileImg.png';
import { useState } from 'react';
import DeleteButton from 'components/DeleteButton';
import Badge from 'components/badge/Badge';
import PlusButton from 'components/PlusButton';
import classNames from 'classnames';

function Card({ type = 'normal' }) {
  const [isDelete, setIsDelete] = useState(true);
  const isTypeNormal = type === 'normal';

  return (
    <div className={classNames('container', 'card', type)}>
      {isTypeNormal ? (
        <>
          <div className='header card'>
            <div className='profile-container card'>
              <img
                className='profile-img'
                src={profileIMG}
                alt='프로필 이미지'
              />
              <div className='profile-text-wrapper'>
                <p className='profile-name'>
                  From. <span>용빈</span>
                </p>
                <Badge>친구</Badge>
              </div>
            </div>
            {isDelete && <DeleteButton />}
          </div>
          <div>
            <p className='card-letter card'>
              코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또
              하세요!
            </p>
          </div>
          <div>
            <p className='date'>2023.07.08</p>
          </div>
        </>
      ) : (
        <PlusButton />
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
