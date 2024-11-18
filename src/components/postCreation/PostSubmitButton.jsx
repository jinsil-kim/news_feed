import { SubmitButton } from "../../style/postCreation/PostSubmitButtonStyle";

const PostSubmitButton = ({onSubmit}) => {
  return <SubmitButton type='button' onClick={onSubmit}>저장하기</SubmitButton>
};

export default PostSubmitButton;