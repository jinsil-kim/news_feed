import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 10px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 590px;
`;

export const TextArea = styled.textarea`
  border: none;
  resize: none;
  outline: none;
  width: 100%;
  height: 100px;
  font-size: 1em;
`;