import './InputField.scss';

function TextInputField({
  children,
  type,
  id,
  name,
  value,
  onChange,
  onBlur,
  isError,
}) {
  return (
    <div className='input-layer'>
      <input
        placeholder={children}
        className='input'
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange} // 이벤트 객체 전체를 전달
        onBlur={onBlur} //유효성 검사시 포커스 아웃 액션 감지하기 위함
        required={isError}
      />
    </div>
  );
}

export default TextInputField;
