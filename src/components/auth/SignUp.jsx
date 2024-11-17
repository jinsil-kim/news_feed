import { Button } from '../../style/buttonStyle';
import { AuthDiv, Title } from '../../style/logIn/logInStyle';
import { MdLockOutline, MdOutlineFaceUnlock, MdOutlineLockPerson, MdOutlineMail } from 'react-icons/md';
import { FormDiv2 } from '../../style/logIn/signUpStyle';

const SignUp = () => {
  return (
    <AuthDiv>
      <Title>WOD</Title>
      <FormDiv2>
        <p>오운완 커뮤니티에 오신 것을 환영합니다</p>
        <form>
          <label htmlFor="name">
            <MdOutlineFaceUnlock className="icon" /> <input type="text" id="name" placeholder="닉네임" />
          </label>
          <label htmlFor="email">
            <MdOutlineMail className="icon" />
            <input type="email" id="email" placeholder="이메일 주소" />
          </label>
          <label htmlFor="pw">
            <MdLockOutline className="icon" />
            <input type="password" id="pw" placeholder="8~12자리의 비밀번호" />
          </label>
          <label htmlFor="checkPw">
            <MdOutlineLockPerson className="icon" />
            <input type="password" id="checkPw" placeholder="비밀번호 확인" />
          </label>
          <Button>계정 만들기</Button>
        </form>
      </FormDiv2>
    </AuthDiv>
  );
};

export default SignUp;
