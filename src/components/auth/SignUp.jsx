import { Button } from '../../style/buttonStyle';
import { AuthDiv, Title } from '../../style/logIn/logInStyle';
import { MdLockOutline, MdOutlineFaceUnlock, MdOutlineLockPerson, MdOutlineMail } from 'react-icons/md';
import { FormDiv2 } from '../../style/logIn/signUpStyle';
import { useState } from 'react';
import { supabase } from '../../supabase/supabaseClient';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
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

    const { data } = await supabase.auth.signUp({
      email,
      password
    });
    console.log(data);

    if (data) {
      const { data: insertData } = await supabase
        .from('users')
        .insert({
          id: data.user.id,
          nickname: name
        })
        .select();
      console.log('data->', data);

      if (insertData) {
        alert('회원가입이 완료되었습니다.');
        navigate('/');
      }
    }
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
          {/* <p>{}</p> */}
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

// import { Button } from '../../style/buttonStyle';
// import { AuthDiv, Title } from '../../style/logIn/logInStyle';
// import { MdLockOutline, MdOutlineFaceUnlock, MdOutlineLockPerson, MdOutlineMail } from 'react-icons/md';
// import { FormDiv2 } from '../../style/logIn/signUpStyle';
// import { useState } from 'react';

// const SignUp = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [checkPw, setCheckPw] = useState('');

//   const handleEmail = (e) => {
//     setEmail(e.target.value);
//   };

//   const hadlePassword = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleName = (e) => {
//     setName(e.target.value);
//   };

//   const handlecheckPw = (e) => {
//     setCheckPw(e.target.value);
//   };

//   return (
//     <AuthDiv>
//       <Title>WOD</Title>
//       <FormDiv2>
//         <p>오운완 커뮤니티에 오신 것을 환영합니다</p>
//         <form>
//           <label htmlFor="name">
//             <MdOutlineFaceUnlock className="icon" />
//             <input type="text" id="name" placeholder="닉네임" onChange={handleName} />
//           </label>
//           <label htmlFor="email">
//             <MdOutlineMail className="icon" />
//             <input type="email" id="email" placeholder="이메일 주소" onChange={handleEmail} />
//           </label>
//           <label htmlFor="password">
//             <MdLockOutline className="icon" />
//             <input type="password" id="password" placeholder="8~12자리의 비밀번호" onChange={hadlePassword} />
//           </label>
//           <label htmlFor="checkPw">
//             <MdOutlineLockPerson className="icon" />
//             <input type="password" id="checkPw" placeholder="비밀번호 확인" onChange={handlecheckPw} />
//           </label>
//           <Button>계정 만들기</Button>
//         </form>
//       </FormDiv2>
//     </AuthDiv>
//   );
// };

// export default SignUp;
