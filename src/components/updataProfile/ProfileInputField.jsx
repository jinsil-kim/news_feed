import { InputDiv } from '../../style/upDate/updateStyle';
import { Button } from '../../style/buttonStyle';
import { useState } from 'react';

const ProfileInputField = ({ updateNickname, updatePassword }) => {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');

  const handleSave = () => {
    if (!nickname) {
      return alert('닉네임을 입력해주세요!');
    }

    if (!password) {
      return alert('비밀번호를 입력해주세요!');
    }

    if (password.length < 6) {
      return alert('비밀번호는 최소 6자 이상이어야 합니다!');
    }

    // 닉네임과 비밀번호 업데이트
    updateNickname(nickname);
    updatePassword(password);

    // 입력 필드 초기화
    setNickname('');
    setPassword('');
    alert('프로필이 성공적으로 업데이트되었습니다!');
  };

  return (
    <div>
      <InputDiv>
        <form>
          <label htmlFor="name">닉네임 변경</label>
          <input
            type="text"
            id="name"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="새 닉네임 입력"
          />
        </form>
        <form>
          <label htmlFor="pw">비밀번호 변경</label>
          <input
            type="password"
            id="pw"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="새 비밀번호 입력"
          />
        </form>
        <Button padding="20px 50px" fontSize="20px" onClick={handleSave}>
          저장하기
        </Button>
      </InputDiv>
    </div>
  );
};

export default ProfileInputField;
