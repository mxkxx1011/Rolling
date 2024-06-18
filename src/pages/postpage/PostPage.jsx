import { useState } from 'react';
import axios from 'axios';
import ToggleButton from 'components/ToggleButton';
import TextInputField from 'components/textfield/TextInputField';
import Button from 'components/Button';
import Options from 'components/option/Options';
import './PostPage.scss';

function PostPage() {
  // post data 초기값 설정
  const INITIAL_VALUES = {
    team: '7-4',
    name: '컬러 들어가나',
    backgroundColor: 'beige',
    backgroundImageURL: null,
  };

  const [optionType, setOptionType] = useState('color'); // Option 컴포넌트의 type을 관리하는 state
  const [selectedOption, setSelectedOption] = useState(null); // Options 컴포넌트에서 선택된 값을 관리하는 state
  const [formValues, setFormValues] = useState(INITIAL_VALUES); // post보낼 data 관리하는 state
  const [isSubmitting, setIsSubmitting] = useState(false);

  const options = ['컬러', '이미지']; // ToggleButton의 옵션 배열

  // ToggleButton에서 옵션 선택 시 Option type을 설정하는 핸들러
  const handleOptionSelect = (selectedOption) => {
    setOptionType(selectedOption === '컬러' ? 'color' : 'image');
  };

  // Options 컴포넌트에서 선택한 값을 상태에 업데이트하는 핸들러
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  // TextInputField의 값 변경을 처리하는 핸들러
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  // form submit 핸들러
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData();

    // 선택한 옵션에 따라 formValues를 업데이트
    const updatedFormValues = {
      ...formValues,
      name: formValues.name, // name 값이 입력되었는지 확인
      backgroundColor:
        optionType === 'color'
          ? selectedOption || formValues.backgroundColor
          : null,
      backgroundImageURL:
        optionType === 'image'
          ? selectedOption || formValues.backgroundImageURL
          : 'https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    };

    // 선택된 옵션이 없는 경우 기본값 설정
    if (optionType === 'color' && !selectedOption) {
      updatedFormValues.backgroundColor = 'beige';
    } else if (optionType === 'image' && !selectedOption) {
      updatedFormValues.backgroundImageURL =
        'https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
    }

    console.log('Updated Form Values:', updatedFormValues); // 디버깅용 콘솔 출력

    try {
      // axios를 사용하여 POST 요청 보내기
      const response = await axios.post(
        'https://rolling-api.vercel.app/7-4/recipients/',
        updatedFormValues,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      console.log('Response:', response.data);
      // 성공적으로 post한 경우에 대한 처리
    } catch (error) {
      console.error('Error posting data:', error);
      console.error('Error response:', error.response);
      if (error.response && error.response.data) {
        console.error('Error details:', error.response.data);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='page-container'>
      <form className='form-container' onSubmit={handleSubmit}>
        <label>
          <p className='font-24-bold title-to'>To.</p>
        </label>
        <TextInputField
          name='name'
          onChange={handleInputChange}
          placeholder='받는 사람 이름을 입력해 주세요'
        >
          받는 사람 이름을 입력해 주세요
        </TextInputField>
        <div className='text-container'>
          <p className='font-24-bold title-choice'>배경화면을 선택해 주세요.</p>
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

        <Button
          type='submit'
          size='56'
          className='primary'
          disabled={isSubmitting}
        >
          {isSubmitting ? '생성 중...' : '생성하기'}
        </Button>
      </form>
    </div>
  );
}

export default PostPage;
