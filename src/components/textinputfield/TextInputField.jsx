import './InputField.scss';

function TextInputField({ children }) {
  return (
    <div className='InputLayer'>
      <input placeholder={children} className='Input' />
    </div>
  );
}

export default TextInputField;
