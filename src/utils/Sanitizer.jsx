import dompurify from 'dompurify';
function Sanitizer(content) {
  const sanitizer = dompurify.sanitize;
  const cleanContent = sanitizer(content);

  return cleanContent;
}

export default Sanitizer;
