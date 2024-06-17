import './SkeletonCard.scss';
import 'assets/styles/CardModal.scss';

function SkeletonCard() {
  return (
    <div className='container card skeleton'>
      <div className='header card'>
        <div className='profile-container card'>
          <div className='profile-img skeleton-profile skeleton'></div>
          <div className='profile-text-wrapper'>
            <div className='profile-name skeleton-name skeleton'></div>
            <div className='badge skeleton-badge skeleton'></div>
          </div>
        </div>
      </div>
      <div className='border skeleton' />
      <div>
        <p className='card-letter card skeleton-text skeleton'></p>
      </div>
      <div>
        <p className='date skeleton-text skeleton'></p>
      </div>
    </div>
  );
}

export default SkeletonCard;
