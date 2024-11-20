import styled from 'styled-components';

export const Button = styled.button`
  transition: background-color 0.3s;
  padding: ${(props) => props.padding || '10px 20px'};
  font-size: ${(props) => props.fontSize || '16px'};
  border-radius: ${(props) => props.borderRadius || '10px'};
`;
