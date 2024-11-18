import { AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MyPageContainer = styled.div`
  /* 정렬을 쉽게 도와주는 css */
  /* 안에 있는 태그들이 좌우로 정렬됨 */
  display: flex;
`

// TODO: Sidebar는 추후에 다른 사람 걸로 교체
const Sidebar = styled.div`
  width: 400px;
  height: 100vh;
  border-right: 1px solid gray;
`

const UserContainer = styled.div`
  flex: 1;
`

// 유저 프로필 사진이 올라갈 수 있는 사이클 도형 생성
const CircleContainer = styled.div`
  display: flex;
  align-items: center;
  padding:40px 1em 3em 15em;
  border-bottom: 1px solid gray;
`;
const Circle = styled.div`
  width: 150px;
  height: 150px;
  border: 1px solid gray;
  border-radius: 50%;
  box-shadow: 1px 3px 4px 0px gray;
  display: flex;
  align-items:center;
  justify-content: center;
  font-size:50px;
`;
const UserText = styled.label`
  margin-left: 15px;
  font-size: 50px;
  color: black;
  cursor: pointer;
`;
// 업로딩 되는 영역
const WrapUserData = styled.div`
    width: 400px;
    height: 500px;
`
// 버튼 스타일링
const ProfileSettingButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  margin-left: 40px;
  border-radius: 15px;
  width: 100px;
  height: 30px;
`;
// 하단부 이미지 프로필 사진 영역 
const MiniCircle = styled.div`
    width: 80px;
    height: 80px;
    border: 1px solid gray;
    border-radius: 50%;
    margin: 20px auto;
    transition: background-color 0.3s ease;
    margin-left:20px;
    &:hover {
      transform: scale(1.05); // 크기 확대
    }
    box-shadow: 1px 1px 1px 1px gray;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    `
    const InfoContainer = styled.div`
    margin-top: 20px;
    padding: 20px;
    border: 1px solid gray;
    border-radius: 10px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  `;

  const InfoItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    padding: 10px 0;
    border-bottom: 1px solid #ddd;

    &:last-child {
      border-bottom: none;
    }
  `;

  const InfoLabel = styled.span`
    font-size: 18px;
    font-weight: 600;
  `;

const Mypage = () => {

  return (
    <>
      <MyPageContainer>
        <Sidebar />

        <UserContainer>
          <CircleContainer>
            <Circle>
            <AiOutlineUser />
            </Circle>
            <UserText>user</UserText>
            <Link to={'/update'}>
            <ProfileSettingButton>프로필 수정</ProfileSettingButton>
            </Link>
          </CircleContainer>

          
          {/* 아래 사용자 데이터 표시 */}
          <WrapUserData>
            <MiniCircle>
              <AiOutlineUser/>
            </MiniCircle>


          {/* USER, 게시글, 피드, 이미지 영역 */}
          <InfoContainer>
            <InfoItem>
              <InfoLabel>USER</InfoLabel>
            
            </InfoItem>
            <InfoItem>
              <InfoLabel>게시글</InfoLabel>
            
            </InfoItem>
            <InfoItem>
              <InfoLabel>피드</InfoLabel>
           
            </InfoItem>
            <InfoItem>
              <InfoLabel>이미지</InfoLabel>
             
            </InfoItem>
          </InfoContainer>






          </WrapUserData>
        </UserContainer>
      </MyPageContainer>
    </>
  );
};
export default Mypage;
