import { MdOutlineMail } from 'react-icons/md';
import { MdLockOutline } from 'react-icons/md';
import { Button } from '../../style/buttonStyle';
import { PiUserCircleLight } from 'react-icons/pi';
import { FormDiv, SloganDiv, Title, AuthDiv } from '../../style/authStyle/longinStyle';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../supabase/supabaseClient';

const LogIn = () => {
  // TODO: useState의 초기값을 객체로 만들면 더 간결하게 만들 수 있습니다. 실제 회사에서도 거의 그 방식을 사용합니다.
  // ex)
  // const [values, setValues] = useState({
  //   email: '',
  //   password: ''
  // });
  // BEFORE
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // AFTER
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  // BEFORE
  const handleEmail = (e) => {
    // setEmail(e.target.value);
    setUserInfo({
      ...userInfo,
      email: e.target.value
    });
  };

  const hadlePassword = (e) => {
    // setPassword(e.target.value);
    setUserInfo({
      ...userInfo,
      password: e.target.value
    });
  };

  // AFTER
  const handleUserInfo = (e) => {
    // e.target: 이벤트가 발생한 지점 <input />
    // e.target.value: input 에 입력한 값 === abc@naver.com
    // e.target.name: input의 name 속성 값 === email

    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value
      // email: abc@naver.com
    });
  };

  const logInUser = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    // BEFORE
    if (error) {
      // TODO: 비밀번호가 틀린 게 아닐 수도 있습니다.
      alert('비밀번호가 틀렸습니다. 다시 입력해주세요');
    } else if (data) {
      navigate('/home');
    }

    // AFTER
    // TODO: 아래와 같이 코드를 수정할 수도 있겠네요.
    // return을 넣어 else if를 없애 코드를 더 간결하게 만들 수 있습니다.
    if (error) {
      return alert(`로그인에 실패했습니다. ${error.message}`);
    }
    navigate('/home');
  };

  return (
    <>
      <AuthDiv>
        <Title>WOD</Title>
        <SloganDiv>
          <h1>WOD</h1>
          <h4>"오늘 흘리는 땀은 내일의 에너지가 된다"</h4>
          <p>오늘의 운동 기록, 건강 tip을 공유해 보세요.</p>
        </SloganDiv>
        <FormDiv>
          <PiUserCircleLight style={{ fontSize: '160px' }} />
          <form onSubmit={logInUser}>
            <label htmlFor="email">
              <MdOutlineMail className="icon" />
              <input
                name="email"
                type="email"
                id="email"
                placeholder="Email ID"
                value={userInfo.email}
                onChange={handleUserInfo}
              />
            </label>
            <label htmlFor="password">
              <MdLockOutline className="icon" />
              <input
                name="password"
                type="password"
                id="password"
                placeholder="Password"
                value={userInfo.password}
                onChange={handleUserInfo}
              />
            </label>
            <div>
              <Button padding="15px 60px">LOGIN</Button>
              <Button padding="15px 46px" type="button" onClick={() => navigate('/signup')}>
                계정 만들기
              </Button>
            </div>
          </form>
        </FormDiv>
      </AuthDiv>
    </>
  );
};
export default LogIn;
