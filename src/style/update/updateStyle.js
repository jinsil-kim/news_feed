import styled from 'styled-components';

export const ProfileDiv = styled.div`
  left: 250px;
  position: relative;
  margin: 30px 0 80px 0;
  width: 86vw;
`;

export const TitleHeader = styled.header`
  padding: 60px 50px;
  border-bottom: 1px solid #bebebe;
  h2 {
    font-size: 40px;
    font-weight: 700;
  }
`;

export const ProfileSection = styled.section`
  margin: 80px 200px;
  display: flex;
  flex-direction: column;
`;

export const ImgDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 50px;
  width: 700px;
  height: 200px;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  img {
    border-radius: 50%;
    width: 140px;
    height: 140px;
    object-fit: cover;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  }
  div {
    justify-content: space-between;
    width: 240px;
    display: flex;
  }
`;

export const InputDiv = styled.div`
  width: 56%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  form {
    margin: 30px 0;
    display: flex;
    flex-direction: column;
  }
  label {
    margin: 0 0 20px 10px;
    font-size: 32px;
    font-weight: 600;
  }
  input {
    width: 700px;
    height: 40px;
    border: none;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
`;
