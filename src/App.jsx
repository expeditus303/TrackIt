import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import HabitsPage from "./pages/HabitsPage/HabitsPage";
import History from "./pages/History/History";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import TodayPage from "./pages/TodayPage/TodayPage";
import GlobalStyle from "./styles/GlobalStyle";
import { LoginContext } from "./contexts/LoginContext";
import { useState } from "react";

// apagar abaixo os imports


function App() {

  const [token, setToken] = useState("")
  console.log(token)

  return (
    <BrowserRouter>
      <Body>
        <GlobalStyle />
        <LoginContext.Provider value={{token, setToken}}>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/cadastro" element={<SignUpPage />} />
            <Route
              path="/habitos"
              element={<HabitsPage/>}
            />
            <Route path="/hoje" element={<TodayPage />} />
            <Route path="/historico" element={<History />} />
          </Routes>
        </LoginContext.Provider>
      </Body>
    </BrowserRouter>
  );
}

export default App;

const Body = styled.div`
  margin: auto;
  width: 375px;
  font-family: "Lexend Deca", sans-serif;
  margin-top: 70px;
  margin-bottom: 150px;
  /* background-color: #d0d0d0; */
  /* background-color: deeppink; */

  button:hover,
  ion-icon:hover {
    cursor: pointer;
  }
`;
