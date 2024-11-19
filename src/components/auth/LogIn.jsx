import { MdOutlineMail } from 'react-icons/md';
import { MdLockOutline } from 'react-icons/md';
import { Button } from '../../style/buttonStyle';
import { PiUserCircleLight } from 'react-icons/pi';
import { FormDiv, SloganDiv, Title, AuthDiv } from '../../style/logIn/logInStyle';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../supabase/supabaseClient';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const hadlePassword = (e) => {
    setPassword(e.target.value);
  };

  const logInUser = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    if (error) {
      alert('비밀번호가 틀렸습니다. 다시 입력해주세요');
    } else if (data) {
      navigate('/home');
    }
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
              <input type="email" id="email" placeholder="Email ID" onChange={handleEmail} />
            </label>
            <label htmlFor="password">
              <MdLockOutline className="icon" />
              <input type="password" id="password" placeholder="Password" onChange={hadlePassword} />
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

// import { MdOutlineMail } from 'react-icons/md';
// import { MdLockOutline } from 'react-icons/md';
// import { Button } from '../../style/buttonStyle';
// import { PiUserCircleLight } from 'react-icons/pi';
// import { FormDiv, SloganDiv, Title, AuthDiv } from '../../style/logIn/logInStyle';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const LogIn = () => {
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();
//   const navi = useNavigate();

//   const handleEmail = (e) => {
//     setEmail(e.target.value);
//   };

//   const hadlePassword = (e) => {
//     setPassword(e.target.value);
//   };

//   return (
//     <>
//       <AuthDiv>
//         <Title>WOD</Title>
//         <SloganDiv>
//           <h1>WOD</h1>
//           <h4>"오늘 흘리는 땀은 내일의 에너지가 된다"</h4>
//           <p>오늘의 운동 기록, 건강 tip을 공유해 보세요.</p>
//         </SloganDiv>
//         <FormDiv>
//           <PiUserCircleLight style={{ fontSize: '160px' }} />
//           <form>
//             <label htmlFor="email">
//               <MdOutlineMail className="icon" />
//               <input type="email" id="email" placeholder="Email ID" onChange={handleEmail} />
//             </label>
//             <label htmlFor="password">
//               <MdLockOutline className="icon" />
//               <input type="password" id="password" placeholder="Password" onChange={hadlePassword} />
//             </label>
//           </form>
//           <div>
//             <Button padding="15px 60px">LOGIN</Button>
//             <Button padding="15px 46px" onClick={() => navi('/signup')}>
//               계정 만들기
//             </Button>
//           </div>
//         </FormDiv>
//       </AuthDiv>
//     </>
//   );
// };

// export default LogIn;
