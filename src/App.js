import styled from "styled-components";
import HabitsPage from "./pages/HabitsPage/HabitsPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <Body>
      <GlobalStyle />
      {/* <LoginPage /> */}
      {/* <SignUpPage /> */}
      <HabitsPage />
    </Body>
  );
}

export default App;

const Body = styled.div`
  margin: auto;
  width: 375px;
  height: 100vh;
  font-family: 'Lexend Deca', sans-serif;
  background-color: deeppink;
`;
