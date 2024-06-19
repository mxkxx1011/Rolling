import axios from 'axios';
import { useState } from 'react';
import ToggleButton from 'components/ToggleButton';
import TextInputField from 'components/textfield/TextInputField';
import Button from 'components/Button';
import Options from 'components/option/Options';
import './PostPage.scss';
import { RecipientsAPI } from 'data/CallAPI';
import useNavigator from 'hooks/useNavigator';

function PostPage() {
  // 컬러 기본값 상수로 지정
  const DEFAULT_COLOR = 'beige';

  /* ---- 옵션과 토글 관리 부분 ---- */

  // Option 컴포넌트의 type을 관리하는 state와 객체
  const [optionType, setOptionType] = useState('color');
  const options = ['컬러', '이미지'];
  // 선택된 옵션 컴포넌트 값 관리하는 state
  const [selectedOption, setSelectedOption] = useState(DEFAULT_COLOR);

  // 선택된 토글 값에 따라 Option type 지정하는 핸들러
  // 컬러/이미지 토글 버튼 클릭 -> 컬러/이미지 옵션 컴포넌트 표시
  const handleOptionSelect = (selectedOption) => {
    setOptionType(selectedOption === '컬러' ? 'color' : 'image');
    setSelectedOption(selectedOption === '컬러' ? DEFAULT_COLOR : null);
  };

  // Option 컴포넌트에서 선택된 값 -> setState 지정
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  /* ---- POST API 부분 ---- */
  const [name, setName] = useState('');
  const [backColor, setBackColor] = useState(DEFAULT_COLOR);
  const [backImageURL, setBackImageURL] = useState(null);
  const handleMovePage = useNavigator();

  // input 값 관리하는 함수
  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  // Form Submit 함수
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      team: '7-4',
      name: name,
      backgroundColor: backColor,
      backgroundImageURL: backImageURL,
    };

    // optionType에 따라서 배경 색상 또는 이미지 URL을 formData에 추가
    if (optionType === 'color') {
      formData.backgroundColor = selectedOption || DEFAULT_COLOR;
    } else if (optionType === 'image') {
      formData.backgroundImageURL = selectedOption || null;
      // backgroundImageURL이 아닌 경우에는 기본 배경색을 추가
      formData.backgroundColor = DEFAULT_COLOR;
    }

    try {
      RecipientsAPI('post', null, formData);
      console.log(formData);
      handleMovePage(`/list`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='page-container'>
      <form className='form-container' onSubmit={handleSubmit}>
        <div className='input-container'>
          <label htmlFor='inputName'>
            <p className='font-24-bold title-to'>To.</p>
          </label>
          <TextInputField
            name='name'
            value={name}
            id='inputName'
            onChange={handleInputChange}
          >
            받는 사람 이름을 선택해 주세요
          </TextInputField>
        </div>
        <div className='text-container'>
          <p className='font-24-bold title-choice'>배경화면을 선택해 주세요.</p>
          <p className='font-16-regular'>
            컬러를 선택하거나, 이미지를 선택할 수 있습니다.
          </p>
        </div>
        {/* 토글버튼 컴포넌트*/}
        <ToggleButton options={options} onOptionSelect={handleOptionSelect} />
        {/* 옵션 컴포넌트 */}
        <div className='option-container'>
          <Options type={optionType} onClick={handleOptionClick} />
        </div>
        <Button type='submit' size='56' order='primary'>
          생성하기
        </Button>
      </form>
    </div>
  );
}

export default PostPage;
