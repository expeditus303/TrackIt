import { NavBarContainer } from "./styled";
import photo from "../../assets/hoppe.png"
import { useContext } from "react";
import { LoginContext } from "../../contexts/LoginContext";

export default function NavBar() {

    const {image} = useContext(LoginContext)

    return (
        <NavBarContainer data-test="header">
        <h1>TrackIt</h1>
        <img src={image} alt="" />
        </NavBarContainer>
    )
}