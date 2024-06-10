import './CardList.scss';
import classNames from 'classnames';

// card_list의 To.@@ 아래에 있는 유저 이미지 컴포넌트
// z-index 사용하기
// 3개 이하면 그냥 이미지만 출력
// 3개 초과 시 옆에 +N명 출력
function CardListUserImage() {
  return <div>이미지 들어갈 곳</div>;
}

// 맞는 이모지와 이모지 개수 출력되게
function CardListImoji() {
  return <div className='imoji'>20</div>;
}

function CardList({ type = 'color', color = 'purple', image }) {
  return (
    <div className={classNames('card-list', type, color, image)}>
      <div className='card-list-content'>
        <div className='content-top'>
          <p>To. name</p> {/* name 부분 변경 */}
          <CardListUserImage />
          <p>num명이 작성했어요!</p> {/* num 부분 변경 */}
        </div>
        <div className='imojis'>
          <CardListImoji />
          <CardListImoji />
        </div>
        {/* 많이 눌린 순 대로 3개 api에서 배열로 받아오고 그걸 map 메소드로 컴포넌트 3개 출력되게 하기*/}
      </div>
    </div>
  );
}

export default CardList;
