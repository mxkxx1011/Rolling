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
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
export default TextInputField;
