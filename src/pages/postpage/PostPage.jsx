import { useState } from 'react';
import ToggleButton from 'components/ToggleButton';
import TextInputField from 'components/textfield/TextInputField';
import Button from 'components/Button';
import Options from 'components/option/Options';
//import axios from 'axios';
import './PostPage.scss';

function PostPage() {
  //Option컴포넌트의 type을 관리하는 state와 객체
  const [optionType, setOptionType] = useState('color');
  const [selectedOption, setSelectedOption] = useState('');

  const options = ['컬러', '이미지'];

  //선택된 토글 값에 따라 Option type 지정하는 핸들러
  const handleOptionSelect = (selectedOption) => {
    setOptionType(selectedOption === '컬러' ? 'color' : 'image');
    setSelectedOption(''); // 옵션 변경 시 초기화
  };

  const handleOptionClick = (optionValue) => {
    setSelectedOption(optionValue);
  };

  return (
    <>
      <div className='page-container'>
        <form className='form-container'>
          <label>
            <p className='font-24-bold title-to'>To.</p>
          </label>
          <TextInputField>받는 사람 이름을 선택해 주세요</TextInputField>
        </form>
        <div className='text-container'>
          <p className='font-24-bold title-choice'>배경화면을 선택해 주세요.</p>
          <p className='font-16-regular'>
            컬러를 선택하거나, 이미지를 선택할 수 있습니다.
          </p>
        </div>
        <ToggleButton options={options} onOptionSelect={handleOptionSelect} />
        <div className='option-container'>
          {/* onOptionClick prop을 통해 선택된 옵션 값을 전달 */}
          <Options type={optionType} onOptionClick={handleOptionClick} />
        </div>
        {/* 선택된 옵션 표시 */}
        <p className='selectedOp'>{selectedOption}</p>
        <Button size='56' type='primary'>
          생성하기
        </Button>
      </div>
    </>
  );
}

export default PostPage;
