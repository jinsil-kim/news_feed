import styled from 'styled-components';

export const FormDiv2 = styled.div`
  width: 1064px;
  height: 694px;
  background-color: rgba(44, 44, 44, 0.8);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  color: white;
  margin-top: 100px;
  p {
    font-size: 35px;
    margin-bottom: 50px;
    font-weight: 600;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 30px;
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
