import { MdOutlineMail } from 'react-icons/md';
import { MdLockOutline } from 'react-icons/md';
import { Button } from '../../style/buttonStyle';
import { PiUserCircleLight } from 'react-icons/pi';
import { FormDiv, LogInDiv, SloganDiv } from '../../style/logIn/logInStyle';

const LogIn = () => {
  return (
    <>
      <LogInDiv>
        <SloganDiv>
          <h1>WOD</h1>
          <h4>"오늘 흘리는 땀은 내일의 에너지가 된다"</h4>
          <p>오늘의 운동 기록, 건강 tip을 공유해 보세요.</p>
        </SloganDiv>
        <FormDiv>
          <PiUserCircleLight style={{ fontSize: '160px' }} />
          <form>
            <label htmlFor="email">
              <MdOutlineMail />
              <input type="email" id="email" placeholder="Email ID" />
            </label>
            <label htmlFor="password">
              <MdLockOutline />
              <input type="password" id="password" placeholder="Password" />
            </label>
          </form>
          <div>
            <Button padding="15px 60px">LOGIN</Button>
            <Button padding="15px 46px">계정 만들기</Button>
          </div>
        </FormDiv>
      </LogInDiv>
    </>
  );
};

export default LogIn;
