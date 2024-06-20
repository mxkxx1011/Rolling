import { useRef } from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

// Color Syntax Plugin
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';

// Dark Theme 적용
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';

const colorSyntaxOptions = {
  preset: [
    '#333333',
    '#666666',
    '#FFFFFF',
    '#EE2323',
    '#F89009',
    '#009A87',
    '#006DD7',
    '#8A3DB6',
    '#781B33',
    '#5733B1',
    '#953B34',
    '#FFC1C8',
    '#FFC9AF',
    '#9FEEC3',
    '#99CEFA',
    '#C1BEF9',
  ],
};

function ToastEditor({ body, setBody, handleMessageValidate }) {
  const editorRef = useRef(null);

  const onChangeGetHTML = () => {
    const data = editorRef.current.getInstance().getHTML().trim();
    const text = editorRef.current.getInstance().getMarkdown().trim();
    setBody(data);
    handleMessageValidate(text);
  };

  const onBlur = () => {
    handleMessageValidate(body);
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
      placeholder='메시지를 입력하세요' // placeholder 설정
      plugins={[[colorSyntax, colorSyntaxOptions]]} // Color Syntax Plugin 적용
      useCommandShortcut={true} // 단축키 사용 여부
      hideModeSwitch={true} // 모드 스위치 숨김 여부
      ref={editorRef} // 에디터 참조
      onChange={onChangeGetHTML} // 내용 변경 시 호출될 함수
      onBlur={onBlur} // 포커스 아웃 시 호출될 함수
    />
  );
}

export default ToastEditor;
