import './CardList.scss';
import classNames from 'classnames';
import testImage from 'assets/images/image_people.png';

function Profile({ url }) {
  return <img src={url} alt='profile' />;
}

/* ** ProfileList 컴포넌트 (API 사용할때 주석 부분 사용하면 됨)
 * count = 메시지 개수
 * messages = 받은 메시지들이 들어있는 배열
 * first, second, third = 앞에 있는 메시지들 첫번째, 두번째, 세번째
 * 개수에 맞게 출력하도록 했음
 */
function ProfileList({ count = 4, messages }) {
  //   const recentMessages = messages.slice(0, 3);
  //   const [first, second, third] = [...recentMessages];
  //   return (
  //     <>
  //       <div className='profile-list'>
  //         {first && <Profile url={first.profileImageURL} />}
  //         {second && <Profile url={second.profileImageURL} />}
  //         {third && <Profile url={third.profileImageURL} />}
  //         {count > 3 && (
  //           <div>
  //             <p>+{count - 3}</p>
  //           </div>
  //         )}
  //       </div>
  //     </>
  //   );

  return (
    <>
      <div className='profile-list'>
        <Profile url={testImage} />
        <Profile url={testImage} />
        <Profile url={testImage} />
        {count > 3 && (
          <div>
            <p>+{count - 3}</p>
          </div>
        )}
      </div>
    </>
  );
}

// 맞는 이모지와 이모지 개수 출력되게
function Reaction({ reaction }) {
  //   const { emoji, count } = reaction;
  // api 받아온 후 주석 제거, 밑에는 삭제

  const emoji = '⭐️';
  const count = 5;

  return (
    <div className='reaction'>
      {emoji} {count}
    </div>
  );
}

function CardList({ type = 'color', color = 'purple', image, recipient }) {
  //   const {
  //     name,
  //     backgroundColor,
  //     backgroundImageURL,
  //     messageCount,
  //     recentMessages,
  //     topReactions,
  //   } = recipient;
  // 이 부분은 api 받아와서 사용하면 됨!

  const CardBackgroundImage = {
    // backgroundImage: `url(${backgroundImageURL})`,
    // backgroundColor: backgroundColor,
  };
  // 카드 이미지 사용할때 백그라운드 설정해주는 스타일
  // 인라인 스타일로밖에 안됩니당

  return (
    <div
      className={classNames('card-list', type, color, image)}
      style={CardBackgroundImage}
    >
      <div className='card-list-content'>
        <div className='content-top'>
          <p className='font-24-bold'>To. name</p>
          {/* 위 p - recipient의 name으로 변경 */}
          <div className='reaction-wrapper'>
            <ProfileList />
            {/* <ProfileList count={messageCount} messages={recentMessages} /> */}
            {/* messageCount와 recentMessages를 보내서 3개 넘으면 profileImage 3개 출력하고 +(messageCount-3) 보이게하기*/}
            {/* 3개 이하면 개수에 맞게 profileImage 보이게 */}
            <p className='font-16-regular'>
              {/* 위 span - recipient의 messageCount로 변경*/}
              <span className='font-16-bold'>num</span>
              명이 작성했어요!
            </p>
          </div>
        </div>
        <div className='reactions'>
          <Reaction />
          <Reaction />
          {/* {topReactions.map((reaction, idx) => <Reaction key={index} reaction={reaction} />)} */}
          {/* 이런식으로 reaction 배열을 prop으로 보내서 emoji랑 count 출력*/}
        </div>
      </div>
    </div>
  );
}

export default CardList;

// /recipients - api - json 내용
// "id": 7869,
// "name": "",
// "backgroundColor": "green",
// "backgroundImageURL": null,
// "createdAt": "2024-06-10T13:58:45.848747Z",
// "messageCount": 0,
// "recentMessages": [
//     {
//         "id": 13548,
//         "recipientId": 7720,
//         "sender": "THE BOYZ",
//         "profileImageURL": "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-2-avatar-2754578_120514.png",
//         "relationship": "지인",
//         "content": "<p>THRILL RIDE</p>",
//         "font": "Noto Sans",
//         "createdAt": "2024-05-15T17:27:19.840757Z"
//     }
// ],
// "reactionCount": 0,
// "topReactions": [
//     {
//         "id": 8246,
//         "emoji": "🩵",
//         "count": 62
//     }
// ]
