import axios from 'axios';
import { useState } from 'react';
import ToggleButton from 'components/ToggleButton';
import TextInputField from 'components/textfield/TextInputField';
import Button from 'components/Button';
import Options from 'components/option/Options';
import './PostPage.scss';

function PostPage() {
  //Option컴포넌트의 type을 관리하는 state와 객체
  const [optionType, setOptionType] = useState('color');
  const options = ['컬러', '이미지'];
  //선택된 토글 값에 따라 Option type 지정하는 핸들러
  const handleOptionSelect = (selectedOption) => {
    setOptionType(selectedOption === '컬러' ? 'color' : 'image');
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  //post요청 초기값 설정
  const INITIAL_VALUESE = {
    team: '7-4',
    name: '',
    backgroundColor: 'beige',
    backgroundImageURL:
      'https://i.pinimg.com/originals/eb/95/10/eb9510644f2631cdf01eccb9de98948d.jpg',
  };
  //post 전달 값 관리하는 state
  const [values, setValues] = useState(INITIAL_VALUESE);

  //이전 값과 동기화 시켜주는 함수
  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  //input 값 관리하는 함수
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  //Form Submit 함수
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('team', values.team);
    formData.append('backgroundColor', values.backgroundColor);
    formData.append('backgroundImageURL', values.backgroundImageURL);

    const currentValue = {
      ...values,
      name: values.name,
    };
    console.log('Updated Form Values:', currentValue); // 디버깅용 콘솔 출력
    try {
      // axios를 사용하여 POST 요청 보내기
      const response = await axios.post(
        'https://rolling-api.vercel.app/7-4/recipients/',
        formData,
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
    <>
      <div className='page-container'>
        <form className='form-container' onSubmit={handleSubmit}>
          <label>
            <p className='font-24-bold title-to'>To.</p>
          </label>
          <TextInputField
            name='name'
            value={values.name}
            onChange={handleInputChange}
          >
            받는 사람 이름을 선택해 주세요
          </TextInputField>
          <div className='text-container'>
            <p className='font-24-bold title-choice'>
              배경화면을 선택해 주세요.
            </p>
            <p className='font-16-regular'>
              컬러를 선택하거나, 이미지를 선택할 수 있습니다.
            </p>
          </div>
          {/* 토글버튼 컴포넌트*/}
          <ToggleButton options={options} onOptionSelect={handleOptionSelect} />
          {/* 옵션 컴포넌트 */}
          <div className='option-container'>
            <Options type={optionType} />
          </div>
          <Button type='submit' size='56' order='primary'>
            생성하기
          </Button>
        </form>
      </div>
    </>
  );
}

export default PostPage;
