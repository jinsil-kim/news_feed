import styled from "styled-components";

export const TagSelectorContainer = styled.div`
  width: 100%;
  max-width: 630px; /* 동일한 너비 설정 */
  margin-bottom: 50px;
`;

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Tag = styled.span`
  background-color: ${(props) => props.color};
  color: black;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.9em;
`;

export const TagInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 10px;
  font-size: 1em;
  outline: none;
  margin-bottom: 10px;
`;