import styled from "styled-components";

export const MyPageContainer = styled.div`
  /* 정렬을 쉽게 도와주는 css */
  /* 안에 있는 태그들이 좌우로 정렬됨 */
  position: relative;
  left: 280px;
  margin: 50px 0 80px 0;
  max-width: 1280px;
`;

// TODO: Sidebar는 추후에 다른 사람 걸로 교체

export const UserContainer = styled.div`
  flex: 1;
`;

// 유저 프로필 사진이 올라갈 수 있는 사이클 도형 생성
export const CircleContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 40px 1em 3em 0em;
  border-bottom: 1px solid gray;
`;
export const UserText = styled.label`
  margin-left: 15px;
  font-size: 50px;
  color: black;
  cursor: pointer;
`;
// 업로딩 되는 영역
export const WrapUserData = styled.div`
  /* width: 400px;
  height: 500px; */
  display: flex;
`;
// 버튼 스타일링
export const ProfileSettingButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  margin-left: 40px;
  border-radius: 15px;
  width: 100px;
  height: 30px;
`;
// 하단부 이미지 프로필 사진 영역
export const MiniCircle = styled.div`
  width: 100px;
  height: 80px;
  border: 1px solid gray;
  border-radius: 50%;
  margin: 20px auto;
  transition: background-color 0.3s ease;
  margin-left: 20px;
  &:hover {
    transform: scale(1.05); // 크기 확대
  }
  box-shadow: 1px 1px 1px 1px gray;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;
export const InfoContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  padding: 10px 0;
`;

export const UserLabel = styled.h2`
  font-size: 24px;
  font-weight: 600;
`

export const InfoLabel = styled.span`
  font-size: 18px;
  font-weight: 600;
`;


export const TagLabels = styled.div`
  display: flex;
  /* 간격 설정 */
  gap: 12px;
`

export const TagLabel = styled.span`
  border: 1px solid black;
  /* 내부 공간 */
  padding: 8px 20px;
  /* 둥글둥글 */
  border-radius: 10px;
  background-color:black;
`

export const MyFeedImg = styled.img`
  /* 나중에 수정하기 */
  width: 500px;
  height: 300px;

`

export const Circle = styled.div`
  width: 150px;
  height: 150px;
  border: 1px solid gray;
  border-radius: 50%;
  box-shadow: 1px 3px 4px 0px gray;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
`;

export const UserProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`