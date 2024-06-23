import React from 'react';
import './RandomButton.scss';

const RandomButton = ({ onClick }) => {
  return (
    <div class='random-button-container'>
      <button class='random-button' onClick={onClick} type='button'>
        <span>이미지 셔플</span>
      </button>
    </div>
  );
};

export default RandomButton;
