import { Link } from "react-router-dom";
import styled from "styled-components";
import { accentColor } from "../../constants/colors";

export default function Footer() {
  return (
    <FooterContainer>
      <Link to="/habitos">
        <button>Habits</button>
      </Link>

      <Link to="/hoje">
        <button id="today">Today</button>
      </Link>

      <Link to="/historico">
        <button>History</button>
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
