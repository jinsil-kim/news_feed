import styled from 'styled-components';

export const LabelImage = styled.label`
  cursor: pointer;
  display: block;
  width: 100%;
  max-width: 630px; /* 동일한 너비 설정 */
  height: 250px;
  border-radius: 10px;
  border: 2px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: border-color 0.3s, background-color 0.3s;
  background-color: #f9f9f9;
  margin-bottom: 50px;

  &:hover {
    border-color: #007bff;
    background-color: #eef6ff;
  }
`;

export const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

export const Placeholder = styled.div`
  color: #aaa;
  font-size: 1.2em;
  padding: 10px;
`;
