import { useEffect, useState } from 'react';
import { ProfileDiv, ProfileSection, TitleHeader } from '../../style/update/updateStyle';
import ProfileImgUpdate from './ProfileImgUpdate';
import ProfileInputField from './ProfileInputField';
import { supabase } from '../../supabase/supabaseClient';

const UpdateProfile = () => {
  // 사용자 데이터와 프로필 이미지 URL 상태 관리
  const [users, setUsers] = useState(null); // 현재 로그인된 사용자 정보를 저장
  const [profileUrl, setProfileUrl] = useState(''); // 프로필 이미지 URL 저장

  // 사용자 데이터 가져오기
  useEffect(() => {
    console.log('Fetching user data...');

    const fetchUsers = async () => {
      // Supabase를 통해 현재 인증된 사용자 정보 가져오기
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        console.log('Error fetching user data:', error.message); // 오류 로그 출력
        return;
      }
      //프로필 url 가져오기
      const { data: userData, error: userError } = await supabase.from('users').select().eq('id', data.user.id);

      console.log('Fetched user:', data.user); // 사용자 정보 출력
      setUsers(data.user); // 사용자 정보를 상태로 저장
      setProfileUrl(userData[0].profile_img);
    };

    fetchUsers(); // 사용자 데이터를 가져오기 위해 함수 호출
  }, []);

  // 이미지 업로드 처리
  const uploadImage = async (file) => {
    // Supabase 스토리지에 파일 업로드
    const uniqueFileName = `${Date.now()}-${file.name}`; // 파일 이름 중복 방지를 위한 고유 이름 생성
    const { data, error } = await supabase.storage.from('profile_img').upload(uniqueFileName, file);

    if (error) {
      console.error('Error uploading image:', error.message); // 업로드 실패 시 로그 출력
      return null; // 실패 시 null 반환
    }

    // 업로드된 파일의 공용 URL 가져오기 // 요기 로직 다시 확인
    return supabase.storage.from('profile_img').getPublicUrl(data.path);
  };

  // 이미지 업로드 핸들러
  const handleImageUpload = async (event) => {
    const file = event.target.files[0]; // 파일 선택
    if (!file) return; // 파일이 없으면 중단

    // 브라우저에서 이미지 미리보기 URL 생성
    const reader = new FileReader();
    reader.onload = () => setProfileUrl(reader.result); // 미리보기 URL 설정
    reader.readAsDataURL(file);

    const { data } = await uploadImage(file); // 이미지 업로드 후 URL 가져오기
    if (data.publicUrl) {
      setProfileUrl(data.publicUrl); // 업로드된 URL을 상태로 설정
      await supabase
        .from('users')
        .update({
          profile_img: data.publicUrl
        })
        .eq('id', users.id);
    }
    event.target.value = null; // 파일 입력 초기화
  };

  // 이미지 삭제 핸들러
  const handleDeleteImg = async () => {
    if (!profileUrl) {
      console.error('Profile URL is empty.'); // 삭제할 이미지가 없는 경우
      return;
    }

    // URL에서 파일 이름 추출 (쿼리 문자열 제거 포함)
    const fileName = profileUrl.split('/').pop().split('?')[0];

    // Supabase 스토리지에서 파일 삭제
    const { error: deleteError } = await supabase.storage.from('profile_img').remove([fileName]);
    if (deleteError) {
      alert('이미지 삭제 중 오류가 발생했습니다.');
      console.error(deleteError.message); // 오류 로그 출력
      return;
    }

    // 데이터베이스에서 profile_url 필드를 null로 업데이트
    const { error: updateError } = await supabase.from('users').update({ profile_img: null }).eq('id', users.id);
    if (updateError) {
      alert('프로필 URL 업데이트 중 오류가 발생했습니다.');
      console.error(updateError.message); // 오류 로그 출력
      return;
    }

    setProfileUrl(''); // 상태 초기화
    console.log('프로필 이미지가 성공적으로 삭제되었습니다.');
  };

  // 닉네임 업데이트 핸들러
  const updateNickname = async (nickname) => {
    if (!nickname) {
      console.error('Nickname is empty.'); // 빈 닉네임 처리
      return;
    }

    // Supabase를 사용해 데이터베이스에서 닉네임 업데이트
    const { error } = await supabase
      .from('users')
      .update({ nickname }) // 닉네임 필드 업데이트
      .eq('id', users.id); // 현재 사용자 ID로 업데이트 필터링
    if (error) {
      console.error('Error updating nickname:', error.message); // 업데이트 실패 로그
      return;
    }

    console.log('Nickname updated successfully'); // 성공 메시지 출력
  };

  // 비밀번호 업데이트 핸들러
  const updatePassword = async (newPassword) => {
    if (!newPassword || newPassword.length < 6) {
      console.error('Invalid password. Must be at least 6 characters.'); // 비밀번호 유효성 검사
      return;
    }

    // Supabase를 사용해 비밀번호 업데이트
    const { data, error } = await supabase.auth.updateUser({ password: newPassword });
    if (error) {
      console.error('Error updating password:', error.message); // 업데이트 실패 로그
      return null;
    }

    console.log('Password updated successfully'); // 성공 메시지 출력
    return data;
  };

  return (
    <>
      <ProfileDiv>
        <TitleHeader>
          <h2>프로필 설정</h2>
        </TitleHeader>
        <ProfileSection>
          {/* 이미지 업로드 및 삭제 컴포넌트 */}
          <ProfileImgUpdate img={profileUrl} onUpLoad={handleImageUpload} handleDeleteImg={handleDeleteImg} />
          {/* 닉네임 및 비밀번호 업데이트 컴포넌트 */}
          <ProfileInputField updatePassword={updatePassword} updateNickname={updateNickname} />
        </ProfileSection>
      </ProfileDiv>
    </>
  );
};

export default UpdateProfile;
