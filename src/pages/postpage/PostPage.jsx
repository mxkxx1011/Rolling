import axios from 'axios';
import { useState } from 'react';
import ToggleButton from 'components/ToggleButton';
import TextInputField from 'components/textfield/TextInputField';
import Button from 'components/Button';
import Options from 'components/option/Options';
import './PostPage.scss';
import { RecipientsAPI } from 'data/CallAPI';
import useNavigator from 'hooks/useNavigator';
import Label from 'components/Label';
import ErrorMessage from 'components/ErrorMessage';

function PostPage() {
  const DEFAULT_COLOR = 'beige';
  const DEFAULT_IMG =
    'https://i.pinimg.com/originals/eb/95/10/eb9510644f2631cdf01eccb9de98948d.jpg';

  /* =================[ 옵션과 토글 관리 부분 ]================= */

  const [optionType, setOptionType] = useState('color');
  const options = ['컬러', '이미지'];

  // 토글 클릭 handler
  const handleOptionSelect = (selectedOption) => {
    setOptionType(selectedOption === '컬러' ? 'color' : 'image');
    // 토글 변환시, 기본값 설정
    if (selectedOption === '이미지') {
      setBackColor(DEFAULT_COLOR);
      setBackImageURL(DEFAULT_IMG);
    } else {
      setBackImageURL(null);
    }
  };

  // 옵션 클릭 handler
  const handleOptionClick = (option) => {
    // BackColor, BackURL FormData 설정
    if (optionType === 'color') {
      setBackColor(option);
      setBackImageURL(null);
    } else if (optionType === 'image') {
      setBackImageURL(option);
      setBackColor(DEFAULT_COLOR);
    }
  };

  /* ==================[ POST API 부분 ]================== */

  const [name, setName] = useState('');
  const [backColor, setBackColor] = useState(DEFAULT_COLOR);
  const [backImageURL, setBackImageURL] = useState(null);
  const handleMovePage = useNavigator();
  const [isFocus, setIsFocus] = useState(false);

  // input값 관리
  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  //포커스 아웃 되었는지 check
  const handleBlur = () => {
    setIsFocus(true);
  };

  // Form Submit 제출
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
          <Label htmlFor='inputName'>To.</Label>
          <TextInputField
            name='name'
            value={name}
            id='inputName'
            onChange={handleInputChange}
            onBlur={handleBlur}
            isError={!name && isFocus}
          >
            받는 사람 이름을 선택해 주세요
          </TextInputField>
          {/* input에 값이 없을 때 표시할 에러 메세지 */}
          <div className='post-input-error'>
            {isFocus && !name && (
              <ErrorMessage>값을 입력해 주세요.</ErrorMessage>
            )}
          </div>
        </div>
        <div className='text-container'>
          <Label>배경화면을 선택해 주세요.</Label>
          <p className='font-16-regular'>
            컬러를 선택하거나, 이미지를 선택할 수 있습니다.
          </p>
        </div>
        <ToggleButton options={options} onOptionSelect={handleOptionSelect} />
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
