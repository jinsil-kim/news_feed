import { Button } from '../../style/buttonStyle';

// TODO: 버튼 컴포넌트를 나눈 건 괜찮지만 다른 곳에 재사용이 되고 있지 않아 큰 의미가 있나 싶긴 합니다.
// props만 더 내려야 하는 상황이라 코드 복잡성이 올라가는 게 아닌가 생각이 드네요.
const PostSubmitButton = ({ onSubmit }) => {
  return (
    <Button border-radius="5px" padding="15px 150px" type="button" onClick={onSubmit}>
      저장하기
    </Button>
  );
};

export default PostSubmitButton;
