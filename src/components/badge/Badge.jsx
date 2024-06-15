import classNames from 'classnames';
import './Badge.scss';

const BadgeColor = {
  지인: 'BeigeBadge',
  동료: 'PurpleBadge',
  가족: 'GreenBadge',
  친구: 'BlueBadge',
};

//전달받은 BadgeColor에 따라 뱃지의 className이 변경되도록 조건부 렌더링
function Badge({ children }) {
  return (
    <>
      <div
        className={classNames(
          `text-badge-container ${BadgeColor[children] || '친구'}`,
        )}
      >
        <p>{children}</p>
      </div>
    </>
  );
}

export default Badge;
