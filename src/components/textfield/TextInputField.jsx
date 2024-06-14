import './InputField.scss';

function TextInputField({ children, type, id, name }) {
  return (
    <div className='inputlayer'>
      <input
        placeholder={children}
        className='input'
        type={type}
        id={id}
        name={name}
      />
    </div>
  );
}

export default TextInputField;
