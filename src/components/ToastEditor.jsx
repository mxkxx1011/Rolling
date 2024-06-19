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
      toolbarItems={[
        // 툴바 옵션 설정
        ['heading', 'bold', 'italic', 'strike'],
        ['hr', 'quote'],
        ['ul', 'ol'],
      ]}
      initialValue={body || '메시지를 입력하세요'} // 처음에 보이는 값
      initialEditType='wysiwyg' // 초기 편집 타입 (wysiwyg 또는 markdown)
      previewStyle='vertical' // 미리보기 스타일 (vertical 또는 tab)
      height='260px' // 에디터 창 높이
      useCommandShortcut={true} // 단축키 사용 여부
      ref={editorRef}
      onChange={onChangeGetHTML} // 내용 변경 시 호출될 함수
    />
  );
}

export default ToastEditor;
