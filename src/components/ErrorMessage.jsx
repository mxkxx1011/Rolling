import 'components/ErrorMessage.scss';

function ErrorMessage({ children }) {
  return <p className='error-message'>{children}</p>;
}

export default ErrorMessage;
