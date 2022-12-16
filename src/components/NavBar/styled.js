import styled from "styled-components";
import { baseColor } from "../../constants/colors";

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: ${baseColor};

  h1 {
    font-family: "Playball", cursive;
    font-size: 38.982px;
    color: #ffffff;
  }

  
`;
