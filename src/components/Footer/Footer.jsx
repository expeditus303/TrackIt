import { Link } from "react-router-dom";
import styled from "styled-components";
import { accentColor } from "../../constants/colors";

export default function Footer() {
  return (
    <FooterContainer data-test="menu">
      <Link to="/habitos">
        <button data-test="habit-link">Habits</button>
      </Link>

      <Link to="/hoje">
        <button id="today" data-test="today-link">Today</button>
      </Link>

      <Link to="/historico">
        <button data-test="history-link">History</button>
      </Link>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  height: 114px;
  width: 375px;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 34px;
  box-sizing: border-box;
  background-color: #FFFFFF;

  button {
    font-family: "Lexend Deca";
    font-size: 17.976px;
    border-style: none;
    width: auto;
    color: ${accentColor};
    border: none;
    background: none;
    padding: 0;
    margin: 0;
  }

  #today {
  }
`;
