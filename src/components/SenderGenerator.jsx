import { useState, useEffect } from 'react';
import { ANIMAL_NAMES } from 'constants/PostMessagePage';
import SpinIcon from 'assets/images/ic_spin.svg';
import styles from 'components/SenderGenerator.module.scss';

function SenderGenerator({ setSender, setIsSenderError }) {
  const [availableNames, setAvailableNames] = useState([...ANIMAL_NAMES]);

  const resetAvailableNames = () => {
    setAvailableNames([...ANIMAL_NAMES]);
  };

  useEffect(() => {
    if (availableNames.length === 0) {
      // 배열에 있는 이름을 다 사용했다면 다시 초기화
      resetAvailableNames();
    }
  }, [availableNames]);

  const getRandomName = () => {
    if (availableNames.length === 0) {
      resetAvailableNames();
      return null;
    }
    const randomIndex = Math.floor(Math.random() * availableNames.length);
    const selectedName = availableNames[randomIndex];
    const newName = availableNames.filter((_, index) => index !== randomIndex);
    setAvailableNames(newName);
    return `익명의 ${selectedName}`;
  };

  const handleButtonClick = () => {
    const randomName = getRandomName();
    if (randomName) {
      setSender(randomName);
      setIsSenderError(false);
    } else {
      setIsSenderError(true);
    }
  };

  return (
    <button className={styles.button} type='button' onClick={handleButtonClick}>
      <img className={styles.icon} src={SpinIcon} alt='회전아이콘' />
      <span className={styles.span}>Random</span>
    </button>
  );
}

export default SenderGenerator;
