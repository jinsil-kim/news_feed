import { Button } from '../../style/buttonStyle';
import { AuthDiv, Title } from '../../style/authStyle/longinStyle';
import { MdLockOutline, MdOutlineFaceUnlock, MdOutlineLockPerson, MdOutlineMail } from 'react-icons/md';
import { FormDiv2 } from '../../style/authStyle/signupStyle';
import { useState } from 'react';
import { supabase } from '../../supabase/supabaseClient';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  // TODO: useState의 초기값을 객체로 만들면 더 간결하게 만들 수 있습니다. 실제 회사에서도 거의 그 방식을 사용합니다.
  // ex)
  // const [values, setValues] = useState({
  //   name: '',
  //   email: '',
  //   password: '',
  //   passwordConfirm: ''
  // });
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const hadlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handlePasswordConfirm = (e) => {
    setPasswordConfirm(e.target.value);
  };

  const signUpUser = async (e) => {
    e.preventDefault();

    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{8,12}$/;
    if (!passwordRegex.test(password)) {
      alert('비밀번호는 영문과 숫자 조합의 8~12자리여야 합니다.');
      return;
    }

    if (password !== passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다. 다시 입력해주세요');
      return;
    }
    if (!name || !email || !password) {
      alert('필수 사항을 모두 입력해주세요!');
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password
    });
    // TODO: 에러처리가 되어 있지 않아 사용자가 에러 발생 시 알 수 없음
    if (error) return alert(`회원가입에 실패했습니다. ${error.message}`);

    // Users 테이블에 추가 데이터 저장
    // TODO: supabase trigger를 활용하여 회원가입 시 자동으로 유저 정보를 넣게 바꿔봅시다.
    const { error: dbError } = await supabase
      .from('users')
      .upsert({
        // TODO: upsert는 insert + update의 준말입니다. 데이터가 없으면 insert, 있으면 update를 합니다.
        // 그런데 현재 상황에서 signup이기 때문에 굳이 upsert를 사용할 필요가 없습니다.
        id: data.user.id,
        nicknam: name
      })
      // TODO: single() 메서드는 데이터가 없으면 에러를 반환합니다. 아마 try catch문을 사용해야 할 것 같습니다. -> 이건 확인이 필요합니다.
      // upsert 내의 column을 변경하여 일부러 에러를 발생시켜 테스트 해봐도 되겠네요.
      // 또한 하나를 가져오는 로직인데 현재는 가져올 필요가 없어 빼도 될 것 같습니다.
      .single();
    if (dbError) throw dbError;

    alert('회원가입 성공!');
    navigate('/');
  };

  return (
    <AuthDiv>
      <Title>WOD</Title>
      <FormDiv2>
        <p>오운완 커뮤니티에 오신 것을 환영합니다</p>
        <form onSubmit={signUpUser}>
          <label htmlFor="name">
            <MdOutlineFaceUnlock className="icon" />
            <input type="text" id="name" placeholder="닉네임" onChange={handleName} />
          </label>
          <label htmlFor="email">
            <MdOutlineMail className="icon" />
            <input type="email" id="email" placeholder="이메일 주소" onChange={handleEmail} />
          </label>
          <label htmlFor="password">
            <MdLockOutline className="icon" />
            <input type="password" id="password" placeholder="8~12자리의 비밀번호" onChange={hadlePassword} />
          </label>
          <label htmlFor="confirmPw">
            <MdOutlineLockPerson className="icon" />
            <input type="password" id="confirmPw" placeholder="비밀번호 확인" onChange={handlePasswordConfirm} />
          </label>
          <Button>계정 만들기</Button>
        </form>
      </FormDiv2>
    </AuthDiv>
  );
};

export default SignUp;
