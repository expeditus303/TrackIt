import { Link } from "react-router-dom";
import styled from "styled-components";
import { accentColor } from "../../constants/colors";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useContext } from "react";
import { LoginContext } from "../../contexts/LoginContext";

export default function Footer() {
  const { percentageCompleted } = useContext(LoginContext)

  return (
    <FooterContainer>
      <Link to="/habitos">
        <button>Habits</button>
      </Link>

      <Link to="/hoje">
        <button id="today">
          <CircularProgressbar
            value={percentageCompleted}
            text={`Today`}
            background
            backgroundPadding={6}
            styles={buildStyles({
              backgroundColor: "#3e98c7",
              textColor: "#fff",
              pathColor: "#fff",
              trailColor: "transparent",
            })}
          />
        </button>
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
  background-color: #ffffff;
  margin-bottom: 10px;
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
    width: 95px;
  }
`;
