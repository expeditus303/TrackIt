import styled from "styled-components";
import { baseColor } from "../../constants/colors";

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 375px;
  height: 70px;
  padding: 0px 18px;
  left: auto;
  top: 0;
  box-sizing: border-box;
  background-color: ${baseColor};
  margin-bottom: 28px;
  position: fixed;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  z-index: 1;

  h1 {
    font-family: "Playball", cursive;
    font-size: 38.982px;
    color: #ffffff;
  }

  img {
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
  }

  a {
    text-decoration: none;
  }
`;
