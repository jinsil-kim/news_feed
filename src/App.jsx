import { createGlobalStyle } from "styled-components";
import "./App.css";
import Router from "./shared/Router";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
