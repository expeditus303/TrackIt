import { NavBarContainer } from "./styled";
import photo from "../../assets/hoppe.png"
import { useContext } from "react";
import { LoginContext } from "../../contexts/LoginContext";
import { Link } from "react-router-dom";

export default function NavBar() {

    const {image, token} = useContext(LoginContext)

    return (
        <NavBarContainer>
        <Link to={token ? "/hoje" : "/"}>
        <h1>TrackIt</h1>
        </Link>
        <img src={image} alt="" />
        </NavBarContainer>
    )
}

