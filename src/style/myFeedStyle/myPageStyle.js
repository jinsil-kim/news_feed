import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MyPageContainer = styled.div`
  /* 정렬을 쉽게 도와주는 css */
  /* 안에 있는 태그들이 좌우로 정렬됨 */
  width: 50vw;
`;

// TODO: Sidebar는 추후에 다른 사람 걸로 교체

export const UserContainer = styled.div`
  position: relative;
  left: 150px;
  margin: 10px 0 80px 100px;
`;

// 유저 프로필 사진이 올라갈 수 있는 사이클 도형 생성
export const CircleContainer = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  padding: 30px 50px;
  width: 100%;
  z-index: 99;
  border-bottom: 1px solid #c7c7c7;
  background-color: white;
`;

export const Circle = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  box-shadow: 1px 3px 4px 0px gray;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserText = styled.label`
  margin-left: 30px;
  font-size: 40px;
  color: black;
  font-weight: 700;
`;

// 업로딩 되는 영역
export const WrapUserData = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 150px;
  padding: 100px 130px;
  gap: 100px;
`;

// 버튼 스타일링
export const ProfileSettingButton = styled.button`
  border-radius: 30px;
  font-size: 16px;
  padding: 0.7em;
`;

export const UserProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

//MyFeed 영역
export const ButtonDiv = styled.div`
  position: relative;
  left: 730px;
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  div {
    display: flex;
    gap: 10px;
    margin-top: 10px;
  }
  button {
    font-size: 15px;
    padding: 8px 15px;
    border-radius: 10px;
  }
`;
export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 15px;
  padding: 8px 15px;
  border-radius: 10px;
  border: 1px solid transparent;
  background-color: black;
  cursor: pointer;
  &:hover {
    background-color: #41503e;
  }
`;

export const ImageDiv = styled.div`
  margin-left: 100px;
  img {
    width: 850px;
    height: 450px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  }
`;

export const ContentDiv = styled.div`
  margin: 40px 0 30px 100px;
  p {
    font-size: 24px;
    margin-bottom: 30px;
    line-height: 1.5;
  }
  span {
    font-size: 18px;
    //TODO: 태그부분은 로직 합치면 정은님이 구현 부탁드려요
  }
`;
