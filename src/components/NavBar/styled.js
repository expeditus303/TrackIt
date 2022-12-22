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
    display: block;
  }

  a {
    text-decoration: none;
  }

  div {
    position: relative;
  }

  .overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${baseColor};
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: .5s ease-in-out;
  
}

.container:hover {
  cursor: pointer;
}

.container:hover .overlay {
  height: 100%;
}

.text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
`;
