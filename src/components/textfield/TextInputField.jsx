import './InputField.scss';

function TextInputField({ children, type, id, name, value, onChange }) {
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
      />
    </div>
  );
}

export default TextInputField;
