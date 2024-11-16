import styled from 'styled-components';

export const Button = styled.button`
  padding: ${(props) => props.padding || '10px 20px'};
  font-size: ${(props) => props.fontSize || '16px'};
  border-radius: ${(props) => props.borderRadius || '10px'};
`;
