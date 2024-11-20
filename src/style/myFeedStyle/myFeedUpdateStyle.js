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
`;

export const ContentInput = styled.textarea`
  width: 560px;
  height: 80px;
  padding: 20px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
  resize: none;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
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
    margin: 10px;
    display: flex;
    gap: 10px;
    background-color: #01b7fb;
    padding: 10px;
    border-radius: 8px;
  }
`;

export const TagInputDiv = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  input {
    padding: 10px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid gray;
  }
  button {
    font-size: 15px;
    border-radius: 15px;
    padding: 10px;
  }
`;

export const TagDiv = styled.div`
  font-size: 20px;
  display: flex;
  gap: 10px;
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px; /* 태그 간 간격 */
  padding: 8px;
  border: 1px solid #ccc;
`;

export const FeedChangeButton = styled.button`
  margin-top: 10px;
  padding: 10px 270px;
  font-size: 18px;
  border-radius: 15px;
`;
