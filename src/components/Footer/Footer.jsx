import { Link } from "react-router-dom";
import styled from "styled-components";
import { accentColor } from "../../constants/colors";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";

export default function Footer() {
  const percentage = 66;

  return (
    <FooterContainer>
      <Link to="/habitos">
        <button>Habits</button>
      </Link>

      <Link to="/hoje">

        <button id="today">        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            rotation: 0.25,

            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: "butt",

            // Text size
            text: {
              // Text color
              fill: '#a20404',
              // Text size
              fontSize: '16px',
            },

            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 0.5,

            // Can specify path transition in more detail, or remove it entirely
            // pathTransition: 'none',

            // Colors
            pathColor: `${accentColor}, ${percentage / 100})`,
            textColor: "#f88",
            trailColor: "#d6d6d6",
            backgroundColor: {accentColor}
          })}
        /></button>
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
    width: 91px;
  }
`;
