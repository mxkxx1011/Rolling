import { PROFILE_IMAGES } from 'constants/PostMessagePage';
import styles from 'components/profileimage/ProfileImages.module.scss';

function ProfileImages({ profileImage, setProfileImage }) {
  return (
    <div className={styles.container}>
      <img
        className={styles.selectedProfileImage}
        src={profileImage}
        alt='프로필 이미지'
      />
      <div className={styles.wrapper}>
        <p>프로필 이미지를 선택해주세요!</p>
        <div className={styles.profileImages}>
          {PROFILE_IMAGES &&
            PROFILE_IMAGES.map(({ src, alt }, index) => (
              <img
                className={styles.profileImage}
                key={index}
                src={src}
                alt={alt}
                onClick={() => setProfileImage(src)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default ProfileImages;
