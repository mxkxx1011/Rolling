import './InputField.scss';

function TextInputField({ children }) {
  return (
    <div className='inputlayer'>
      <input placeholder={children} className='input' />
    </div>
  );
}

export default TextInputField;
