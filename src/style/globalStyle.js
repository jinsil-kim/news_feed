import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}
body{
    font-family: 'Pretendard-Regular';
}

button{
  font-family: 'Pretendard-Regular';
  background-color: black;
  color: white;
  border: none;
  cursor: pointer;
  &:hover{
    background-color:#41503E;
  }
}
`;
export default GlobalStyle;