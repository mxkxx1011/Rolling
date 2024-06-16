import './InputField.scss';

function TextInputField({ children }) {
  return (
    <div className='input-layer'>
      <input placeholder={children} className='input' />
    </div>
  );
}

export default TextInputField;
