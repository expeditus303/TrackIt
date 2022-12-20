import styled from "styled-components";
import { accentColor } from "../../constants/colors";

export const LoginContainer = styled.div`
  margin: auto;
  width: 303px;
  display: flex;
  flex-direction: column;
  align-items: center;

  input,
  button {
    width: 100%;
    height: 45px;
    box-sizing: border-box;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    padding: 11px;
    margin-bottom: 6px;
    font-size: 19.976px;
  }

  input::placeholder {
    font-size: 19.976px;
    color: #dbdbdb;
    font-family: "Lexend Deca";
  }

  button {
    background: ${accentColor};
    height: auto;
    font-size: 20.976px;
    color: #ffffff;
    line-height: 26px;
    margin-bottom: 25px;
    display: flex;
    justify-content: center;
  }

  p {
    font-size: 13.976px;
    text-decoration-line: underline;
    color: ${accentColor};
  }
`;
