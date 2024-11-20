import styled from 'styled-components';

export const AuthDiv = styled.div`
  background-image: url('https://cdn.pixabay.com/photo/2020/01/21/11/39/running-4782722_1280.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const Title = styled.div`
  color: white;
  font-size: 30px;
  font-weight: 900;
  position: fixed;
  left: 80px;
  top: 50px;
`;
export const SloganDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  color: white;

  h1 {
    font-size: 128px;
    font-weight: 900;
    margin-bottom: 80px;
  }
  h4 {
    font-size: 40px;
    margin-bottom: 20px;
  }
  p {
    font-size: 32px;
  }
`;

export const FormDiv = styled.div`
  background-color: rgba(44, 44, 44, 0.8);
  width: 533px;
  height: 694px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  color: white;
  gap: 10px;
  margin-top: 100px;
  margin-right: 150px;
  form {
    display: contents;
    margin-bottom: 20px;
    font-size: 25px;
  }
  div {
    display: contents;
  }
  label {
    display: flex;
  }
  input {
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
    padding: 10px;
    background-color: transparent;
    margin: 10px;
    color: white;
    &:focus {
      border-bottom: 1px solid #89a448;
    }
  }
  .icon {
    margin-top: 15px;
    font-size: 30px;
  }
`;