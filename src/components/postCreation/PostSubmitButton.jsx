import { Button } from '../../style/buttonStyle';

const PostSubmitButton = ({ onSubmit }) => {
  return (
    <Button border-radius="5px" padding="15px 150px" type="button" onClick={onSubmit}>
      저장하기
    </Button>
  );
};

export default PostSubmitButton;
