import { useState } from 'react';
import ToggleButton from 'components/ToggleButton';
import TextInputField from 'components/textfield/TextInputField';
import Button from 'components/Button';
import Options from 'components/option/Options';
import './PostPage.scss';

function PostPage() {
  const [optionType, setOptionType] = useState('color'); // Option 컴포넌트의 type을 관리하는 state
  const [selectedOption, setSelectedOption] = useState(null); // Options 컴포넌트에서 선택된 값을 관리하는 state

  const options = ['컬러', '이미지']; // ToggleButton의 옵션 배열

  // ToggleButton에서 옵션 선택 시 Option type을 설정하는 핸들러
  const handleOptionSelect = (selectedOption) => {
    setOptionType(selectedOption === '컬러' ? 'color' : 'image');
  };

  // Options 컴포넌트에서 선택한 값을 상태에 업데이트하는 핸들러
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <div className='page-container'>
        <form className='form-container'>
          <label>
            <p className='font-24-bold title-to'>To.</p>
          </label>
          <TextInputField>받는 사람 이름을 선택해 주세요</TextInputField>
          <div className='text-container'>
            <p className='font-24-bold title-choice'>
              배경화면을 선택해 주세요.
            </p>
            <p className='font-16-regular'>
              컬러를 선택하거나, 이미지를 선택할 수 있습니다.
            </p>
          </div>

          {/* 토글버튼 컴포넌트 */}
          <ToggleButton options={options} onOptionSelect={handleOptionSelect} />

          {/* 옵션 컴포넌트 */}
          <div className='option-container'>
            <Options type={optionType} onClick={handleOptionClick} />
          </div>

          {/* 선택된 옵션을 화면에 표시하는 부분 */}
          {selectedOption && <p>선택된 옵션: {selectedOption}</p>}

          <Button size='56' type='primary'>
            생성하기
          </Button>
        </form>
      </div>
    </>
  );
}

export default PostPage;
