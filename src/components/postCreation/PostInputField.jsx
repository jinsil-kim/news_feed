import { FormContainer, TextArea } from '../../style/postCreation/postInputFieldStyle';
const PostInputField = ({ content, onContentChange }) => {
  return (
    <FormContainer>
      {/* TODO: label 태그에 대한 설명 추가 */}
      <label htmlFor="content"></label>
      <TextArea
        id="content"
        value={content}
        onChange={(e) => onContentChange(e.target.value)}
        placeholder="오늘은 어떤 운동을 하셨나요?"
        required
      />
    </FormContainer>
  );
};

export default PostInputField;

// 필요한 기능
// 사진 업로드
// 내용 입력 필드
// 작성한 게시글 제출(Supabase DB)
// 유효성 검사
