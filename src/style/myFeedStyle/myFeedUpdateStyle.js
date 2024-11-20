import styled from 'styled-components';

export const ContainerDiv = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 60%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    /* width: 100%; */
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 5px;
    outline: none;
  }
`;

export const ContentInput = styled.input`
  width: 50%;
  height: 20%;
  padding: 500px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
`;

export const ImageDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 600px;
    height: 400px;
    object-fit: contain;
    border-radius: 10px;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  }
  label {
    font-size: 20px;
  }
`;

export const TagInputDiv = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  button {
    font-size: 20px;
    border-radius: 15px;
    width: 40%;
  }
`;


export const FeedChangeButton= styled.button`
margin-top: 10px;
padding: 15px 50px;
font-size: 20px;
border-radius: 15px;
`