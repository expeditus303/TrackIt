import { NavBarContainer } from "./styled";
import photo from "../../assets/hoppe.png"

export default function NavBar() {
    return (
        <NavBarContainer>
        <h1>TrackIt</h1>
        <img src={photo} alt="" />
        </NavBarContainer>
    )
}