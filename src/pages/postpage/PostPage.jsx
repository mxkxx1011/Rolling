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
    // Set state for background color or image URL
    if (selectedOption === '컬러') {
      setBackColor(DEFAULT_COLOR);
      setBackImageURL(null);
    } else {
      setBackImageURL(null);
    }
  };

  // Option 컴포넌트에서 선택된 값 -> setState 지정
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    // background color, image URL 상태관리
    if (optionType === 'color') {
      setBackColor(option);
      setBackImageURL(null);
    } else if (optionType === 'image') {
      setBackImageURL(option);
      setBackColor(DEFAULT_COLOR);
    }
  };

  /* ---- POST API 부분 ---- */
  const [name, setName] = useState('');
  const [backColor, setBackColor] = useState(DEFAULT_COLOR);
  const [backImageURL, setBackImageURL] = useState(null);
  const handleMovePage = useNavigator();
  const [isFocus, setIsFocus] = useState(false);

  // input 값 관리하는 함수
  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  //포커스 아웃 되었는지 check
  const handleBlur = () => {
    setIsFocus(true);
  };

  // Form Submit 함수
  const handleSubmit = async (e) => {
    e.preventDefault();

    //값이 비어있으면 제출되지 않도록 함
    if (!name) {
      return;
    }

    const formData = {
      team: '7-4',
      name: name,
      backgroundColor: backColor,
      backgroundImageURL: backImageURL,
    };

    try {
      await RecipientsAPI('post', null, formData);
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
            onBlur={handleBlur}
          >
            받는 사람 이름을 선택해 주세요
          </TextInputField>
          {/* input에 값이 없을 때 표시할 에러 메세지 */}
          {isFocus && !name && (
            <p className='error-message'>값을 입력해 주세요</p>
          )}
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
        <Button type='submit' size='56' order='primary' disabled={!name}>
          생성하기
        </Button>
      </form>
    </div>
  );
}

export default PostPage;
