import React, { useRef } from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

function ToastEditor({ body, setBody }) {
  const editorRef = useRef(null);

  const onChangeGetHTML = () => {
    const data = editorRef.current.getInstance().getHTML();
    setBody(data);
  };

  return (
    <Editor
      initialValue={body || '롤링페이퍼 메시지를 보내보세요!'}
      previewStyle='vertical' // 미리보기 스타일 (vertical 또는 tab)
      height='260px' // 에디터 높이 설정
      initialEditType='wysiwyg' // 초기 편집 타입 설정 (wysiwyg 또는 markdown)
      useCommandShortcut={true} // 단축키 사용 설정
      ref={editorRef}
      onChange={onChangeGetHTML} // 내용 변경 시 호출될 함수
    />
  );
}

export default ToastEditor;
