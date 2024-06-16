import './SkeletonCardList.scss';

function SkeletonCardList() {
  return (
    <div className='card-list skeleton'>
      <div className='card-list-content'>
        <div className='content-top'>
          <div className='skeleton-header skeleton'></div>
          <div className='reaction-wrapper'>
            <div className='skeleton-circle skeleton'></div>
            <div className='skeleton-circle skeleton'></div>
            <div className='skeleton-circle skeleton'></div>
          </div>
          <div>
            <div className='skeleton-number skeleton'></div>
          </div>
        </div>
        <div className='border skeleton'></div>
        <div className='skeleton-reactions'>
          <div className='skeleton-reaction skeleton'></div>
          <div className='skeleton-reaction skeleton'></div>
          <div className='skeleton-reaction skeleton'></div>
        </div>
      </div>
    </div>
  );
}

export default SkeletonCardList;
