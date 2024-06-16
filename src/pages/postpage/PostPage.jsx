import ToggleButton from 'components/ToggleButton';
import TextInputField from 'components/textfield/TextInputField';
import Button from 'components/Button';
import Options from 'components/option/Options';
import './PostPage.scss';

function PostPage() {
  const toggleOptions = ['컬러', '이미지'];
  const selectedType = 'image';
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
        {/* 토글버튼자리 */}
        <ToggleButton options={toggleOptions}></ToggleButton>
        {/* 옵션 컴포넌트 자리 */}
        <div className='option-container'>
          <Options type={selectedType} />
        </div>
        <Button size='56' type='primary'>
          생성하기
        </Button>
      </div>
    </>
  );
}

export default PostPage;
